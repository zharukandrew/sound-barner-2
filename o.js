let text = document.querySelector(".text");
let button = document.querySelector(".button");
let quesNumber = document.querySelector(".ques-number");
let text2 = document.querySelector(".text2");
let buttonNumber = document.querySelector(".button-number");
let taskText = document.querySelector(".task__text");
let buttonNumber2 = document.querySelector(".button-number2");
let task = document.querySelector(".task")
let taskText2 = document.querySelector(".task-text2");
let answerInput = document.querySelector(".answer-input");
let submitButton = document.querySelector(".submit-button");
let resultText = document.querySelector(".result-text");
let correctAnswersText = document.querySelector(".correct-answers-text");
text.addEventListener("click", () => {
  text.classList.toggle("red");
});

let random = null;

buttonNumber.addEventListener("click", () => {
  quesNumber.innerHTML = `<p class="ques-number">Отгадай число от 0 до 10</p>`;
  text2.value = "";
  button.disabled = false;
  buttonNumber.disabled = true;
  random = Math.ceil(Math.random() * 10); // Disable the "Отгадать число" button
});

button.addEventListener("click", () => {
  let num = Number(text2.value);
  if (num === random) {
    alert("бинго, вы попали в цель");
    buttonNumber.disabled = false; // Enable the "Отгадать число" button
  } else {
    alert("Ваш ответ не правильный, попробуйте еще раз");
  }
  text2.value = ""; // Clear the input field
});

const riddles = {
  Тетрадка: "То я в клетку, то в линейку написать на мне сумейка, что такое я?",
  Елка: "Зимой и летом, одним цветом?",
  Снеговик: "Сделан из снега, на лице морковка?",
};
const arrRiddles = Object.entries(riddles);
let currentRiddleIndex = 0;
let correctAnswers = {};

let buttonumber2 = document.createElement("button");
buttonumber2.textContent = "Показать загадки";
buttonumber2.classList.add("button-number2");
buttonumber2.addEventListener("click", () => {
  currentRiddleIndex = 0;
  taskText2.innerHTML = arrRiddles[currentRiddleIndex][1];
  correctAnswersText.innerHTML = "";
});
task.appendChild(buttonumber2);

let button2 = document.createElement("button");
button2.textContent = "Ответ";
button2.addEventListener("click", displayNextRiddle);
task.appendChild(button2);

function displayNextRiddle() {
  currentRiddleIndex++;
  if (currentRiddleIndex < arrRiddles.length) {
    let answer = answerInput.value.toLowerCase().trim();
    let currentAnswer = arrRiddles[currentRiddleIndex][0];
    if (answer === currentAnswer.toLowerCase()) {
      resultText.innerHTML = "Правильный ответ!";
      correctAnswers[currentAnswer] = "Правильно";
    } else {
      resultText.innerHTML = "Неправильный ответ!";
      correctAnswers[currentAnswer] = "Неправильно";
    }
    taskText2.innerHTML = arrRiddles[currentRiddleIndex][1];
    answerInput.value = "";
  } else  {
    taskText2.innerHTML = "Вы ответили на все вопросы.";
    answerInput.value = "";
    resultText.innerHTML = "";
    let correctAnswersString = Object.entries(correctAnswers)
      .map(([key, value]) => `${key}: ${value}`)
      .join("<br>");
    correctAnswersText.innerHTML = `Результаты:<br>${correctAnswersString}`;
  }
}

/*window.addEventListener('resize', ()=>{
  console.log(window.innerWidth, window.innerHeight)
})*/
