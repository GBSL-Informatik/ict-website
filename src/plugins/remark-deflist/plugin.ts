import { visit, CONTINUE, SKIP, EXIT } from 'unist-util-visit';
import type { Plugin, Transformer } from 'unified';
import type { MdxJsxFlowElement, MdxJsxTextElement } from 'mdast-util-mdx';
import { PhrasingContent, Root, RootContent, Text } from 'mdast';

// match to determine if the line is an opening tag
const DD_REGEX = /(\r?\n):[ \t]+(.*?)/;
const DD_CONSECUTIVE_REGEX = /^(\r?\n)?:[ \t]+(.*?)/;
type ActionStates =
    | 'SEEK_DD_START'
    | 'SEEK_CONSECUTIVE_DD_START'
    | 'COLLECT_DT_BODY'
    | 'COLLECT_DD_BODY'
    | 'ADD_TO_DL';

interface OptionsInput {
    classNames?: {
        dl?: string;
        dt?: string;
        dd?: string;
    };
    tagNames?: {
        dl?: string;
        dt?: string;
        dd?: string;
    };
}

const createMdxJsxFlowElementNode = (name: string, children: RootContent[] = [], className?: string) => {
    const attributes = className ? [{ type: 'mdxJsxAttribute', name: 'className', value: className }] : [];
    return {
        type: 'mdxJsxFlowElement',
        name: name,
        attributes: attributes,
        children: children,
        data: {
            _mdxExplicitJsx: true
        }
    } as MdxJsxFlowElement;
};
const createMdxJsxTextElementNode = (name: string, children: RootContent[] = [], className?: string) => {
    return {
        ...createMdxJsxFlowElementNode(name, children, className),
        type: 'mdxJsxTextElement'
    } as MdxJsxTextElement;
};

