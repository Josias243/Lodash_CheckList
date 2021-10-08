let a = 45;
const _ = require('lodash');

let items = [ 12, [ 334, [ 495 ] ] ];
let lodashContent = _.flattenDeep(items);
console.log(lodashContent);
