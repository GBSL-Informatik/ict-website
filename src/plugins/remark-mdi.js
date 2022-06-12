// passed to unified.use()
// you have to use a named function for access to `this` :(
function attacher(options) {
    function mdi(eat, value, silent) {
        if (!value.startsWith(':mdi-')) {
            return
        }

        const stopPosition = value.indexOf(':', ':mdi-'.length)
        if (stopPosition === -1) {
            return
        }

        if (silent) {
            return true
        }

        const tag = value.slice(0, stopPosition + ':'.length)
        const inner = tag.slice(':mdi-'.length, stopPosition)

        return eat(tag)({ 
            type: 'mdi',
            mdi: inner,
            data: {
                hName: 'span',
                hProperties: { 
                    className: [`mdi-${inner}`, 'mdi'] 
                }
            }
        })
    }

    // add tokenizer to parser after fenced code blocks
    const Parser = this.Parser.prototype;
    Parser.inlineTokenizers.mdi = mdi;
    mdi.locator = (value, from) => value.indexOf(':mdi-', from);
    Parser.inlineMethods.splice(
        Parser.inlineMethods.indexOf('escape'),
        0,
        'mdi'
    );
}

module.exports = attacher;