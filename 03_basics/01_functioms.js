
function sayMyName(){
    console.log("N");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 +number2);
    
// }

function addTwoNumbers(number1, number2){

    // let result = number1+ number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,5)

// console.log("result:", result);


function loginUserMessage(username){
    if(username ==undefined){
        console.log("please enter your username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());
// console.log(loginUserMessage("Nitesh"));


function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,300,400));

const user = {
    username: "nitesh",
    price: 199
}

function handleObject

