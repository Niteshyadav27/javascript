const marvel_heros = ["hulk", "thor", "irpnman"]
const dc_heros =["superman","batman", "flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][0]);
// console.log(marvel_heros);


// const allHeros  = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const allnewheros = [...marvel_heros, ...dc_heros]
// console.log(allnewheros);

const another_array =[1,2,3,[4,5,5],7,[7,8,[9,1,2]]]
const real_array = another_array.flat(Infinity)
console.log(real_array);


console.log(Array.isArray("nitesh"))
console.log(Array.from("nitesh"))
console.log(Array.from({name:"nitesh"})) // intersting

let score1 =100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2, score3));