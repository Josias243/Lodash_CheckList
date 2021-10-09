let { readFile, writeFile } = require('fs');
let util = require('util');

let readFilePromise = util.promisify(readFile);
let writeFilePomise = util.promisify(writeFile);



console.log('start the task');
//wait approach 
const start = async () => {
    try {
            //wait for the promise to be resolve
        let value = await readFilePromise('./content/file1.t','utf-8');
        let value2 = await readFilePromise('./content/file.t', 'latin1');

        //see the result 
        console.log('value 2', value,'value 1:',value2);
    
        
        //new file to write 
       await writeFilePomise('./content/utilPromisify.data', `New value: ( ${value}  ${value2})`);
        
    } catch (error) {
        console.log(error)
    }
}
start();