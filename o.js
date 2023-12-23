class Interface {
  text = document.querySelector(".text");
  button = document.querySelector(".button");
  quesNumber = document.querySelector(".ques-number");
  text2 = document.querySelector(".text2");
  buttonNumber = document.querySelector(".button-number");
  taskText = document.querySelector(".task__text");
  buttonNumber2 = document.querySelector(".button-number2");
  task = document.querySelector(".task");
  taskText2 = document.querySelector(".task-text2");
  answerInput = document.querySelector(".answer-input");
  submitButton = document.querySelector(".submit-button");
  resultText = document.querySelector(".result-text");
  correctAnswersText = document.querySelector(".correct-answers-text");
}
class RandomNumber extends Interface {
  random = null;
  Game() {
    this.buttonNumber.addEventListener("click", () => {
      this.quesNumber.innerHTML =
        "<p class='ques-number'>Отгадай число от 0 до 10</p>";
      this.text2.value = "";
      this.button.disabled = false;
      this.buttonNumber.disabled = true;
      this.random = Math.ceil(Math.random() * 10);
    });

    this.button.addEventListener("click", () => {
      let num = Number(this.text2.value);
      let isCorrect = false;
      while (!isCorrect) {
        if (num === this.random) {
          isCorrect = true;
          alert("бинго, вы попали в цель");
          this.buttonNumber.disabled = false;
        } else {
          alert("Ваш ответ не правильный, попробуйте еще раз");
          num = Number(prompt("Введите число от 0 до 10"));
        }
      }
      this.text2.value = "";
    });
  }
}
class Riddles extends Interface {
  currentRiddleIndex = 0;
  correctAnswers = {};

  Riddle() {
    const riddles = {
      Тетрадка:
        "То я в клетку, то в линейку написать на мне сумейка, что такое я?",
      Елка: "Зимой и летом, одним цветом?",
      Снеговик: "Сделан из снега, на лице морковка?",
    };
    const arrRiddles = Object.entries(riddles);

    let buttonNumber2 = document.createElement("button");
    buttonNumber2.textContent = "Показать загадки";
    buttonNumber2.classList.add("button-number2");
    buttonNumber2.addEventListener("click", () => {
      this.currentRiddleIndex = 0;
      this.taskText2.innerHTML = arrRiddles[this.currentRiddleIndex][1];
      this.correctAnswersText.innerHTML = "";
    });
    this.task.appendChild(buttonNumber2);

    let button2 = document.createElement("button");
    button2.textContent = "Ответ";
    button2.addEventListener("click", () => {
      this.displayNextRiddle();
    });
    this.task.appendChild(button2);
  }

  displayNextRiddle() {
    const arrRiddles = Object.entries({
      Тетрадка:
        "То я в клетку, то в линейку написать на мне сумейка, что такое я?",
      Елка: "Зимой и летом, одним цветом?",
      Снеговик: "Сделан из снега, на лице морковка?",
    });

    if (this.currentRiddleIndex < arrRiddles.length) {
      let answer = this.answerInput.value.toLowerCase().trim();
      let currentAnswer = arrRiddles[this.currentRiddleIndex][0];
      if (answer === currentAnswer.toLowerCase()) {
        this.resultText.innerHTML = "Правильный ответ!";
        this.correctAnswers[currentAnswer] = "Правильно";
      } else {
        this.resultText.innerHTML = "Неправильный ответ!";
        this.correctAnswers[currentAnswer] = "Неправильно";
      }
      this.currentRiddleIndex++;
      this.taskText2.innerHTML = arrRiddles[this.currentRiddleIndex][1];
      this.answerInput.value = "";
    } else {
      this.taskText2.innerHTML = "Вы ответили на все вопросы.";
      this.answerInput.value = "";
      this.resultText.innerHTML = "";
      let correctAnswersString = Object.entries(this.correctAnswers)
        .map(([key, value]) => `${key}: ${value}`)
        .join("<br>");
      this.correctAnswersText.innerHTML = `Результаты:<br>${correctAnswersString}`;
    }
  }
}

let game = new RandomNumber();
let riddle = new Riddles();
game.Game();
riddle.Riddle();
