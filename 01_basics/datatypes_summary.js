// primitive

// 7 types : String, Number, Boolean, null, Undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')

const anotherId = Symbol('123')
console.log(id ===anotherId);

const bigNumber = 123456789009876543321n




// reference (Non primitive)

// Array, Objects, Funtions
const heros = ["ironman", "thor", "hulk"]
let myObj = {
    name :"nitesh",
    age:  22,
}

const myFuntiom = function(){
    console.log("Hello world");
    }

    console.log(typeof heros);
    
