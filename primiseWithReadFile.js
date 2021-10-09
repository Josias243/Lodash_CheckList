let { readFile, read } = require('fs');
const { reject } = require('lodash');

let content = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            }else {
                resolve(data);
            }
        })
    });
}

content('./content/result.t')
    .then((value) => console.log(value))
    .catch((error) => console.log(error));