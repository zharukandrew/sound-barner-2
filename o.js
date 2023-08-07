 //1-5,12,13
const nameInputElement = document.getElementById("text");

buttonElement = document.getElementById("jsstyle");
buttonElement.addEventListener("click",()=>{
nameInputElement.classList.toggle("error");

})

//6
function changeContent()
{
rn = window.prompt("Input the Row number(0,1,2)", "0");
cn = window.prompt("Input the Column number(0,1)","0");
content = window.prompt("Input the Cell content");  
var x=document.getElementById('myTable').rows[parseInt(rn,10)].cells;
x[parseInt(cn,10)].innerHTML=content;
}
//7
function createTable()
{
rn = window.prompt("Input number of rows", 1);
cn = window.prompt("Input number of columns",1);
  
 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(cn,10);c++)  
    {
     var y=  x.insertCell(c);
     y.innerHTML="Row-"+r+" Column-"+c; 
    }
   }
}
//8

// let x = document.querySelector("#colorSelect");
// for (let i = 0; i < x.options.length; i++ ) {
//    console.log(x.options[i].text)
// }
// console.log(x.value)

let radius = document.querySelector(".radius")
let result = document.querySelector(".result")
document.querySelector(".calculate").addEventListener("click",()=>{
    // V = (4/3)πr³.
    // V - объем
    // r - радиус
 result.value = Math.ceil((4 / 3) * (3.14 * Number(radius.value) ** 3))
})

let two=document.querySelector('.img')
let one=document.querySelector('.one').addEventListener("click",()=>{
   two.classList.toggle('yang')
})
