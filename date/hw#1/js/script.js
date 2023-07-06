

function addZero(n) {
   return n < 10 ? "0" + n : n
}

let now = new Date()

let timeOfSeconds = document.querySelector(".timeOfSeconds")

let hours = document.querySelector("#hours")
let minutes = document.querySelector("#minutes")
let seconds = document.querySelector("#seconds")

let btn = document.querySelector('[data-btn]')
let inp = document.querySelector('input')

let gmtTimeInnerHtml = document.querySelector('#gmtTime')
let userTimeZoneTimeInnerHtml = document.querySelector('#userTimeZoneTime')
let relative = document.querySelector('#relative')

let startTime = new Date(0)

timeOfSeconds.innerText = Date.parse(now) / 1000

btn.addEventListener("click", () => {
   let now = new Date()
   startTime.setSeconds(inp.value)
   userTimeZoneTimeInnerHtml.innerText = new Date(+inp.value)
   gmtTimeInnerHtml.innerText = new Date(+inp.value).toUTCString()
   relative.innerText = (new Date().getFullYear() - new Date(+inp.value).getFullYear()) + " years ago"
})

setInterval(() => {
   let now = new Date()
   timeOfSeconds.innerText = Date.parse(now) / 1000
}, 1000);

setInterval(() => {
   let now = new Date()
   if (now.getHours() >= 12) {
      hours.innerText = addZero(now.getHours() - 12)
      minutes.innerText = addZero(now.getMinutes())
      seconds.innerText = addZero(now.getSeconds() + " PM")
      return "Aaa"
   }
   hours.innerText = addZero(now.getHours())
   minutes.innerText = addZero(now.getMinutes())
   seconds.innerText = addZero(now.getSeconds() + " AM")
}, 1000);