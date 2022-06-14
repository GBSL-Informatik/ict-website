const visit = require("unist-util-visit");

/**
 * ^!\[(.*)\]\((\S+?)([^\S\r\n]+.*?)?\)
 * ^                                        start of line
 *  !\[                                     md image starts with ![
 *     (.*)                                 group1: alt
 *         \]\(                             match ](
 *             (\S+?)                       group2: image url
 *                   (                      group3: image title (match as few as possible,
 *                                                  until first closing bracket! 
 *                                                  better not use brackets in title :/)
 *                    [^\S\r\n]+            any white space characters except newlines
 *                              .*?)?       end of group3
 *                                   \)     finish the md image
 * 
 */
const regex = /^!\[(.*)\]\((\S+?)([^\S\r\n]+.*?)?\)/;
// passed to unified.use()
// you have to use a named function for access to `this` :(
function attacher(options) {
    function figure(eat, value, silent) {
        const match = value.match(regex);
        if (!match) {
            return
        }
        const startPosition = match.index;
        const stopPosition = startPosition + match[0].length;
        if (silent) {
            return true
        }

        const tag = value.slice(startPosition, stopPosition)
        const alt = match[1];
        const src = match[2];
        const title = (match[3] || '').trim();
        const children = [
            {
                type: 'image',
                title: title,
                url: src,
                alt: alt,
            }
        ]
        if (alt) {
            children.push(
                {
                    type: 'element',
                    data: {
                        hName: 'figcaption'
                    },
                    children: this.tokenizeInline(alt, { line: 0, column: 0 })
                }
            )
        }
        return eat(tag)({
            type: 'figure',
            children: children,
            data: {
                hName: 'Figure'
            }
        })
    }

    // add tokenizer to parser after fenced code blocks
    const Parser = this.Parser.prototype;
    Parser.inlineTokenizers.figure = figure;
    figure.locator = (value, from) => {
        const m = value.slice(from).match(regex)?.index;
        if (m) {
            return m + from;
        }
        return -1;
    };
    // rule must be inserted before linking!
    Parser.inlineMethods.splice(
        Parser.inlineMethods.indexOf('link'),
        0,
        'figure'
    );
    return function transformer(tree) {
        // escape everything except flexHTML nodes
        visit(
            tree,
            'figure',
            function visitor(node, idx, parent) {
                // unwrap figures inside paragraphs...
                if (parent.type === 'paragraph') {
                    parent.type = 'figure';
                    parent.children = node.children;
                    parent.data = node.data;
                }
                return node;
            }
        );
    };
}

module.exports = attacher;