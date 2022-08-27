var read = require('readline-sync')

let x= read.questionInt('Enter the number')
var arr=[];
var y=1;
for(let i=1; i<=x; i++){

  arr.push(y)
  y=y+2;
}
console.log(arr)