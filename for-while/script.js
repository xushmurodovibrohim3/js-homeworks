let arr = [-10 , -4 , -4 , 3 , 2 , 4 , -10];
let counter = 0;
let resault1 = 0;
let resault2 = 0;
let resault3;
for(let i = 0; i < arr.length; i++){
    let a = i;
    resault1 += arr[i];
    resault2 += (arr[i] < 0) ? arr[i] : 0;
    resault3 = arr[i]
    for (let i = a; i < arr.length; i++) {
        counter += (resault3 === arr[i]) ? 1 : 0;
    }
    if (counter >= 2) {
        console.log("same numbers: " + resault3)
    }
    counter = 0;
}
console.log("sum of numbers: " + resault1)
console.log("sum of negative numbers: " + -resault2)