const number1 = Number(prompt("Enter first number:"))
const islem = prompt()
const number2 = Number(prompt("Enter second number:"))

if(islem === "+") {
    console.log(number1+number2)
} else if(islem === "-") {
    console.log(number1-number2)
} else if(islem === "*"){
    console.log(number1 * number2)
}else if (islem === "/"){
    console.log(number1 / number2)
}else {
    console.log("Error")
}
