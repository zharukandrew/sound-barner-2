function calculate(num1, num2, callback) {
  let result = num1 + num2;
  callback(result);
}
function func(result) {
  setTimeout(() => {
    console.log("Я красавиц" + " " + result);
  }, 1000);
  //console.log('Я красавиц' +' '+ result)
  //setInterval (()=>{console.log('Я красавиц' +' '+ result)},1000)
}
calculate(1, 10, func);

function loadScript(src, callback) {
  let script = document.createElement("script"); // <script></script>
  script.src = src; // <script src ='z1.js'></script>
  script.onload = () => callback();
  document.body.append(script);
}

loadScript("z1.js", () => {
  hello();
  loadScript("newSrc", () => {
    hello2();
  });
}

);
