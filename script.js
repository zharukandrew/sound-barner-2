let arrImg = [ 
    { id: 0, 
      src: "https://w.forfun.com/fetch/b5/b59cb84829d07b33035b671f69184a61.jpeg",
      title: 'Природа 1',
    },
    { id: 1, 
      src: "https://w.forfun.com/fetch/ec/ec036f0f1cddedb4d0a7b1176c747982.jpeg",
      title: 'Природа 2',
    },
    { id: 2, 
      src: "https://w-dog.ru/wallpapers/9/1/298499341842887/osen-vodopady-kanchanaburi-provinciya-priroda-foto.jpg",
      title: 'Природа 3',
    },
    { id: 3, 
      src: "https://w.forfun.com/fetch/b5/b59cb84829d07b33035b671f69184a61.jpeg",
      title: 'Природа 1',
    },
    { id: 4, 
      src: "https://w.forfun.com/fetch/ec/ec036f0f1cddedb4d0a7b1176c747982.jpeg",
      title: 'Природа 2',
    },
    { 
      id: 5, 
      src: "https://w-dog.ru/wallpapers/9/1/298499341842887/osen-vodopady-kanchanaburi-provinciya-priroda-foto.jpg",
      title: 'Природа 3',
    } 
]

let cardsBox = document.querySelector('.cards-img')

function renderCart () {
    for (let i = 0; i < arrImg.length; i++){
        cardsBox.innerHTML +=         `
        <div class="cards-img__card">
            <span class="remove" id=${arrImg[i].id}>X</span>
            <div class="cards-img__card-top">
                <img src=${arrImg[i].src} alt="oops">
            </div>
            <div class="cards-img__card-bottom">
                <p>${arrImg[i].title}</p>
            </div>
        </div> 
        `
    }
    let card = document.querySelectorAll('.remove')

    for (let i = 0; i < card.length; i++) {
        card[i].addEventListener('click', removeCard)
    }
}

renderCart()

let btnAdd = document.querySelector('.header-content__btn')
    btnAdd.addEventListener('click', addNewImg)


function addNewImg () {
   let newSrc = document.querySelector('.input-src').value
   let newTitle = document.querySelector('.input-text').value

    if (newSrc !== '' && newTitle !== ''){
        let newImg = {
            id: 4,
            src: newSrc,
            title: newTitle
        }
        cardsBox.innerHTML = ''
        arrImg.push(newImg)
        renderCart()
        document.querySelector('.input-src').value = ''
        document.querySelector('.input-text').value = ''
    } else {
        alert('Заполните поля!')
    }
}



function removeCard (e){
   arrImg = arrImg.filter((el) => el.id !== Number(e.target.id))
   cardsBox.innerHTML = ''
   renderCart()
}


    
/*let cards = document.querySelector('.header-content__btn')
1  let newSrc = document.querySelector('.input-src').value
2  let newTitle = document.querySelector('.input-text').value
// Выводит в консоль HTML-содержимое элемента списка
console.log(cards.innerHTML)
// Заменяет содержимое элемента списка на новое, браузер перерисует этот блок
cards.innerHTML = `<p> Меня добавили через JavaScript </p>`*/
  


let arr = document.querySelector('.footer__title')
console.log(arr.innerHTML)
arr.innerHTML =`<h3 class="footer__title">раз</h3>`
const listElement = document.getElementById("list"); 
// Выводит в консоль HTML-содержимое элемента списка 
console.log(listElement.innerHTML) 
// Заменяет содержимое элемента списка на новое, браузер перерисует этот блок 
listElement.innerHTML = '<p> Меня добfавили через JavaScript </p>'



let arrList = [1,2,3,4,5]
// function logArray(){
//     for(let i = 0; i < arrList.length; i++){
//         console.log(arrList[i])
//     }
// }

arrList = arrList.filter((el) => el !== 3)

console.log(arrList)

// logArray();
// arrList.push(6);
// logArray();


