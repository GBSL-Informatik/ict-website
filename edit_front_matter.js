const fs = require('fs');
const path = require('path');
const { exit } = require('process');
const ROOT = './docs';
var argv = require('minimist')(process.argv.slice(2));
const matter = require('gray-matter');

console.log(argv);

let files = [];

const getFilesRecursively = (directory) => {
    const filesInDirectory = fs.readdirSync(directory);
    for (const file of filesInDirectory) {
        const absolute = path.join(directory, file);
        if (fs.statSync(absolute).isDirectory()) {
            getFilesRecursively(absolute);
        } else if (/\.mdx?/.test(file)) {
            files.push(absolute);
        }
    }
};

getFilesRecursively(ROOT);

files.forEach((file, idx) => {
    const fm = matter.read(file);
    // if (idx !== 0) {
    //     return;
    // }
    fm.data.sidebar_custom_props = {
        ...(fm.data.sidebar_custom_props || {}),
        path: `/${file}`
    };
    console.log(file);
    fs.writeFileSync(file, matter.stringify(fm.content, fm.data), { encoding: 'utf8' });
});
