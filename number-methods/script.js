function getIntegerNumber(n) {
   let a = n + "";
   let resault = "";
   for (let i = 0; i < a.length; i++) {
      if (a[i] !== ".") {
         resault += a[i]
      } else {
         i = a.length
      }
   }
   return +resault
}

function numFloor(n) {
   return (n > 0) ? getIntegerNumber(n) : getIntegerNumber(n) - 1
}

function numRound(n) {
   if (n > 0) {
      return (n - getIntegerNumber(n) > 0.5) ? getIntegerNumber(n) + 1 : getIntegerNumber(n)
   } else {
      return (n + getIntegerNumber(n) > -0.5) ? getIntegerNumber(n) : getIntegerNumber(n) - 1
   }
}

function numCeil(n) {
   return (n > 0) ? getIntegerNumber(n) + 1 : getIntegerNumber(n);
}

function sqrt(n) {
   return n ** (1 / 2)
}

function pow(n = 1, d = 0) {
   return n ** d
}

function numAbs(n) {
   return (n > 0) ? n : -n; 
}

let Math = {
   floor: numFloor,
   round: numRound,
   ceil: numCeil,
   trunc: getIntegerNumber,
   pow: pow,
   sqrt: sqrt,
   abs: numAbs
}

let num = {

}

console.log(Math.abs(4));