function strSlice(str, start = 0, end = str.length) {
   //    let a = ""
   //    if (start < 0 || end < 0) {
   //       for (let i = str.length + ((start > 0) ? -start : start); i < str.length + ((end > 0) ? -end : end); i++) {
   //          a += str[i]
   //       }
   //       // assalomu 3 -1


   //    // for (let i = start; i < end; i++) {
   //    //    a += str[i]
   //    // }
   //    return a
   let res = ""
   start = (start < 0) ? str.length + start : start;
   end = (end < 0) ? str.length + end : end;
   for (let i = start; i < end; i++) {
      res += str[i]
   }
   return res
}


function strSubstr(str, start = 0, length = 0) {
   let a = "";
   for (let i = start; i < length + start; i++) {
      a += str[i]
   }
   return a
}

function strSubstring(str, start = 0, end = str.length - 1) {
   let b;
   if (start > end) {
      b = start
      start = end;
      end = b
   }
   let a = ""
   for (let i = start; i < end; i++) {
      a += str[i]
   }
   return a
}

function strReapet(str, n) {
   let res = "";
   for (let i = 0; i < n; i++) {
      res += str;
   }
   return res;
}

function strIndexOf(str, str2, n = 0) {
   for (let i = n; i < str.length; i++) {
      if (str2 === strSlice(str, i, str2.length + i)) {
         return i;
      }
   }
}

function strStartsWith(str, substr) {
   return (strSlice(str, 0, substr.length) === substr) ? true : false;
}

function strEndsWith(str, substr) {
   // assalomu "a"
   return (strSlice(str, -substr.length, str.length) === substr) ? true : false;
}

function strIncludes(str, substr) {
   let res;
   for (let i = 0; i < str.length; i += substr.length) {
      res = (strSubstr(str, i, substr.length) === substr) ? true : false
      i = (res === true) ? str.length : i
   }
   return res
}
let str = {
   reapet: strReapet,
   indexOf: strIndexOf,
   startsWith: strStartsWith,
   endsWith: strEndsWith,
   substr: strSubstr,
   substring: strSubstring,
   slice: strSlice,
   includes: strIncludes
}

console.log(str.includes("assalomu", "z"))