var readlineSync = require('readline-sync')

var number1 = readlineSync.question('Enter a number : ')
var number2 = readlineSync.question('Enter a number :')
if(number1 > number2){
    console.log(`${number1} is greater than ${number2}`)
}else if(number1===number2){
    console.log(`${number1} and ${number2} are equal`)
}

else{
    console.log(`${number1} is lesser than ${number2}`)
}