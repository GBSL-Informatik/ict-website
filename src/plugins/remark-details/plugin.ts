import { visit } from 'unist-util-visit';
import type { Plugin, Processor, Transformer } from 'unified';
import { Content, Parent } from 'mdast';
import { ContainerDirective } from 'mdast-util-directive';
import { MdxJsxFlowElement } from 'mdast-util-mdx';
import clsx from 'clsx';

const plugin: Plugin = function plugin(
    this: Processor,
    optionsInput?: {
        tagNames?: {
            details?: string;
            summary?: string;
        },
        keywords?: string[],
        defaultLabel?: {
            [key: string]: string;
        }
        classNames?: {
            details?: string;
            summary?: string;
            [key: string]: string;
        }
    }
): Transformer {
    const TAG_NAMES = {details: 'details', summary: 'summary', ...optionsInput?.tagNames};
    const keywords = optionsInput?.keywords || ['details'];
    const matcher = new RegExp(`^(${keywords.join('|')})$`);

    const getClassNameAttribute = (tag: 'details' | 'summary', additionalClass?: string) => {
        const className = clsx((optionsInput?.classNames || {})[tag], (optionsInput.classNames || {})[additionalClass]);
        return className ? [{ type: 'mdxJsxAttribute', name: 'className', value: className }] : [];
    }

    return async (ast, vfile) => {
        visit(ast, (node, idx, parent: Parent) => {
            const nodeName = (node as ContainerDirective).name;
            if (node.type !== 'containerDirective' || !matcher.test(nodeName)) {
                return;
            }
            const container = node as unknown as ContainerDirective;
            const label = container.children.filter((child) => (child.data as { directiveLabel: boolean })?.directiveLabel) as Content[]
            const content = container.children.filter((child) => !(child.data as { directiveLabel: boolean })?.directiveLabel) as Content[]
            const children: Content[] = [...content];
            if (label.length > 0) {
                children.splice(0, 0, {
                    type: 'mdxJsxFlowElement',
                    name: TAG_NAMES.summary,
                    attributes: [...getClassNameAttribute('summary')],
                    children: label,
                    data: {
                        '_mdxExplicitJsx': true
                    }
                } as MdxJsxFlowElement);
            } else if ((optionsInput?.defaultLabel || {})[nodeName]) {
                children.splice(0, 0, 
                    {
                        type: 'mdxJsxFlowElement',
                        name: TAG_NAMES.summary,
                        attributes: [...getClassNameAttribute('summary')],
                        children: [{ type: 'text', value:  optionsInput.defaultLabel[nodeName] as string } as Content],
                        data: {
                            '_mdxExplicitJsx': true
                        }
                    } as MdxJsxFlowElement
                );
            }
            const details = {
                type: 'mdxJsxFlowElement',
                name: TAG_NAMES.details,
                attributes: [...getClassNameAttribute('details', nodeName)],
                children: children,
                data: {
                    '_mdxExplicitJsx': true
                }
            } as MdxJsxFlowElement;
            parent.children.splice(idx, 1, details);
        })
    }
}


export default plugin;