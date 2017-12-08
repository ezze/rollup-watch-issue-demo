import path from 'path';
import fs from 'fs';

async function makeChanges() {
    await delay();
    await makeChangesInSourcesFiles({
        'a.js': 'export default \'aaa\';\n'
    });
    await delay();
    await makeChangesInSourcesFiles({
        'nested/b.js': 'export default \'bbb\';\n',
        'nested/c.js': 'export default \'ccc\';\n'
    });
    await delay();
    await makeChangesInSourcesFiles({
        'a.js': 'export default \'aa\';\n',
        'nested/b.js': 'export default \'bb\';\n',
        'nested/c.js': 'export default \'cc\';\n'
    });
    await delay(1500);
    await makeChangesInSourcesFiles({
        'a.js': 'export default \'a\';\n'
    });
    await delay(1500);
    await makeChangesInSourcesFiles({
        'nested/b.js': 'export default \'b\';\n',
        'nested/c.js': 'export default \'c\';\n'
    });
}

function makeChangesInSourcesFiles(changes) {
    const promises = [];
    const entries = Object.entries(changes);
    entries.forEach(entry => {
        const name = entry[0];
        const contents = entry[1];
        const filePath = path.resolve(__dirname, 'src', name);
        console.log(`Changing source file "${name}"...`);
        promises.push(writeFile(filePath, contents).then(() => console.log(`Source file "${name}" is changed.`)));
    });
    return Promise.all(promises);
}

function writeFile(filePath, contents) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, contents, err => {
            if (err) {
                console.error(err);
                reject();
            }
            else {
                resolve();
            }
        });
    });
}

function delay(timeout) {
    timeout = timeout || 3000;
    return new Promise(resolve => setTimeout(() => resolve(), timeout));
}

if (!module.parent) {
    makeChanges().then(() => console.log('Making changes is done.'));
}

export default makeChanges;
