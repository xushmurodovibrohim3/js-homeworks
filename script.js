// // let a = document.querySelectorAll("p")
// // for (let i of a) {
// //    a[i].innerHTML = '5654'
// // }

// // function maskify(str) {
// //    let a = ""     
// //    let j;
// //    if (str.split("").reverse().join("") !== str || str.length === 1) {
// //       for (let i = 0; i < str.length; i++) {
// //          if (str[i] === str[i + 1]) {
// //             j = i
// //             for (; str[i] === str[j]; j++) {
// //                a += str[i]
// //             }
// //             i = j
// //          } else if (str[i] !== str[i + 1]) {
// //             a += str[i]
// //             break
// //          }
// //       }
// //    } else {
// //       a = str.slice(-3, str.length)
// //    }
// //    return str + a
// // }

// // function complete(str) {
// //    let a = ""
// //    let j;
// //    if (str.split("").reverse().join("") !== str && hasDublicate(str) || str.length === 1) {
// //       for (let i = 0; i < str.length; i++) {
// //          if (str[i] === str[i + 1]) {
// //             j = i
// //             for (; str[i] === str[j]; j++) {
// //                a += str[i]
// //             }
// //             i = j
// //             break
// //          } else {
// //             a += str[i]
// //             break
// //          }
// //       }
// //    } else {
// //       a = str.slice(0, str.length - 1).split("").reverse().join("")
// //    }
// //    return str + a
// // }

// function hasDublicate(str) {
//    let counter = str.length
//    let a = []
//    str = str.split("")
//    for (let i = 0; i < str.length; i++) {
//       if (!a.includes(str[i])) {
//          a.push(str[i])
//          counter--
//       }
//    }
//    return counter >= Math.floor(str.length / 2)
// }

// function complete(str) {
//    let a;
//    if (str.split("").reverse().join("") !== str && hasDublicate(str)) {
//       for (let i = 1; i <= str.length; i++) {
//          if (str.slice(0, i) == str.slice(0, i).split("").reverse().join("") && str.slice(0, i)[0] !== str[i]) {
//             return str + str.slice(0, i)
//          }
//       }
//    } else if (str.length === 1) {
//       return str + str
//    } else {
//       return str + str.substr(0, str.length - 1).split("").reverse().join("")
//    }
// }
// // console.log(hasDublicate("QRSTsTUVWVUTs"));

// function complete(str) {
//    for (let i = 1; i <= str.length; i++) {
//       if (str.slice(i) === str.slice(i).split("").reverse().join("")) {
//          return str + str.slice(0, i).split("").reverse().join("")
//       }
//    }
// }

// console.log(complete("x"));

// console.log("a00a".slice(0));

// const binaryArrayToNumber = arr => {
//    arr = (arr.map(e => e / 1).join("")) / 1
//    console.log(arr.toString(10))
// };
// console.log(binaryArrayToNumber([0, 0, 1, 0]));

// function duplicateCount(text) {
//    let j
//    text = text.toLowerCase().split("").sort()
//    let count = 0
//    for (let i = 0; i < text.length; i++) {
//       if (text[i] === text[i + 1]) {
//          count++
//          j = i
//          for (; text[i] === text[j];) {
//             j++
//          }
//          i = j - 1
//       }
//    }
//    return count
// }

// console.log(duplicateCount("aabbcde"));

// console.log();

// let set = new Set()
// console.log(Boolean(-0));

// let arr = [1, 2, 2, 2]

// arr.forEach(function (item, index, arr) {

// })

// let animal = {
//    eats: true
// };
// let rabbit = {
//    jumps: true,
//    eats: false
// };

// rabbit.__proto__ = animal;

// console.log(rabbit.eats);

// console.log(0010.toString(10));

// function mango(quantity, price) {
//    let res = 0
//    for (let i = 1; i <= quantity; i++) {
//       res++
//       if (i % 3 === 0) {
//          res--
//       }
//    }
//    return res * price
// }

// console.log(mango(9, 5));


// console.log(12..toString(4) / 10);

// // console.log(12n.toString(2n * 2n) / 10n);

// console.log(10..toString(10));

// function reverseNumber(n, b) {
//    if (b === 1n) {
//       return n
//    }
//    let num1 = Number(n)
//    let num2 = Number(b)
//    let res = num1.toString(num2).split("").reverse().join("").toString(10)
//    if (num2 === 2) {
//       return BigInt("0b" + res)
//    } else if (num2 === 30) {
//       return BigInt("45" + parseInt((res + "").split("").reverse().join()).toString(10))
//    }
//    return BigInt(res.toString(10))
// }
// console.log(reverseNumber(68n, 12n));

// console.log(1n + 1n);

// // console.log(+"0b0011".toString(10));

// // console.log(0011.toString(5));

// console.log(+"0b1000100".toString(6));

// console.log(68 * 2 - 21);
// alert('hello')
let d = document.querySelector("#d")
let i = document.querySelector("#i")
let p = document.querySelector("p")
let div = document.querySelector("div")

let num = 0

d.addEventListener("click", () => {
   if (num <= 0) {
      div.classList.add("a")
      num++
   }
   num--
   p.innerText = num
})
i.addEventListener("click", () => {
   p.innerText = (++num)
})

console.log(div.classList);