const visit = require("unist-util-visit");


const SVG_GBSL = Buffer.from(`<svg width="400" height="100">
            <style>
                .title { fill: white; font-size: 56px; font-family: 'Segoe UI' }
            </style>
            <text x="0" y="60%" text-anchor="left" class="title">ICT GBSL</text>
        </svg>`);

const SVG_HEAD = Buffer.from(`<svg width="1200" height="100">
            <style>
                .title { fill: white; font-size: 56px; font-family: 'Segoe UI' }
            </style>
            <text x="600" y="60%" text-anchor="middle" class="title">Anleitungen, Tipps &#38; Tricks</text>
        </svg>`);

// passed to unified.use()
// you have to use a named function for access to `this` :(
function plugin(createPreviewImage = false) {
    let sharp, fs = undefined;
    if (createPreviewImage) {
        sharp = require('sharp');
        fs = require('fs');
    }

    async function createOGImage(previewDir, icon, overlayLogo, color = '#058fcd') {
        const previewImg = `${previewDir}/${icon}.jpg`;
        if (!fs.existsSync(previewImg)) {
            return fetch(`https://raw.githubusercontent.com/Templarian/MaterialDesign/master/svg/${icon}.svg`)
                .then((response) => {
                    return response.text()
                }).then((raw) => {
                    // resize
                    const svg = raw.replace('width="24"', 'width="630"')
                        .replace('height="24"', 'height="630"')
                        .slice(raw.indexOf('<svg'))
                        .replace('<svg', `<svg fill="${color}"`)
                    if (!fs.existsSync(previewImg)) {
                        return sharp(Buffer.from(svg))
                            .resize({
                                width: 1200,
                                height: 630,
                                fit: sharp.fit.contain,
                                background: { r: 0, g: 0, b: 0, alpha: 1 }
                            })
                            .composite([
                                { input: overlayLogo, left: 40, top: 320 },
                                { input: SVG_HEAD, left: 0, top: 0 },
                                { input: SVG_GBSL, left: 20, top: 550 }
                            ])
                            .jpeg({ quality: 75 })
                            .toFile(previewImg)
                            .catch((reason) => {
                                console.warn('Could not transform', icon, reason)
                            })
                    }
                }).catch((err) => {
                    console.warn('Err', err);
                });
        }
    }

    return function attacher(options) {
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
            if (createPreviewImage && !fs.existsSync(previewDir)) {
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
                    if (createPreviewImage) {
                        promises.push(createOGImage(previewDir, icon, `${staticDir}/img/logo_badge.svg`))
                    }
                }
            );
            await Promise.all(promises);
        };
    }
}

module.exports = plugin;