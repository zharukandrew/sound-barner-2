

// При наведении на паразраф мы выделяем его жирным и меняем цвет
// Напишите программу на JavaScript, чтобы получить ширину и высоту окна (каждый раз, когда размер окна изменяется)
// Загадай число 
// Загадки *
let text = document.querySelector(".text");
let button = document.querySelector(".button");
let quesNumber = document.querySelector(".ques-number");
let text2 = document.querySelector(".text2");
let buttonNumber = document.querySelector(".button-number");
let button2 = document.querySelector(".button2");

text.addEventListener("click",()=>{
  text.classList.toggle("red");
})


buttonNumber.addEventListener("click", () => {
  quesNumber.innerHTML = `<p class="ques-number">Отгадай число от 0 до 10</p>`;
  text2.value = "";
  button.disabled = false;
  buttonNumber.disabled = true; // Disable the "Отгадать число" button
});

button.addEventListener("click", () => {
  let num = parseInt(text2.value);
  if (num === Math.ceil(Math.random() * 10)) {
    alert('бинго, вы попали в цель');
    buttonNumber.disabled = false; // Enable the "Отгадать число" button
  } else {
    alert('Ваш ответ не правильный, попробуйте еще раз');
  }
  text2.value = ""; // Clear the input field
});

button2.addEventListener("click", () => {
  const riddles = {
  'Тетрадка':'То я в клетку,то в линейку написать на мне сумейка ,что такое я?', 
  'Елка':'Зимой и летом, одним цветом?', 
  'Снеговик':'Сделан из снега на лице морковка?',
}

  const arrRiddles = Object.values(riddles)
  const answers = Object.keys(riddles)

  const info = {
    correct: 0,
    notСorrect: 0,
    riddlesAll: arrRiddles.length
  }

  for(let i = 0; i < arrRiddles.length; i++) {
    let answer = prompt(arrRiddles[i])

    if (answer.toLowerCase() === answers[i].toLowerCase()) {
       info.correct++
    } else {
       info.notСorrect++
    }
  }

  alert(`Правильных ответов: ${info.correct} 
         Не правильных: ${info.notСorrect}
         Всего загадок: ${info.riddlesAll}`)

})

/*window.addEventListener('resize', ()=>{
  console.log(window.innerWidth, window.innerHeight)
})*/




