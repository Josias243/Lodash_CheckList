const { readFile, writeFile } = require('fs');

console.log('start')
let contentDisplay = (firstPath,secondPath,createFile) => {
    return new Promise((resolve, reject) => {
        readFile(firstPath, 'utf-8', (error, data) => {
            if (error) {
                reject(error);
            }
            let result = data
            readFile(secondPath, 'utf-8', (er, data) => {
                if (er) {
                    reject(er);
                }
                let result2 = data;
                let totalResult = result2 + result;
                resolve(totalResult);
                writeFile(createFile,totalResult, 'utf-8', (err) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log('done with this task');
                })
            })
            
        })
    })
}
contentDisplay('./content/file1.t', './content/file.t', './content/newResult.t')
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
    console.log('Start the following tast');
