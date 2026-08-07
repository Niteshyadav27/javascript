// const tinderUser =new Object()
const tinderUser = {}

tinderUser.id ="12345asdf"
tinderUser.name ="asdf"
tinderUser.IsLoggedIn = true

// console.log(tinderUser);

const user = {
    email:"some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Nitesh",
            lastname: "Yadav"
        }
    }
}
// console.log(user.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users =[
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },{
        id: 1,
        email: "h@gmail.com"
    },{
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(Object.hasOwnProperty('name'));


const course = {
    cousrename: "Super30",
    price: "1299",
    courseInstructor: "Nitesh" 
}

// course.courseInstructor

const {courseInstructor:instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// {
//     "name": "Nitesh",
//     "cousrename":"crashcourse",
//     "price": "1299",
//     "instructor":"Nitesh"
// }

[
    {},
    {},
    {}
]