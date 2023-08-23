//API:https://reqres.in/

// 1)GET
fetch('https://reqres.in/api/users')
  .then (res => res.json())
  .then(data => console.log(data))
// /api/users
// 2)POST
// 3)PUT
// 4)DELETE