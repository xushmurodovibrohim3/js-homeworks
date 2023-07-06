// task 1

function calcAverage(arr) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
   }
   return sum / arr.length
}
console.log(calcAverage([1, 1, 2, 2]))

// task 2

function isPalindrom(string) {
   let a = 0
   string = string.toLowerCase()
   for (let i = 0; i < Math.floor(string.length / 2); i++) {
      a += (string[i] === string[string.length - i - 1]) ? 1 : 0
   }
   return (a === Math.floor(string.length / 2)) ? string : false

}
console.log(isPalindrom("Racecar"))

// task 3

function countVowels(string) {
   let vowels = ["a", "e", "i", "o", "u"]
   let counter = 0;
   for (let i = 0; i < string.length; i++) {
      for (let j = 0; j < string.length; j++) {
         counter += (vowels[i] === string[j]) ? 1 : 0
      }
   }
   return counter
}
console.log(countVowels("hello"));

// let arr = [1, -1, 2, -2, 3];

// var positiveArr = arr.filter(function (number) {
//    return number > 0;
// });

// console.log(positiveArr);

let user = {
   name: "John",
   age: 30,
   isAdmin: true
};

for (let key in user) {
   // ключи
   console.log(user[key]);  // name, age, isAdmin
   // значения ключей
   console.log(key); // John, 30, true
}

function factorial(n) {
   if (n === 1) {
      return n
   } else {
      return n * factorial(n - 1)
   }
}

function findDeg(n) {
   let counter
   if (n === 1) {

   }
}
function primeFactors(n) {
   let b = 1
   let c = n
   let arr = []
   let a
   if (n === 1) {
      return []
   }
   for (let i = 2; i <= n; i++) {
      if (n / i === 1) {
         arr.push(i)
         break
      }

      if (n % i === 0) {
         a = n
         n /= i
         arr.push(i)
         if (a / i === i || a / i / i === i) {
            i -= 1
         }
      }
   }

   b = arr.map(e => b *= e)

   if (b[b.length - 1] !== c) {
      arr.push(c / b[b.length - 1])
   }

   return arr.sort((a, b) => a - b)
}

function a(n) {
   let arr = []
   let b = 1
   function e(n) {
      for (let i of arr) {
         b *= i
      }
      if (b === n) {
         return arr
      }
      for (let i = 2; i <= n; i++) {
         if (n / i === 1) {
            arr.push(i)
            break
         }
         if (n % i === 0) {
            n /= i
            arr.push(i)
         }
      }
      // for (let i = 0; i < arr.length; i++) {
      //    arr[i] = e(arr[i])
      // }
      return arr
   }
   e(n)
   return b
}



console.log(a(6));

// if (n / i === i) {
//    n /= i
//    arr.push(Math.sqrt(i))
//    arr.push(Math.sqrt(i))
// }
// arr.map(function (e) {
//    if (Number.isInteger(Math.sqrt(e))) {
//       resArr.push(Math.sqrt(e))
//       resArr.push(Math.sqrt(e))
//    } else {
//       resArr.push(e)
//    }
// })

function persistence(num) {
   let res = []
   let arr2 = []
   let arr = String(num).split("")
   let b;
   function a(n) {
      for (let i = 2; i <= num; i++) {
         if (n % i === 0) {
            n /= i
            res.push(i)
            if (n % i === 0) {
               i--
            }
         }
      }
      b = 1
      for (let i of res) {
         b *= i
      }
      if (b !== num) {
         a(n)
      }
   }
   a(num)



   console.log(res);
}


persistence(8)

console.log(4 % 2 ? "a" : "b");

function a(length, minimum, maximum) {
   let str = ""
   let c = minimum
   for (let i = 0; i < length; i++) {
      str += c
      c++
      if (c > maximum) {
         c = minimum
      }
      str = str.split(String(minimum))
   }
   return str
}

function pyramid(n) {
   let arr = []
   let c = 1
   for (let i = 0; i < n; i++) {
      arr.push([])
   }
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < c; j++) {
         arr[i].push(1)
      }
      c++
   }
   console.log(arr)
}

pyramid(2)

const sumSquareEvenRootOdd = ns => {
   let res = ns.map(function (e) {
      return e % 2 == 0 ? e ** 2 : e ** 0.5
   })
   return Number(res.reduce((prev, current) => prev + current, 0).toFixed(2))
};

console.log(sumSquareEvenRootOdd([4, 5, 7, 8, 1, 2, 3, 0]));