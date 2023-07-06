let utcHours = document.querySelector("#utcHours")
let utcMinutes = document.querySelector("#utcMinutes")
let utcSeconds = document.querySelector("#utcSeconds")

let hours = document.querySelector("#hours")
let minutes = document.querySelector("#minutes")
let seconds = document.querySelector("#seconds")

let inp = document.querySelector('input')
let userTime = document.querySelector('.user__time')

let btn = document.querySelector("[data-btn]")

let clickCounter = 0

updateTime()

setInterval(updateTime, 1000);

btn.addEventListener('click', () => {
   clickCounter++
   if (clickCounter > 1) {
      clearInterval(a)
   }
   userTime.style.display = "flex"

   updateUserTime()
   let a = setInterval(updateUserTime, 1000);
})

function updateUserTime() {
   res = new Date()
   if (inp.value[0] === "+") {
      res.setHours(res.getUTCHours() + +(inp.value.slice(1)))
   } else {
      res.setHours(res.getUTCHours() - inp.value.slice(1))
   }

   hours.innerText = addZero(res.getHours())
   minutes.innerText = addZero(res.getMinutes())
   seconds.innerText = addZero(res.getSeconds())
   console.log(5);
}

function addZero(n) {
   return n < 10 ? "0" + n : n
}

function updateTime() {
   let now = new Date()
   utcHours.innerText = addZero(now.getUTCHours())
   utcMinutes.innerText = addZero(now.getUTCMinutes())
   utcSeconds.innerText = addZero(now.getUTCSeconds())
}