import { visit } from 'unist-util-visit';
import type { Plugin, Transformer } from 'unified';
import type { Root } from 'mdast';
import type { MdxJsxAttribute, MdxJsxFlowElement } from 'mdast-util-mdx';

// TODO: How to type this?
//       TS doesn't enforce that only keys of directiveNames can be used in
//       the classNames
export interface PluginOptions<T extends readonly string[] = readonly string[]> {
    directiveNames?: T;
    tagNames?: {
        details?: string;
        summary?: string;
    };
    classNames?: {
        [key in T[number] | 'details' | 'summary']?: string;
    };
}

const plugin: Plugin<PluginOptions[], Root> = function plugin(optionsInput = {}): Transformer<Root> {
    const TAG_NAMES = { details: 'details', summary: 'summary', ...optionsInput.tagNames };
    const DIRECTIVE_NAMES = new Set(['details', ...(optionsInput.directiveNames || [])]);
    const getClassNameAttribute = (tag: string): MdxJsxAttribute[] => {
        const className = (optionsInput.classNames || {})[tag];
        return className ? [{ type: 'mdxJsxAttribute', name: 'className', value: className }] : [];
    };

    return async (ast, vfile) => {
        visit(ast, 'containerDirective', (node, idx, parent) => {
            if (!parent || !DIRECTIVE_NAMES.has(node.name)) {
                return;
            }
            const label = node.children.filter(
                (child) => (child.data as { directiveLabel: boolean })?.directiveLabel
            );
            const content = node.children.filter(
                (child) => !(child.data as { directiveLabel: boolean })?.directiveLabel
            );
            const children = [...content];
            if (label.length > 0) {
                children.splice(0, 0, {
                    type: 'mdxJsxFlowElement',
                    name: TAG_NAMES.summary,
                    attributes: [...getClassNameAttribute('summary')],
                    children: label
                });
            }
            const details = {
                type: 'mdxJsxFlowElement',
                name: TAG_NAMES.details,
                attributes: [...getClassNameAttribute(node.name)],
                children: children
            } as MdxJsxFlowElement;
            parent.children.splice(idx || 0, 1, details);
        });
    };
};

export default plugin;
