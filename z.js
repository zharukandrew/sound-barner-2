function func (a){
  return a.filter((num)=>num%2==0)
}
console.log(func([1, 2, 4, 3]))
console.log(func([2, 3, 4]))
console.log(func([1, 2, 3, 4, 5, 6]))