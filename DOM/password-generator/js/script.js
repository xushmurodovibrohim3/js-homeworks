let lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let symbols = ["!", "@", "#"]
let passwordLengthInp = document.querySelector('#passwordLength')
let upperCaseInp = document.querySelector('#upperCase')
let lowerCaseInp = document.querySelector('#lowerCase')
let sybolInp = document.querySelector('#symbol')
let numberInp = document.querySelector('#number')

let characterCountInner = document.querySelector("#characterLength")
let passwordInner = document.querySelector('#passwordInner')
let copyIcon = document.querySelector("#passwordInner ~ img")
let strengthStatus = document.querySelector('.strength > div p')
let strengthRecs = document.querySelectorAll('.recs div')

let passwordLength
let btn = document.querySelector('button')

let randomNumber
let characterCount
let a

let password = []

copyIcon.addEventListener("click", () => {
   passwordInner.select()
   document.execCommand('copy')
})

passwordLengthInp.addEventListener("input", () => {
   characterCountInner.innerHTML = passwordLengthInp.value
})

btn.addEventListener('click', () => {
   if (trueCheckboxCounter([upperCaseInp, lowerCaseInp, sybolInp, numberInp]) >= 1) {
      passwordLength = +passwordLengthInp.value
      while (passwordLength > 0) {
         if (upperCaseInp.checked) {
            characterCount = Math.ceil(Math.random() * Math.ceil(passwordLength / trueCheckboxCounter([upperCaseInp, lowerCaseInp, sybolInp, numberInp])))
            for (let i = 0; i < characterCount; i++) {
               randomNumber = Math.floor(Math.random() * lowerCaseLetters.length)
               password.push(upperCaseLetters[randomNumber])
            }
            passwordLength -= characterCount
         }
         if (lowerCaseInp.checked) {
            characterCount = Math.ceil(Math.random() * Math.ceil(passwordLength / trueCheckboxCounter([upperCaseInp, lowerCaseInp, sybolInp, numberInp])))
            for (let i = 0; i < characterCount; i++) {
               randomNumber = Math.floor(Math.random() * lowerCaseLetters.length)
               password.push(lowerCaseLetters[randomNumber])
            }
            passwordLength -= characterCount
         }
         if (sybolInp.checked) {
            characterCount = Math.ceil(Math.random() * Math.ceil(passwordLength / trueCheckboxCounter([upperCaseInp, lowerCaseInp, sybolInp, numberInp])))
            for (let i = 0; i < characterCount; i++) {
               randomNumber = Math.floor(Math.random() * symbols.length)
               password.push(symbols[randomNumber])
            }
            passwordLength -= characterCount
         }
         if (numberInp.checked) {
            characterCount = Math.ceil(Math.random() * Math.ceil(passwordLength / trueCheckboxCounter([upperCaseInp, lowerCaseInp, sybolInp, numberInp])))
            for (let i = 0; i < characterCount; i++) {
               randomNumber = Math.floor(Math.random() * numbers.length)
               password.push(numbers[randomNumber])
            }
            passwordLength -= characterCount
         }
      }
      for (let i = 0; i < strengthRecs.length; i++) {
         strengthRecs[i].style.border = '2px solid #E6E5EA'
         strengthRecs[i].style.backgroundColor = '#18171F'
      }
      switch (trueCheckboxCounter([upperCaseInp, lowerCaseInp, sybolInp, numberInp])) {
         case 1:
            strengthStatus.innerText = 'TOO WEAK!'
            strengthRecs[0].style.border = '0'
            strengthRecs[0].style.backgroundColor = '#F64A4A'
            break;
         case 2:
            strengthStatus.innerText = 'WEAK'
            for (let i = 0; i < 2; i++) {
               strengthRecs[i].style.border = '0'
               strengthRecs[i].style.backgroundColor = '#FB7C58'
            }
            break;
         case 3:
            strengthStatus.innerText = 'Medium'
            for (let i = 0; i < 3; i++) {
               strengthRecs[i].style.border = '0'
               strengthRecs[i].style.backgroundColor = '#F8CD65'
            }
            break;
         case 4:
            strengthStatus.innerText = 'strong'
            for (let i = 0; i < 4; i++) {
               strengthRecs[i].style.border = '0'
               strengthRecs[i].style.backgroundColor = '#A4FFAF'
            }
            break;
      }
      passwordInner.value = mix(password)
      password = []
   }
})

function trueCheckboxCounter(a) {
   let counter = 0
   a.forEach(e => {
      counter += (e.checked) ? 1 : 0
   });
   return counter
}

function mix(arr) {
   let a1
   let a2
   let randomNumber = Math.ceil(Math.random() * arr.length)
   a1 = arr.slice(0, randomNumber).reverse()
   a2 = arr.slice(randomNumber, arr.length)
   return [...a2, ...a1].join("")
}