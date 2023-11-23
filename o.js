
       let b = document.querySelector(".buttons");
       b.addEventListener("click", () => {
         let date = new Date();
         let hours = date.getHours();
         let minutes = date.getMinutes();
         let seconds = date.getSeconds();
         if (hours < 10) hours = "0" + hours;
         if (minutes < 10) minutes = "0" + minutes;
         if (seconds < 10) seconds = "0" + seconds;
         let a = document.querySelector(".clock");
         a.innerHTML = hours + ":" + minutes + ":" + seconds;
         setInterval(() => {
           date = new Date();
           hours = date.getHours();
           minutes = date.getMinutes();
           seconds = date.getSeconds();
           if (hours < 10) hours = "0" + hours;
           if (minutes < 10) minutes = "0" + minutes;
           if (seconds < 10) seconds = "0" + seconds;
           a.innerHTML = hours + ":" + minutes + ":" + seconds;
         }, 1000);
       });
       
       let red = document.querySelector(".red");
       let blue = document.querySelector(".blue");
       let green = document.querySelector(".green");
       red.addEventListener("click", () => {
         let a = document.querySelector(".clock");
         a.classList.toggle("red");
       });
       blue.addEventListener("click", () => {
        let a = document.querySelector(".clock");
        a.classList.toggle("blue");
      });
      green.addEventListener("click", () => {
        let a = document.querySelector(".clock");
        a.classList.toggle("green");
      });