import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

/**
 * 
 * @param {string} file 
 */
export const ensureFrontMatter = (file) => {
    if (!(file.endsWith('.md') || file.endsWith('.mdx')) || path.basename(file).startsWith('_')) {
        return;
    }
    const fm = matter.read(file);
    if (Object.keys(fm.data).length === 0) {
        fm.data.description = 'Kurzbeschreibung für Suchmaschinen';
        fm.data.sidebar_label = 'Seitenname';
        fm.data.sidebar_position = 10;
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
