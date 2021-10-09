let { readFile, writeFile } = require('fs');
console.log('start')
let getContent = (pathstring) => {
    return new Promise((resolve, reject) => {
        readFile(pathstring,'utf8', (err, data) => {
            if (err) {
               reject(err)
           } else {
                resolve(data);
           }
       })
    })
}
console.log('start the task');
//wait approach 
const start = async () => {
    //wait for the promise to be resolve
    let value = await getContent('./content/file1.t');
    console.log('File 1: ', value);
    let value2 = await getContent('./content/file.t');
    
    console.log('file 2: ', value2);

}
start();


// getContent('./content/file1.t').then((data)=>console.log(data));