const sharp = require('sharp');
const fs = require('fs');
const visit = require("unist-util-visit");

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
                icon: inner,
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
    return async function transformer(tree, file) {
        const staticDir = `${file.cwd}/static`;
        const previewDir = `${staticDir}/img/previews`;
        if (!fs.existsSync(previewDir)) {
            fs.mkdirSync(previewDir);
        }
        const promises = [];
        // escape everything except flexHTML nodes
        visit(
            tree,
            'mdi',
            function visitor(node) {
                const icon = node.mdi;
                delete node.mdi;
                const preview = `${previewDir}/${icon}.jpg`;
                if (!fs.existsSync(preview)) {
                    fetch(`https://raw.githubusercontent.com/Templarian/MaterialDesign/master/svg/${icon}.svg`)
                        .then((response) => {
                            return response.text()
                        }).then((raw) => {
                             const svg = raw.replace('width="24"', 'width="630"')
                                      .replace('height="24"', 'height="630"')
                                      .slice(raw.indexOf('<svg'))
                                      .replace('<svg', '<svg fill="#058fcd" style="background-color:white"')
                            if (!fs.existsSync(preview)) {
                                promises.push(sharp(Buffer.from(svg))
                                    .resize({
                                        width: 1200,
                                        height: 630,
                                        fit: sharp.fit.contain,
                                        background: { r: 0, g: 0, b: 0, alpha: 1 }
                                    })
                                    .jpeg({ quality: 75 })
                                    .toFile(preview)
                                    .catch((reason) => {
                                        console.warn('Could not transform', icon, reason)
                                    })
                                );
                            }
                        }).catch((err) => {
                            console.warn('Err', err);
                        });
                }
            }
        );
        await Promise.all(promises);
    };
}

module.exports = attacher;