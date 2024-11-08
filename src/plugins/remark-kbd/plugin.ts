import { visit, CONTINUE, SKIP } from 'unist-util-visit';
import type { Plugin, Transformer } from 'unified';
import type { MdxJsxTextElement } from 'mdast-util-mdx';
import { Root, Text } from 'mdast';
import { toJsxAttribute } from '../helpers';

type ActionStates = 'SPLIT_BRACKETS' | 'CREATE_KBD';

interface OptionsInput {
    className?: string;
}

const plugin: Plugin<OptionsInput[], Root> = function plugin(optionsInput = {}): Transformer<Root> {
    const KBD_ATTRIBUTES = optionsInput.className
        ? [toJsxAttribute('className', optionsInput.className)]
        : [];
    let actionState: ActionStates = 'SPLIT_BRACKETS';

    return async (ast, vfile) => {
        visit(ast, 'text', (node, idx, parent) => {
            if (!parent || idx === undefined) {
                return;
            }
            /**
             * visit text nodes and nest all nodes between a kbd sequence [[<content>]] in a kbd mdxJsxTextElement.
             */
            switch (actionState) {
                case 'SPLIT_BRACKETS':
                    const bracketIdx = [node.value.indexOf('[['), node.value.indexOf(']]')].filter(
                        (idx) => idx > -1
                    );
                    if (bracketIdx.length === 0) {
                        return CONTINUE;
                    }
                    parent.data = { ...parent.data, hasKBD: true } as any;
                    const splitIdx = Math.min(...bracketIdx);
                    const pre = node.value.slice(0, splitIdx);
                    const bracket = node.value.slice(splitIdx, splitIdx + 2);
                    const post = node.value.slice(splitIdx + 2);

                    const splitted = [
                        {
                            type: 'text',
                            value: bracket
                        }
                    ] as Text[];
                    let nextIdx = idx + 1;

                    if (pre) {
                        splitted.unshift({
                            type: 'text',
                            value: pre
                        });
                        nextIdx++;
                    }
                    if (post) {
                        splitted.push({
                            type: 'text',
                            value: post
                        });
                    }
                    parent.children.splice(idx, 1, ...splitted);
                    if (
                        bracket === ']]' &&
                        parent.children.slice(0, idx).some((node) => (node as Text).value === '[[')
                    ) {
                        actionState = 'CREATE_KBD';
                        return [SKIP, pre ? idx + 1 : idx];
                    }
                    return [CONTINUE, nextIdx];
                case 'CREATE_KBD':
                    if (node.value !== ']]') {
                        throw new Error('Expected closing brackets');
                    }
                    /** TODO: TS5 introduced "findLastIndex", but it is currently only supported with target: ESNext */
                    const reversedIdx = parent.children.length - idx;
                    const openingIdxReversed = [...parent.children]
                        .reverse()
                        .findIndex((node, ind) => ind > reversedIdx && (node as Text).value === '[[');
                    if (openingIdxReversed === -1) {
                        throw new Error('Expected opening brackets');
                    }
                    const openingIdx = parent.children.length - openingIdxReversed - 1;
                    parent.children.splice(openingIdx, idx - openingIdx + 1, {
                        type: 'mdxJsxTextElement',
                        name: 'kbd',
                        attributes: [...KBD_ATTRIBUTES],
                        children: parent.children.slice(openingIdx + 1, idx)
                    } as MdxJsxTextElement);
                    actionState = 'SPLIT_BRACKETS';
                    return [CONTINUE, openingIdx];
            }
        });
    };
};

export default plugin;
