
let a =69

if (true){
let a =10
const b = 20
var c = 30

// console.log("INNER:", a);
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Nitesh"

    function two(){
        const website = "Youtube"
        console.log(username);
        
    }
    // console.log((website));
    
    two()
}

// one()

if (true){
    const username = "Nitesh"
    if (username ==="Nitesh"){
        const website = "  youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

// +++++++++++++++++++++++++++++++++++++++++++intresting+++++++++++++++++++++++++++++++++++
console.log(addone(4));

function addone(num){
    return num + 1
}

addtwo()

const addtwo = function(num){
    return num + 2
}