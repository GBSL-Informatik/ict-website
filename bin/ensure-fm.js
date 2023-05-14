const fs = require('fs');
const matter = require('gray-matter');
const path = require('path');

/**
 * 
 * @param {string} file 
 */
function ensurePageId(file) {
    if (!(file.endsWith('.md') || !file.endsWith('.mdx')) || path.basename(file).startsWith('_')) {
        return;
    }
    const fm = matter.read(file);
    if (Object.keys(fm.data).length === 0) {
        fm.data.description = 'Kurzbeschreibung für Suchmaschinen';
        fm.data.sidebar_label = 'Seitenname';
        fm.data.sidebar_position = 1;
        fm.data.tags = [];
        fm.data.sidebar_custom_props = {
            icon: 'mdi-file-document-outline'
        }
        fm.data.draft = true;
        fs.writeFileSync(
            file,
            matter.stringify(fm.content, fm.data),
            {encoding: 'utf8'}
        )
        return true;
    }
    return false;
}

module.exports = ensurePageId;