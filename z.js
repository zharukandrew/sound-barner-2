//Уровень 2.4 задачника 

/* 1 задача
Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
1 способ
let arr =("1,2,'a','b',3");
let res = arr.indexOf(1);
console.log(res);
2 способ 
let arr =("1,2,'a','b',3");
let res = arr.indexOf(1);
let fun = (res)=>res;
console.log(fun(res));
*/


/*2 задача
Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
let book = [

    {name:`foreword`, pageCount: 14},
    {name:`boyWhoLived`, pageCount: 18},
    {name:`vanishingGlass`, pageCount: 13},
    {name:`lettersFromNoOne`, pageCount: 17},
    {name:`afterword`, pageCount: 19}
   
   ];
   console.log(book[0][`pageCount`]);
*/
/*№3

3Дано число. Выведите в консоль количество четных цифр в этом числе.
function fun(){
    for (let i = 2; i <= 10; i++) {
        if (i % 2 == 0) {
          alert( i );
        }
      }
}
fun()
 */
/* №4

Дана некоторая строка:

'abcde'
Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:

'AbCdE'
function toWeirdCase(s){
  var str = s.toLowerCase().split(''); // Переводим строку в нижний регистр, и разбиваем на массив. 
  var j = 0;
  for(var i = 0; i < str.length; i++){ // проходимся циклом по этим массивам
      if(str[i] == ' '){
          j = 0;
          continue;
      }
      else{
          if (j % 2 == 0){
              str[i] = str[i].toUpperCase(); // переводим элемент с четным индексом в верхний регистр
          }
          j++;
      }
  }
  return str.join('');
}

console.log(toWeirdCase('abcde'));
2 способ сокращенный код
let toWeirdCase = (s) => {
  let str = s.toLowerCase().split('');
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ' ') {
      j = 0;
      continue;
    } else {
      if (j % 2 == 0) {
        str[i] = str[i].toUpperCase();
      }
      j++;
    }
  }
  return str.join('');
}

console.log(toWeirdCase('abcde'));

*/
/*let toWeirdCase = (s) => {
  let str = s.toLowerCase().split('');
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      str[i] = j % 2 === 0 ? str[i].toUpperCase() : str[i];
      j++;
    } else {
      j = 0;
    }
  }
  return str.join('');
}

console.log(toWeirdCase('abcde'));*/
/*№5

Дана некоторая строка со словами:

'aaa bbb ccc'
Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:

'Aaa Bbb Ccc'
let str = 'aaa bbb ccc';  
 
function capitalize(str) {

 return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})

}
console.log(capitalize(str))
*/
/*function toWeirdCase(s){
  var str = s.toLowerCase().split(''); // Переводим строку в нижний регистр, и разбиваем на массив. 
  var j = 0;
  for(var i = 0; i < str.length; i++){ // проходимся циклом по этим массивам
      if(str[i] == ' '){
          j = 0;
          continue;
      }
      else{
          if (j % 2 == 0){
              str[i] = str[i].toUpperCase(); // переводим элемент с четным индексом в верхний регистр
          }
          j++;
      }
  }
  return str.join('');
}

console.log(toWeirdCase('abcde'));*/
/*let toWeirdCase= (s)=>{
  var str = s.toLowerCase().split(''); // Переводим строку в нижний регистр, и разбиваем на массив. 
  var j = 0;
  for(var i = 0; i < str.length; i++){ // проходимся циклом по этим массивам
      if(str[i] == ' '){
          j = 0;
          continue;
      }
      else{
          if (j % 2 == 0){
              str[i] = str[i].toUpperCase(); // переводим элемент с четным индексом в верхний регистр
          }
          j++;
      }
  }
  return str.join('');
}

console.log(toWeirdCase('abcde'));*/
/*age > 18 ? location.assign('continue.html') : stop = true; */

