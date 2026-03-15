// Q1

function reverseNumber(x){
    let reversed = x.toString().split("").reverse().join("");
    return Number(reversed);
}

console.log("Q1 Result:", reverseNumber(532443));


// ===================================

// Q2

for(let i = 0; i <= 15; i++){
    console.log(i + (i % 2 === 0 ? " is even" : " is odd"));
}


// ===================================

// Q3


function sortString(str){
    return str.toLowerCase().split("").sort().join("");
}

console.log("Q3 Result:", sortString("Orange"));


// ===================================

// Q4


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

console.log("Q4 Result:", insertDash(25468));


// ===================================

// Q5


function Agechecker(age){
    console.log(age >= 18 ? "The user is Adult" : "The user is Minor");
}

Agechecker(20);
Agechecker(15);