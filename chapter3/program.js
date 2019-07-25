var fa = require('fs');
var buf = fa.readFileSync('../chapter2/program.js')
var str = buf.toString().split('');
console.log(str);