let timerStartBtn = document.querySelector('#start')
let timerPauseBtn = document.querySelector('#pause')
let timerRestartBtn = document.querySelector('#restart')
let minutesEL = document.querySelector('.minutes')
let secondsEl = document.querySelector('.seconds')
let t = 1500
let timerId


let modalWindow = document.querySelector('.modal')
let wrapper = document.querySelector('.wrapper')
let modalOpenBtn = document.querySelector('[modal-open-btn]')
let dataCloseModalWindow = document.querySelector("[data-close-modal-window]")
let progressBorder = document.querySelector('.timer > div')
let timerName = document.querySelector('.timer__name div')

let settingsSumbitBtn = document.querySelector("#submitSettings")
let fontCheckboxes = document.querySelectorAll('.fonts input')
let colorCheckboxes = document.querySelectorAll('.colors input')
let pomodoroLengthInp = document.querySelector('.time__settings input')
let fonts = ["font-family: 'Kumbh Sans', sans-serif", "font-family: 'Roboto Slab', serif;", "font-family: 'Space Mono', monospace;"]
let colors = ["background-color:#F87070", "background-color:#70F3F8", "background-color:#D881F8"]

if (localStorage.getItem("timer")) {
   t = localStorage.getItem("timer")
   pomodoroLengthInp.value = localStorage.getItem("timer") / 60
   minutesEL.innerText = addZero(Math.floor(t / 60))
   secondsEl.innerText = addZero(t - Math.floor(t / 60) * 60)
   fontCheckboxes[localStorage.getItem("font")].checked = true
   colorCheckboxes[localStorage.getItem("color")].checked = true
   changeElements([document.body], "font", fonts)
   changeElements([progressBorder, timerName], "color", colors)
}


settingsSumbitBtn.addEventListener("click", () => {
   getTrueCheckbox(fontCheckboxes, "font")
   getTrueCheckbox(colorCheckboxes, "color")
   changeElements([progressBorder, timerName], "color", colors)
   changeElements([document.body], "font", fonts)
   changeTimer()
})

modalOpenBtn.addEventListener("click", () => {
   modalWindow.style.display = "flex";
})

dataCloseModalWindow.addEventListener("click", () => {
   modalWindow.style.display = "none"
})

timerStartBtn.addEventListener('click', startTimer)

function changeTimer() {
   t = pomodoroLengthInp.value * 60
   minutesEL.innerText = addZero(Math.floor(t / 60))
   secondsEl.innerText = addZero(t - Math.floor(t / 60) * 60)
   localStorage.setItem("timer" , t)
}

function changeElements(elements, localStorgeKey, styles) {
   if (!localStorage.getItem(localStorgeKey)) return "aaa"
   elements.forEach((e, i) => {
      e.style.cssText = styles[localStorage.getItem(localStorgeKey)]
   })
}

function getTrueCheckbox(nodeList, key) {
   nodeList.forEach((e, i) => {
      if (e.checked) {
         localStorage.setItem(key, i)
         e.checked = true
         return
      }
   });
}

function addZero(n) {
   return n < 10 ? "0" + n : n
}

function startTimer() {
   timerStartBtn.style.display = 'none'
   timerPauseBtn.style.display = 'block'
   timer()
   timerId = setInterval(timer, 1000);
   timerStartBtn.removeEventListener('click', startTimer)
   timerPauseBtn.addEventListener("click", pauseTimer)
}

function pauseTimer() {
   timerStartBtn.style.display = 'block'
   timerPauseBtn.style.display = 'none'
   clearInterval(timerId)
   timerPauseBtn.removeEventListener('click', pauseTimer)
   timerStartBtn.addEventListener('click', startTimer)
}

function restartTimer() {
   timerStartBtn.style.display = 'block'
   timerRestartBtn.style.display = 'none'
   timerRestartBtn.removeEventListener("click", restartTimer)
   timerStartBtn.addEventListener("click", startTimer)
   if (localStorage.getItem("timer")){ 
      t = localStorage.getItem("timer")
      minutesEL.innerText = addZero(Math.floor(t / 60))
      secondsEl.innerText = addZero(t - Math.floor(t / 60) * 60)
      return "aa"
   } 
   minutesEL.innerText = "25"
   secondsEl = "00"
}

function timer() {
   t--
   if (t < 0) {
      timerPauseBtn.style.display = 'none'
      timerRestartBtn.style.display = 'block'
      clearInterval(timerId)
      t = 1500
      timerRestartBtn.addEventListener("click", restartTimer)
      return "aaa"
   }
   minutesEL.innerText = addZero(Math.floor(t / 60))
   secondsEl.innerText = addZero(t - Math.floor(t / 60) * 60)
}