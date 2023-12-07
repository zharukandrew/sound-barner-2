const arr = ["Камень", "Ножницы", "Бумага"];
const playButton = document.querySelector('.game3-button');
const startButton = document.querySelector('.game3-button1');
const computerAnswer = document.querySelector('.game3-page');
const buttons = document.querySelectorAll('.button');
startButton.addEventListener('click', () => {
  computerAnswer.innerHTML = "Компьютер готов к игре!";
});

playButton.addEventListener('click', () => {
  const userChoice = document.querySelector('.button.active').innerHTML;
  const computerChoice = arr[Math.floor(Math.random() * arr.length)];
  console.log(`Вы выбрали: ${userChoice}`);
  console.log(`Компьютер выбрал: ${computerChoice}`);

  if (userChoice === computerChoice) {
    computerAnswer.innerHTML = "Ничья!";
  } else if (
    (userChoice === "Камень" && computerChoice === "Ножницы") ||
    (userChoice === "Ножницы" && computerChoice === "Бумага") ||
    (userChoice === "Бумага" && computerChoice === "Камень")
  ) {
    computerAnswer.innerHTML = "Вы выиграли!";
  } else {
    computerAnswer.innerHTML = "Вы проиграли!";
  }
});


buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

      