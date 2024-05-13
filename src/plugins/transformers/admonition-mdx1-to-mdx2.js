const fs = require('fs');
const path = require('path');

const fileDirectories = ['docs'];


const camelCased = (dashed) => {
    return dashed.replace(/-([a-zA-Z])/g, (g) => g[1].toUpperCase()).replace(/-/g, '');
}

/**
 * @example
 * :::note This is a note --> :::note[This is a note]
 */
const REGEX = /(?<opening>:::+)(?<tag>[a-z]+) (?<title>.*)\n/;

const getFilesRecursively = (directory) => {
    const files = []
    const filesInDirectory = fs.readdirSync(directory);
    for (const f of filesInDirectory) {
        const absolute = path.join(directory, f);
        if (fs.statSync(absolute).isDirectory()) {
            files.push(...getFilesRecursively(absolute));
        } else if (/\.mdx?/.test(f)) {
            files.push(absolute);
        }
    }
    return files;
};

const files = fileDirectories.reduce((acc, dir) => {
    return [...acc, ...getFilesRecursively(`./${dir}`)];
}, []);

/**
 * 
 * @param {string} file 
 */
async function transformAdmonitions(file) {
    if (!(file.endsWith('.md') || file.endsWith('.mdx'))) {
        return;
    }
    try {
        /** @type string */
        let raw = await fs.promises.readFile(file, {encoding: 'utf8'});
        let match;
        let hasChanged = false;
        while (match = raw.match(REGEX)) {
            hasChanged = true;
            const {opening, tag, title} = match.groups;
            const admonitionTitle = `${opening}${tag}[${title}]\n`;
            raw = `${raw.slice(0, match.index)}${admonitionTitle}${raw.slice(match.index + match[0].length)}`;
        }
        if (hasChanged) {
            console.log(`Writing ${file}`)
            await fs.promises.writeFile(file, raw, {encoding: 'utf8'});
        }
    } catch (err) {
        console.error(err);
        return;
    }
}

const main = async () => {
    for (const file of files) {
        await transformAdmonitions(file);
    }
};

main().then(() => console.log('Done!'));