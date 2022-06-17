const visit = require("unist-util-visit");

// passed to unified.use()
// you have to use a named function for access to `this` :(
function attacher(options) {
    /**
     * 
     * @param {(tag: string) => (options: {type: string, children: [], data: Object}) => any} eat
     * @param {string} value 
     * @param {boolean} silent 
     * @returns 
     */
    function underline(eat, value, silent) {
        const markerLength = '__'.length;
        if (!value.startsWith('__')) {
            return;
        }
        const stopPosition = value.indexOf('__', markerLength);
        if (stopPosition === -1) {
            return;
        }

        if (silent) {
            return true;
        }

        const tag = value.slice(0, stopPosition + markerLength);
        const inner = tag.slice(markerLength, stopPosition)
        return eat(tag)({
            type: 'strong',
            children: this.tokenizeInline(inner, { line: 0, column: 0 }),
            data: {
                hName: 'strong',
                hProperties: {
                    className: ['underline']
                }
            }
        })
    }

    // add tokenizer to parser after fenced code blocks
    const Parser = this.Parser.prototype;
    Parser.inlineTokenizers.underline = underline;
    underline.locator = (value, from) => value.indexOf('__', from);
    Parser.inlineMethods.splice(Parser.inlineMethods.indexOf('strong'), 0, 'underline');
}

module.exports = attacher;