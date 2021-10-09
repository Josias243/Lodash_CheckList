const { readFile, writeFile } = require('fs');

console.log('start');
readFile('./content/file.t', 'utf-8', (error, data) => {
    if (error) {
        console.log(error);
        return;
    }
    const first = data;
    readFile('./content/file1.t', "utf-8", (error, data) => {
        if (error) {
            console.log(error);
            return;
        }
        const second = data;
        writeFile('./content/result.t', `her buffer result :${second} ${first}`, (error) => {
            if (error) {
                console.log(error);
            }
            console.log('done with this task');
        });
    })
})
console.log('starting nest task');