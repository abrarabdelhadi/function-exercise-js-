// Q1
let num1 = prompt("Q1: Enter a number to reverse:");
function reverseNumber(x){
    return Number(x.toString().split("").reverse().join(""));
}
alert("Q1 Result: " + reverseNumber(num1));


// Q2
let loopResults = "";
for(let i = 0; i <= 15; i++){
    loopResults += i + (i % 2 === 0 ? " is even\n" : " is odd\n");
}
alert("Q2 Results:\n" + loopResults);


// Q3
let str = prompt("Q3: Enter a string to sort alphabetically:");
function sortString(s){
    return s.toLowerCase().split("").sort().join("");
}
alert("Q3 Result: " + sortString(str));


// Q4
let num2 = prompt("Q4: Enter a number to insert dashes between even digits:");
function insertDash(num){
    let str = num.toString();
    let result = "";
    for(let i = 0; i < str.length; i++){
        result += str[i];
        if(str[i] % 2 === 0 && str[i+1] % 2 === 0){
            result += "-";
        }
    }
    return result;
}
alert("Q4 Result: " + insertDash(num2));


// Q5
let age = prompt("Q5: Enter your age:");
function Agechecker(age){
    alert(age >= 18 ? "The user is Adult" : "The user is Minor");
}
Agechecker(age);