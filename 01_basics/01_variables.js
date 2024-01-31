const accountId = 12345
let userEmail = "surya@gmail.com"
var password = "12345"
userCity = "ranchi"
let userState;

// accountId = 5 // not allowed for constant variable
userEmail = "sk@surya.com"
password = "212121"
userCity = "Bangalore"

/* never use 'var' as it can be changed at any scope */

console.log(accountId);
console.table([accountId, userEmail, password, userCity, userState]);
