let arr ={
  age:30,
  func: function(ass){
    console.log(ass + ' ' + this.age)
  }
}
let a = {
  age:25,
};
arr.func.apply(a, )