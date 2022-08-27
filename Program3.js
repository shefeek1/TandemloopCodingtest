var read = require('readline-sync')

let x= read.questionInt('Enter the number')

var arr=[];
var y=1;
if(x%2!=0){

    for(let i=1; i<=x; i++){

        arr.push(y)
        y=y+2;
      }
}
else{
    
for(let i=1; i<=x-1; i++){

    arr.push(y)
    y=y+2;
  }
}
console.log(arr)