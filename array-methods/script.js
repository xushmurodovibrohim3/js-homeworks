// function arrPush(arr = [], item = "item not fined") {
//    arr[arr.length] = item;
//    return arr
// }

// function pop(arr) {
//    let firstItem = arr[0]
//    let res = []
//    for (let i = 0; i < arr.length - 1; i++) {
//       res[i] = arr[i]
//    }
//    arr = res
//    return arr
// }

// function shift(arr) {
//    let firstItem = arr[0]
//    let res = []
//    for (let i = 1; i < arr.length; i++) {
//       res[i - 1] = arr[i]
//    }
//    return res
// }

// function unshift(arr = [], item = "item no fined") {
//    let res = [item]
//    for (let i = 0; i < arr.length; i++) {
//       res[i + 1] = arr[i]
//    }
//    return res
// }

// function join(arr = [], symbol = "") {
//    let res = ""
//    for (let i = 0; i < arr.length; i++) {
//       symbol = (i === arr.length - 1) ? "" : symbol
//       res += arr[i] + symbol
//    }
//    return res
// }
// function split(str, symbol = "") {
//    let resault = [];
//    for (let i = 0; i < str.length; i++) {
//       if (str[i] === symbol) {
//          arrPush(resault, str[i])
//       } else if (str[i] !== symbol) {
//          arrPush(resault, str[i])
//       }
//    }
//    return resault
// }

// let arr = {
//    push: arrPush,
//    pop: pop,
//    shift: shift,
//    unshift: unshift,
//    join: join,
//    split: split
// }

// console.log(arr.split("a-aa-a", "-"));

Array.prototype.remove_ = function (integer_list, values_list) {
   let res = []
   let a = []
   for (let i = 0; i < values_list.length; i++) {
      for (let j = 0; j < integer_list.length; j++) {
         if (values_list[i] !== integer_list[j]) {
            a.push(values_list[i])
         }
         if (a[i] !== a[j]) {
            res.push(a[i])
         }
      }
   }
   return res
}

console.log(Array.prototype.remove_([-1, 0, -2, 0, 0, - 7], [1 ]))