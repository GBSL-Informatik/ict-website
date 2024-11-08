import { visit } from 'unist-util-visit';
import type { Plugin, Transformer } from 'unified';
import type { MdxJsxFlowElement } from 'mdast-util-mdx';
import { requireDefaultMdastNode, toJsxAttribute, transformAttributes } from '../helpers';
import { Link, Root, Text } from 'mdast';

enum LeafDirectiveName {
    VIDEO = 'video',
    AUDIO = 'audio',
    YOUTUBE = 'youtube',
    CIRCUITVERSE = 'circuitverse',
    LEARNINGAPPS = 'learningapps'
}
const DirectiveNames = Object.values(LeafDirectiveName) as string[];

const plugin: Plugin<unknown[], Root> = function plugin(): Transformer<Root> {
    return async (ast, vfile) => {
        visit(ast, 'leafDirective', (node, idx, parent) => {
            if (!DirectiveNames.includes(node.name) || !parent) {
                return;
            }
            const { attributes, style } = transformAttributes(node.attributes || {});
            const newNode = {
                type: 'mdxJsxFlowElement',
                name: '',
                attributes: [],
                children: [],
                data: {}
            } as MdxJsxFlowElement;
            const rawChild = node.children[0];
            const src =
                rawChild.type === 'text'
                    ? (rawChild as Text).value
                    : rawChild.type === 'link'
                      ? (rawChild as Link).url
                      : undefined;
            if (!src) {
                throw new Error(`Invalid child for ${node.name} directive in ${vfile.path}`);
            }
            switch (node.name) {
                case LeafDirectiveName.VIDEO:
                    newNode.name = 'video';
                    if (attributes.autoplay || attributes.autoplay === '') {
                        newNode.attributes.push(toJsxAttribute('autoPlay', ''));
                        newNode.attributes.push(toJsxAttribute('playsInline', ''));
                    }
                    if (attributes.muted || attributes.muted === '') {
                        newNode.attributes.push(toJsxAttribute('muted', attributes.muted));
                    }
                    if (attributes.loop || attributes.loop === '') {
                        newNode.attributes.push(toJsxAttribute('loop', attributes.loop));
                    }
                    newNode.attributes.push(toJsxAttribute('style', { maxWidth: '100%', ...style }));
                    newNode.attributes.push(toJsxAttribute('controls', ''));
                    newNode.children.push({
                        type: 'mdxJsxFlowElement',
                        name: 'source',
                        attributes: [requireDefaultMdastNode('src', src)],
                        children: [],
                        data: {}
                    });
                    break;
                case LeafDirectiveName.AUDIO:
                    newNode.name = 'audio';
                    newNode.attributes.push(toJsxAttribute('controls', ''));
                    newNode.children.push({
                        type: 'mdxJsxFlowElement',
                        name: 'source',
                        attributes: [
                            requireDefaultMdastNode('src', src),
                            toJsxAttribute('type', 'audio/mpeg')
                        ],
                        children: [],
                        data: {}
                    });
                    break;
                case LeafDirectiveName.YOUTUBE:
                    const youtubeIframe: MdxJsxFlowElement = {
                        type: 'mdxJsxFlowElement',
                        name: 'iframe',
                        attributes: [
                            toJsxAttribute('width', '100%'),
                            toJsxAttribute('height', style.height || '100%'),
                            toJsxAttribute('src', src),
                            toJsxAttribute('title', 'YouTube video player'),
                            toJsxAttribute('frameBorder', '0'),
                            toJsxAttribute('allowFullScreen', ''),
                            toJsxAttribute(
                                'allow',
                                'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            )
                        ],
                        children: [],
                        data: {}
                    };

                    newNode.name = 'div';
                    newNode.attributes.push(
                        toJsxAttribute('style', {
                            width: style.maxWidth || '100%',
                            aspectRatio: style.height ? undefined : '16 / 9'
                        })
                    );
                    newNode.children.push(youtubeIframe);
                    break;
                case LeafDirectiveName.CIRCUITVERSE:
                    newNode.name = 'iframe';
                    newNode.attributes.push(toJsxAttribute('width', style.width || '100%'));
                    newNode.attributes.push(toJsxAttribute('height', style.height || '315px'));
                    newNode.attributes.push(toJsxAttribute('src', src));
                    newNode.attributes.push(toJsxAttribute('title', 'Circuit Verse'));
                    newNode.attributes.push(toJsxAttribute('frameBorder', '0'));
                    newNode.attributes.push(toJsxAttribute('scrolling', 'no'));
                    newNode.attributes.push(toJsxAttribute('webkitAllowFullScreen', ''));
                    newNode.attributes.push(toJsxAttribute('mozAllowFullScreen', ''));
                    newNode.attributes.push(toJsxAttribute('allowFullScreen', ''));
                    break;
                case LeafDirectiveName.LEARNINGAPPS:
                    const appId = new URL(src).pathname.split('/')[1];
                    const transformedSrc = `https://learningapps.org/watch?app=${appId}`;
                    newNode.name = 'iframe';
                    newNode.attributes.push(toJsxAttribute('width', style.width || '100%'));
                    newNode.attributes.push(toJsxAttribute('height', style.height || '500px'));
                    newNode.attributes.push(toJsxAttribute('src', transformedSrc));
                    newNode.attributes.push(toJsxAttribute('title', 'Learningapps'));
                    newNode.attributes.push(toJsxAttribute('frameBorder', '0'));
                    newNode.attributes.push(toJsxAttribute('scrolling', 'no'));
                    newNode.attributes.push(toJsxAttribute('webkitallowfullscreen', ''));
                    newNode.attributes.push(toJsxAttribute('mozAllowFullScreen', ''));
                    newNode.attributes.push(toJsxAttribute('allowFullScreen', ''));
                    break;
            }

            parent.children.splice(idx || 0, 1, newNode);
        });
    };
};

export default plugin;
