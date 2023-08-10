function Person(first,last) {
    return {
        first,
        last
    }
   }
   // Что указывается далее: A, Б или В?
   const friend1 = new Person("Laurence", "Svekis");
   console.log( `привет`,friend1.first);
   console.log(friend1.last);
  /* function Human(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}
const chris = Human('Chris', 'Coyier')

console.log(chris.firstName) // Chris
console.log(chris.lastName) // Coyier
*/