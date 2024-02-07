/* +++++ STRING MANIPULATION METHODS +++++ */

// Old way to concatinate Strings:
const user = "surya"
const repoCount = 8

// console.log(user + " has " + repoCount + " repositories");

// New way: String Interpolation
console.log(`Hi, I'm ${user}. I've ${repoCount} repositories in GitHub.`);

// Another way to declare a string:
const userName = new String('Surya')        // This value is an Object
console.log(userName);
console.log(typeof userName);               // Object

// Access index of a string: (Strings behave like an Object)
console.log(user[0]);                       // s
console.log(userName[2]);                   // r

// Access methods of an Object using __proto__: (No need to put this as it's standard in JS so we can directly use methods)
console.log(userName.__proto__);

// Access methods in standard way:
console.log(userName.length);               // 5
console.log(userName.toUpperCase());        // SURYA
console.log(userName.charAt(2));            // r (it shows the character at that index)
console.log(userName.indexOf('r'));         // 2 (it shows the index of the character)

// Dividing using substring() method
const newStr = "username"
console.log(newStr);                        // username (whole string)
console.log(newStr.substring(2));           // ername (string starts from the given number)
console.log(newStr.substring(2, 6));        // erna (it trims the number of characters before second number)

// Dividing using slice() method
const newString = "username"
console.log(newString.slice(0, 4));         // user (trims the characters before second number's index)
console.log(newString.slice(-8, 4));        // user (whatever comes the remaining, it gives positive numbers as characters)

// trim() method:
const userEmail = "   surya@google.com   "
console.log(userEmail);                     // Printed with spaces
console.log(userEmail.trim());              // Printed without spaces (trims all the spaces back and fourth (whitespace))

// replace() method to replace based on something:
const oldUrl = "https://google.com/surya%20karigar"
const newUrl = oldUrl.replace('%20', '-')

console.log(oldUrl);                        // Printed as it is
console.log(newUrl);                        // Replaced the '%20' with '-'

// includes() method to find string:
console.log(oldUrl.includes('surya'));      // returns True because 'surya' exists in the URL.
console.log(oldUrl.includes('kar'));        // returns True because 'kar' exists in the URL as a part of karigar.
console.log(oldUrl.includes('not'));        // returns False because 'not' does not exist in the URL.

// split() method to convert String to Substring and return as array based on something:
const address = "House-no-f2-Dwarika-Gali-Delhi"
console.log(address.split('-'));            // [ 'House', 'no', 'f2', 'Dwarika', 'Gali', 'Delhi' ]