let a = document.createElement("h1")
a.classList.add("title")

a.textContent ="Новый товар"
document.body.appendChild(a)

let arr = [0,1,2,3,4,5,6,7,8,9,10]

a.addEventListener("click", ()=>{
    a.classList.toggle("red")
    a.classList.remove("title")
    for(let i = 0; i < arr.length; i++){
       document.body.innerHTML += `<ul>
         <li>${arr[i]}</li>
       </ul>`
    }
})



let box = document.querySelector(".box")
console.log(box.innerHTML)

setInterval(()=> {
 box.innerHTML =  new Date().getSeconds()
}, 1000);

// Реализовать часы на странице 
// По клику получить актуальную дату 
// Пеменять текуший цвет дива (выбрать из существующих) input type='color' 
