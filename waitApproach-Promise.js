let { readFile } = require('fs');
console.log('start')
let getContent = (pathstring) => {
    return new Promise((resolve, reject) => {
        readFile(pathstring,'utf-8', (err, data) => {
            err ? console.log(err) : resolve(data);
        })
    })
}
console.log('start the task');
//wait approach 
const start = async () => {
    //wait for the promise to be resolve
    let value = await getContent('./content/file1.t');
    console.log(value);
}
start()


// getContent('./content/file1.t').then((data)=>console.log(data));