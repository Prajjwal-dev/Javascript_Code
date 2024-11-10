//Primitive data type
console.log("var, let and const")
//var a = 45
// var a = "p"
let b = "Prajjwal"
const person = "Prajjwal"
prajjwal = "Ram"//Throws an error because constant cannot be changed
b = 4
let c = null
let d = undefined
{
    let b = "this"
    console.log(b)
}
console.log(b)
console.log(person)

// Object Data type
const item = {
    "Prajjwal": true,
    "Ram": false,
    "Lovish": 67,
    "Rohan": undefined
}
console.log(item["Ram"])