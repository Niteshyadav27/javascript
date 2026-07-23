//dates

let myDates =new Date()
// console.log(myDates.toString());
// console.log(myDates.toDateString());
// console.log(myDates.toJSON());

// console.log(myDates.toISOString());
// console.log(myDates.toLocaleString());
// console.log(myDates.toLocaleTimeString());

// console.log(typeof myDates)

let myDates1 = new Date (2007, 5, 27, 7, 20)

// console.log(myDates1.toDateString());
// console.log(myDates1.toLocaleString());

let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(myDates1.getTime());
console.log(myDates1/1000);
console.log(Math.floor(Date.now()/1000));


