let b = document.querySelector('.page')
// Добавляет обработчик события «клик» на элемент buttonElement
let a = document.querySelector('.button')
a.addEventListener("click",()=>{
    // classList обращение к классу элемента
    // add - добавляет указанный класс
    // remove - удаляет указанный класс
    // toggle - добавляет класс если его нет и удаляет если он есть
    b.classList.toggle("red");
    alert('hhh')
})
