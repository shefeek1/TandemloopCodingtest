var read = require('readline-sync')

let x= read.questionInt('Enter the number of array elements')

console.log("Enter the array")
arr=[];
count={}
for(let i=0;i<x;i++){
arr[i]=read.questionInt("")
}
console.log(arr)
for(let k=1;k<=9;k++){
   count[k]=0
}
// console.log(count)

for(let k=0;k<x;k++){
     
     for(let j=1;j<=9;j++)
     {
         if(arr[k]%j===0)
         {
           count[j]+=1;
         }
      
     }

}
console.log(count)