const plugin: Plugin<OptionsInput[], Root> = function plugin(this, optionsInput = {}): Transformer<Root> {
    const { classNames, tagNames } = { tagNames: {}, classNames: {}, ...(optionsInput || {}) };
    const DL = tagNames.dl || 'dl';
    const DT = tagNames.dt || 'dt';
    const DD = tagNames.dd || 'dd';
    const getDLNode = (children: RootContent[] = []) => {
        return createMdxJsxFlowElementNode(DL, children, classNames.dl);
    };

    const getDTNode = (children: RootContent[]) => {
        return createMdxJsxTextElementNode(DT, children, classNames.dt);
    };

    const getDDNode = (children: RootContent[]) => {
        return createMdxJsxTextElementNode(DD, children, classNames.dd);
    };
    return async (ast, vfile) => {
        visit(ast, 'paragraph', (node, _idx, parent) => {
            if (_idx === undefined || !parent) {
                return CONTINUE;
            }
            let idx = _idx;
            let action: ActionStates = 'SEEK_DD_START';
            visit(node, (cNode, _cIdx, cParent) => {
                /**
                 * RULE: only visit the direct children of the paragraph
                 *       --> only "SKIP" or "EXIT" are returned (except on the first visit)
                 */
                if (!cParent || _cIdx === undefined) {
                    /** continue to it's children if cParent is not present */
                    return CONTINUE;
                }
                let cIdx = _cIdx as number;
                switch (action) {
                    case 'SEEK_DD_START':
                        if (cNode.type === 'text') {
                            const ddMatch = cNode.value.match(DD_REGEX);
                            if (ddMatch) {
                                const pre = cNode.value.slice(0, ddMatch.index);
                                const dd = cNode.value.slice(ddMatch.index);
                                if (pre.trim()) {
                                    cParent.children.splice(cIdx, 0, {
                                        type: 'text',
                                        value: pre
                                    });
                                    cIdx++;
                                }
                                cParent.children.splice(cIdx, 1, {
                                    type: 'text',
                                    value: dd.trimStart().slice(1).trimStart() // remove leading colon
                                });
                                action = 'COLLECT_DT_BODY';
                                return [SKIP, cIdx];
                            }
                        }
                        return SKIP;
                    case 'COLLECT_DT_BODY':
                        if (cIdx === 0) {
                            /** the dl has no dt */
                            action = 'COLLECT_DD_BODY';
                            return [SKIP, cIdx];
                        }
                        visit(
                            cParent,
                            (dtNode, dtIdx, dtParent) => {
                                if (dtIdx === undefined) {
                                    return CONTINUE;
                                }
                                const correctNested = dtParent && dtParent === cParent;
                                if (!correctNested || dtIdx >= cIdx) {
                                    if (correctNested) {
                                        return SKIP;
                                    }
                                    return CONTINUE;
                                }
                                if (dtNode.type === 'text') {
                                    const text = dtNode as Text;
                                    const newLineMatch = text.value.match(/\r?\n/);
                                    if (newLineMatch) {
                                        const pre = text.value.slice(0, newLineMatch.index);
                                        const post = text.value.slice(
                                            (newLineMatch.index || 0) + newLineMatch[0].length
                                        );
                                        const newChildren: PhrasingContent[] = [];
                                        const dtNodes = dtParent.children.splice(
                                            dtIdx + 1,
                                            cIdx - (dtIdx + 1)
                                        );
                                        if (pre.trim()) {
                                            newChildren.push({
                                                type: 'text',
                                                value: pre
                                            });
                                        }
                                        if (post.trim()) {
                                            dtNodes.splice(0, 0, {
                                                type: 'text',
                                                value: post
                                            });
                                        }
                                        newChildren.push(getDTNode(dtNodes));
                                        dtParent.children.splice(dtIdx, 1, ...newChildren);
                                        action = 'ADD_TO_DL';
                                        return EXIT;
                                    }
                                }
                                if (dtIdx === 0) {
                                    const dtNodes = dtParent.children.splice(0, cIdx);
                                    dtParent.children.splice(0, 0, getDTNode(dtNodes));
                                    action = 'ADD_TO_DL';
                                    cIdx = 0;
                                    return EXIT;
                                }
                                return SKIP;
                            },
                            true
                        );
                        return [SKIP, cIdx];
                    case 'ADD_TO_DL':
                        /** if cIdx != 0, it means the paragraph did not start with
                         * the deflist. The current paragraph mus be splitted. */
                        if (cIdx !== 0) {
                            const pre = cParent.children.splice(0, cIdx) as PhrasingContent[];
                            parent.children.splice(idx, 0, {
                                type: 'paragraph',
                                children: pre
                            });
                            idx++;
                            cIdx = 0;
                        }
                        const dlCandidate = idx > 0 ? parent.children[idx - 1] : undefined;
                        const hasDL = dlCandidate?.type === 'mdxJsxFlowElement' && dlCandidate.name === DL;
                        const node2move = cParent.children.splice(cIdx, 1)[0];
                        if (node2move.type === 'mdxJsxTextElement' && node2move.name === DT) {
                            action = 'COLLECT_DD_BODY';
                        } else {
                            action = 'SEEK_CONSECUTIVE_DD_START';
                        }

                        if (hasDL) {
                            dlCandidate.children.push(node2move as unknown as MdxJsxFlowElement);
                        } else {
                            const dl = getDLNode([node2move]);
                            parent.children.splice(idx, 0, dl);
                            idx++;
                        }
                        if (cParent.children.length === 0) {
                            parent.children.splice(idx, 1);
                            return EXIT;
                        }
                        return [SKIP, cIdx];
                    case 'COLLECT_DD_BODY':
                        visit(cParent, (ddNode, ddIdx, ddParent) => {
                            if (ddIdx === undefined) {
                                return CONTINUE;
                            }
                            const correctNested = ddParent && ddParent === cParent;
                            if (!correctNested || ddIdx < cIdx) {
                                if (correctNested) {
                                    return SKIP;
                                }
                                return CONTINUE;
                            }
                            if (ddNode.type === 'text') {
                                const newLineMatch = ddNode.value.match(/\r?\n/);
                                if (newLineMatch) {
                                    const dd = ddNode.value.slice(0, newLineMatch.index);
                                    const post = ddNode.value.slice(
                                        (newLineMatch.index || 0) + newLineMatch[0].length
                                    );
                                    ddNode.value = dd;
                                    const ddNodes = ddParent.children.splice(cIdx, ddIdx - cIdx + 1);
                                    ddParent.children.splice(cIdx, 0, getDDNode(ddNodes));
                                    if (post.trim()) {
                                        ddParent.children.splice(cIdx + 1, 0, {
                                            type: 'text',
                                            value: post
                                        });
                                    }
                                    action = 'ADD_TO_DL';
                                    return EXIT;
                                }
                            }
                            if (ddIdx === cParent.children.length - 1) {
                                const ddNodes = ddParent.children.splice(cIdx, ddIdx - cIdx + 1);
                                ddParent.children.splice(cIdx, 0, getDDNode(ddNodes));
                                action = 'ADD_TO_DL';
                                return EXIT;
                            }
                        });
                        return [SKIP, cIdx];
                    case 'SEEK_CONSECUTIVE_DD_START':
                        if (cNode.type === 'text') {
                            const ddMatch = cNode.value.match(DD_CONSECUTIVE_REGEX);
                            if (ddMatch) {
                                const dd = cNode.value.slice(ddMatch.index);
                                cParent.children.splice(cIdx, 1, {
                                    type: 'text',
                                    value: dd.trimStart().slice(1).trimStart() // remove leading colon
                                });
                                action = 'COLLECT_DD_BODY';
                                return [SKIP, cIdx];
                            }
                        }
                        action = 'SEEK_DD_START';
                        return [SKIP, cIdx];
                }
                return SKIP;
            });
        });
    };
};

export default plugin;
