/*let a=prompt('введите число');
let b=prompt('введите число');
let c= Number(a)+Number(b);
if(c==19){
    alert('Верно')
}else{
    alert('Неверно')
}*/
let a = document.querySelector(".input");
let b = document.querySelector(".inputs");
let d = document.querySelector('.button');
d.addEventListener("click", () => {
  let c = Number(a.value) + Number(b.value);
  alert(c)
});
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let minus = document.querySelector('.minus');
minus.addEventListener("click", () => {
  let p = Number(one.value) - Number(two.value);
  alert(p)
});
let arr = document.querySelector(".arr");
let brr = document.querySelector(".brr");
let drr = document.querySelector('.drr');
drr.addEventListener("click", () => {
  let crr = Number(arr.value) * Number(brr.value);
  alert(crr);
});
let mar = document.querySelector(".mar");
let mbr = document.querySelector(".mbr");
let mdr = document.querySelector('.mdr');
mdr.addEventListener("click", () => {
  let mcr = Number(mar.value) / Number(mbr.value);
  alert(mcr);
});