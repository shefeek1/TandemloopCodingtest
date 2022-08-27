
function btnclick(val)
{
    console.log(val);
  result.value+=val
  console.log(result.value)
}
function  cleardisplay()
{

    result.value=""
}
function equalclick()
 {
     result.value=eval(result.value)
 }
 function deldisplay()
 {
    var res=result.value
   
     var c=res.slice(0,length-1)
   
     result.value=c;
     console.log(c);
  }