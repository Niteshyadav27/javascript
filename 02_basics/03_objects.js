// singleton
//objects.create

// object literals

const mysym = Symbol("key1")


const Jsuser = {
    name: "nietsh",
    "full name": "Niteshkumar Yadav",
    [mysym]:"mykey1",
    age: 19,
    location: "mumbai",
    email: "nitesh@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["mon","wed","fri"]
}

// console.log(Jsuser.email);
// console.log(Jsuser"email");

// console.log(Jsuser["full name"]);
// console.log(Jsuser[mysym]);

Jsuser.email = "nitesh@gmail.com"
// Object.freeze(Jsuser)
Jsuser.email = "nitesh@chatgpt.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello Js user");
    
}
Jsuser.greeting2 = function(){
    console.log(`Hello Js user, ${this.name}`);
    
}
console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());

