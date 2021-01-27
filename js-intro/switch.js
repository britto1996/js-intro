var readlineSync = require('readline-sync')

var user = readlineSync.question("Enter user role : ")
console.log(user)
switch(user){
    case user='admin':
        console.log(`admin can access every thing`)
        break;
    case user='user':
        console.log(`new user added to the application`)
        break

    default:
        console.log("wrong choice")
}