const user = {
    username: "Nitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
        
    }

}

user.welcomeMessage()
user.username ="admin"
user.welcomeMessage()
console.log(this);

// function chai(){
//     let username = "Nitesh"
//     console.log(this.username);
    
// }
// chai()

const chai = ()=>{
    let username = "Nitesh"
    console.log(this);
}

// chai()


// const addtwo = (num1,num2 ) => {
//     return num1 + num2 
// }

// const addtwo = (num1,num2 ) =>  num1 + num2 

// const addtwo = (num1,num2 ) =>  (num1 + num2 )

const addtwo = (num1,num2 ) => ({username: "Nitesh"})



console.log(addtwo (5,5));

// function sum(x,y){
//     return x+y
// }
// console.log(sum(2,3))

// const sum1 = (x,y) =>{
//     return x+y
// }

// console.log(sum1(2,3))