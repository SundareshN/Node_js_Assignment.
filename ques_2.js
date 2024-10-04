//Synchronous File Operations
const fs = require('fs');

try {
    fs.writeFileSync('example.txt', 'Hello, world!', { encoding: 'utf8' });
    console.log('File written successfully.');
} catch (err) {
    console.error('Error writing file:', err);
}

try {
    const data = fs.readFileSync('example.txt', { encoding: 'utf8' });
    console.log('File contents:', data);
} catch (err) {
    console.error('Error reading file:', err);
}

/*Output:
File written successfully.
File contents: Hello, world!
*/

//Asynchronous File Operations
const fs = require('fs');

fs.writeFile('example_async.txt', 'Hello, async world!', { encoding: 'utf8' }, (err) => {
    if (err) {
        return console.error('Error writing file:', err);
    }
    console.log('File written successfully.');

    fs.readFile('example_async.txt', { encoding: 'utf8' }, (err, data) => {
        if (err) {
            return console.error('Error reading file:', err);
        }
        console.log('File contents:', data);
    });
});

/*Output:
File written successfully.
File contents: Hello, async world!
*/
