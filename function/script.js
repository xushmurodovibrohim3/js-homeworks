// task 1

function calcAverage(arr) {
   let sum = 0;
   for(let i = 0; i < arr.length; i++){
      sum += arr[i]
   }
   return sum / arr.length
}
console.log(calcAverage([1, 1, 2, 2]))

// task 2

function isPalindrom(string) {
   let a = 0
   for (let i = 0; i < Math.round(string.length / 2); i++) {
      a += (string[i] === string[string.length - i-1]) ? 1 : 0
      counter++
   }
   return (a === Math.round(string.length / 2)) ? string : "false"
   
}
console.log(isPalindrom("racecar"))

// task 3

function countVowels(string) {
   let vowels = ["a" , "e" , "i" , "o" , "u"]
   let counter = 0;
   for (let i = 0; i < string.length; i++) {
      for (let j = 0; j < string.length; j++) {
         counter += (vowels[i] === string[j]) ? 1 : 0
      }
   }
   return counter
}
console.log(countVowels("hello"));