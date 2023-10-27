



/*let organisation = {
  salary: [1000, 300, 5000, 12677],
};

function sumSalary(a) {
  this[a]
}


sumSalary.call() 
посчитать сумму всех зарплат с помощью sumSalary, при этом sumSalary раб с контекстом (аргумент)

*/
/*Задачи на методы массива */
/*let organisation = {
  salary: [1000, 300, 5000, 12677],
};

function sumSalary(a) {
  return this[a].reduce(function(acc, curr) {
    return acc + curr;
  }, 0);
}

 console.log(sumSalary.call(organisation, 'salary'));//18977 
 2 способ
 let organisation = {
  salary: [1000, 300, 5000, 12677],
};

function sumSalary(a) {
  return this[a].reduce((acc , arr) =>
    acc + arr,0);
}


console.log(sumSalary.call(organisation , 'salary')) 
 
 */












