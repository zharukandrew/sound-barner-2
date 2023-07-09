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
