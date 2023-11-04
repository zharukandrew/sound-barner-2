Array.prototype.forEach2 = function (call) {
    for(let i = 0; i < this.length; i++){
      call(this[i], i, this)
    }
}

let arr = ['Привет']

arr.forEach2((el, ind, arr)=>{console.log(el)})



let user2 = {
  name: 'Dima',
  age: 25,
  print () {
    console.log(this.name)
  }
}

let user = {
  name: 'Koly',
  __proto__: user2
}
