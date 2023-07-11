let dl = "2023-09-07T11:10:12Z"

let daysEL = document.querySelector('.days'),
   hoursEL = document.querySelector('.hours'),
   minutesEL = document.querySelector('.minutes'),
   secondsEL = document.querySelector('.seconds')

let timerId = setInterval(updateTimer, 1000);

updateTimer()

function getTimerInfo(time) {
   let t = Date.parse(new Date(time)) - Date.parse(new Date()),
      days = Math.floor(t / 1000 / 60 / 60 / 24),
      hours = Math.floor((t / 1000 / 60 / 60) % 24),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60)
   return { t, days, hours, minutes, seconds }
}

function updateTimer() {
   let timerInfo = getTimerInfo(dl)
   if (timerInfo.t <= 0) {
      daysEL.innerText = "00"
      hoursEL.innerText = "00"
      minutesEL.innerText = "00"
      secondsEL.innerText = "00"
      clearInterval(timerId)
      return "asd"
   }
   daysEL.innerText = addZero(timerInfo.days)
   hoursEL.innerText = addZero(timerInfo.hours)
   minutesEL.innerText = addZero(timerInfo.minutes)
   secondsEL.innerText = addZero(timerInfo.seconds)
}

function addZero(n) {
   return n < 10 ? "0" + n : n
}