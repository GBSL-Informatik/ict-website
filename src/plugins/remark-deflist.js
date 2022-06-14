const visit = require("unist-util-visit");


// passed to unified.use()
// you have to use a named function for access to `this` :(
function attacher(options) {

    // match to determine if the line is an opening tag
    const regex = /^([^:\s].*\r?\n)?:[ \t]+(.+?)($|\r?\n)/;
 // const regex = /^([^:\s].*\r?\n)?:[ \t]+(.+?)\r?\n/;

    // the tokenizer is called on blocks to determine if there is a definition list
    function blockTokenizer(eat, value, silent) {
        // stop if no match or match does not start at beginning of line
        const match = regex.exec(value);
        if (!match || match.index !== 0) {
            return false;
        }
        // if silent return the match
        if (silent) {
            return true;
        }
        const food = match[0];
        const key = match[1];
        const def = match[2];

        const items = [];
        if (key) {
            items.push({
                type: 'dt',
                data: {
                    hName: 'dt'
                },
                children: this.tokenizeInline(key, { line: 0, column: 0 })
            })
        }
        if (def) {
            items.push({
                type: 'dd',
                data: {
                    hName: 'dd'
                },
                children: this.tokenizeInline(def, { line: 0, column: 0 })
            })
        }

        const element = {
            type: 'deflist',
            data: {
                hName: 'dl'
            },
            children: items
        }


        // const contentString = content.join(NEWLINE).replace(escapeTag, ':::');
        const add = eat(food);

        // parse the content in block mode
        const exit = this.enterBlock();
        exit();
        return add(element);
    }

    // add tokenizer to parser after fenced code blocks
    const Parser = this.Parser.prototype;
    Parser.blockTokenizers.deflist = blockTokenizer;
    Parser.blockMethods.splice(
        Parser.blockMethods.indexOf("fencedCode") + 1,
        0,
        'deflist'
    );
    Parser.interruptParagraph.splice(
        Parser.interruptParagraph.indexOf("fencedCode") + 1,
        0,
        ['deflist']
    );
    Parser.interruptList.splice(
        Parser.interruptList.indexOf("fencedCode") + 1,
        0,
        ['deflist']
    );
    Parser.interruptBlockquote.splice(
        Parser.interruptBlockquote.indexOf("fencedCode") + 1,
        0,
        ['deflist']
    );

    // TODO: add compiler rules for converting back to markdown

    return function transformer(tree) {
        // escape everything except flexHTML nodes
        visit(
            tree,
            'deflist',
            function visitor(node, idx, parent) {
                if (parent.children.length <= idx || node.children.length === 0) {
                    return;
                }
                const children = node.children;
                let unitedSiblings = 1;
                for (let i = idx + 1; i < parent.children.length; i++) {
                    const sibling = parent.children[i];
                    if (sibling.type === 'deflist') {
                        unitedSiblings += 1;
                        children.push(...sibling.children);
                    } else {
                        break;
                    }
                }
                node.children = children;
                parent.children.splice(idx, unitedSiblings, node)
                return node;
            }
        );
    };
}

module.exports = attacher;