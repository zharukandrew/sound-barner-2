// JSON.stringify({name: 'a', age: 29}) Делает строку из объекта
// JSON.parse() Делает объект из строки

fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5')
     .then((res) => res.json())
     .then((date) => viePhoto(date))

function viePhoto (arr) {
    console.log(arr)
    arr.forEach(element => {
        let img = document.createElement('img')
            img.src = element.url
            img.classList.add('img')
        let p = document.createElement('p')
            p.textContent = element.title
        document.body.append(img)
        document.body.append(p)
    });
}

