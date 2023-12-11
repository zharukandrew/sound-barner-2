//1
// const arr = ["Камень", "Ножницы", "Бумага" ];
// const startButton = document.querySelector('.game3-button1');
// const computerAnswer = document.querySelector('.game3-page');
// const buttons = document.querySelectorAll('.button');
// let resultText = document.querySelector('.page');

// let mapEventov = {
//   'Ножницы': {
//     'Бумага': 0,
//     'Камень': 1,
//     'Ножницы': 2
//   },
//   'Бумага': {
//     'Бумага': 2,
//     'Камень': 1,
//     'ножницы': 0
//   },
//   'Камень': {
//     'Бумага': 0,
//     'Камень': 2,
//     'Ножницы': 1
//   },
// }

// startButton.addEventListener('click', () => {
//   computerAnswer.innerHTML = "Компьютер готов к игре!";
// });

// buttons.forEach((btn) => {
//    btn.addEventListener('click', (e) => {
//     const userChoice = e.target.innerHTML
//     const computerChoice = arr[Math.floor(Math.random() * arr.length)];
//     resultText.innerHTML = `Вы выбрали: ${userChoice} <br>
//                 Компьютер выбрал: ${computerChoice} <br>`;

//     if (mapEventov[userChoice][computerChoice] === 1) {
//       resultText.innerHTML += 'Вы выиграли'
//     } else if (mapEventov[userChoice][computerChoice] === 2) {
//       resultText.innerHTML += 'Ничья'
//     } else if (mapEventov[userChoice][computerChoice] === 0) {
//       resultText.innerHTML += 'Вы проиграли'
//     } else {
//       resultText.innerHTML += 'Что то пошло не так'
//     }
//   });
// })
//1


const arr = ["Камень", "Ножницы", "Бумага"];
const startButton = document.querySelector('.game3-button1');
const computerAnswer = document.querySelector('.game3-page');
const buttons = document.querySelectorAll('.button');
let resultText = document.querySelector('.page');

class Games {
  constructor(mapEventov) {
    this.mapEventov = mapEventov;
  }
  play() {
    console.log(this.mapEventov);
  }
}

let games = new Games({
  'Ножницы': {
    'Бумага': 0,
    'Камень': 1,
    'Ножницы': 2
  },
  'Бумага': {
    'Бумага': 2,
    'Камень': 1,
    'Ножницы': 0
  },
  'Камень': {
    'Бумага': 0,
    'Камень': 2,
    'Ножницы': 1
  }
});

games.play();

startButton.addEventListener('click', () => {
  computerAnswer.innerHTML = "Компьютер готов к игре!";
});

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const userChoice = e.target.innerHTML;
    const computerChoice = arr[Math.floor(Math.random() * arr.length)];
    resultText.innerHTML = `Вы выбрали: ${userChoice} <br>
                Компьютер выбрал: ${computerChoice} <br>`
    if (games.mapEventov[userChoice][computerChoice] === 1) {
      resultText.innerHTML += 'Вы выиграли!';
    } else if (games.mapEventov[userChoice][computerChoice] === 2) {
      resultText.innerHTML += 'Ничья!';
    } else if (games.mapEventov[userChoice][computerChoice] === 0) {
      resultText.innerHTML += 'Вы проиграли!';
    } else {
      resultText.innerHTML += 'Что-то пошло не так!';
    }
  });
});