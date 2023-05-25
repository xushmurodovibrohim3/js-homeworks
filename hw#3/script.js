let seasons = ["", "winter", "spring", "summer", "autumn"];
let weekDays = ["", "monday", "tuesday", "wendesday", "thursday", "friday", "saturday", "sunday"]
let num1 = +prompt("enter number");
alert((num1 % 2 === 0) ? "this number is even" : "this number odd");
let seasonNumber = +prompt("enter month number");
alert((seasonNumber <= 12) ? seasons[Math.ceil(seasonNumber / 3)] : "eror");
let weekDayNumber = +prompt("enter week day number");
alert((weekDayNumber <= 7) ? weekDays[weekDayNumber] : "eror")
let hour = +prompt("enter hour");
if (hour >= 24 || hour <= 6) {
    alert("good ...");
} else if (hour >= 6 && hour <= 12) {
    alert("good morning");
} else if (hour >= 12 && hour <= 18) {
    alert("good afternoon");
} else if (hour >= 18 && hour <= 23) {
    alert("good night");
} else if (hour >= 23 && hour <= 23) {
    alert("good night");
}