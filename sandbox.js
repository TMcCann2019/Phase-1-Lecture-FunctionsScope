function sayHello(){
    console.log("Hello there!")
}
sayHello()

function sayHelloToYou(name){
    console.log("Hello there, " + name + "!") //string concatenation
    console.log(`Hello there, ${name}!`) //string interpolation
}
sayHelloToYou("Beck")

function addTwoNumbers(num1, num2){
    const sum = num1 + num2
    return sum
}
const sum = addTwoNumbers(4, 6)
console.log(sum)

const squaredNumber =function(num){
    return num**2 //num * num
}
const square = squaredNumber(6)
console.log(square)

const cubedNumber = (num) => {
    return num **3 //num * num * num
}
const cube = cubedNumber(5)
console.log(cube)

let num1 = 3
function incrementer(){
    let num2 =8
    num1 = num1 + 1 //num1++
    num2 = num2 + 1 //num2++
}
incrementer()
console.log(`num1: ${num1}`)
// console.log(`num2: ${num2}`) //doesnt show as not globally scoped outside the fucntion and would need to return the value

