let card = document.querySelector('.cards-img')
let z = document.querySelector('.conteiner')
console.log(z)
console.log(card.innerHTML)

card.innerHTML = `Привет как дела`


for (let i = 0; i < 10; i++) {
    card.innerHTML += `
    <div class="cards-img__card">
        <div class="cards-img__card-top">
            <img src="https://w.forfun.com/fetch/b5/b59cb84829d07b33035b671f69184a61.jpeg" alt="oops">
        </div>
        <div class="cards-img__card-bottom">
            <p>lorem</p>
        </div>
    </div> 
    `
}
/*let cards = document.querySelector('.header-content__btn')
// Выводит в консоль HTML-содержимое элемента списка
console.log(cards.innerHTML)
// Заменяет содержимое элемента списка на новое, браузер перерисует этот блок
cards.innerHTML = `<p> Меня добавили через JavaScript </p>`*/
let arr =document.querySelector('.footer__title')
console.log(arr.innerHTML)
arr.innerHTML =`<h3 class="footer__title">раз</h3>`