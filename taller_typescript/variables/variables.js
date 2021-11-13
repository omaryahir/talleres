// Number
// Explicit
var phone = 1;
// Next line can trigger an error type
//phone = "hola";
// Inflicted
var phone2 = 1;
// Next line can trigger an error type
// the thing is typescript assigned number
// due to the initial value for phone2
// phone2 = "string"
var hex = 0xf00d;
var binary = 2;
var octal = 456;
// Boolean
var isOk;
isOk = true;
// Next line will trigger an error
// isOk = 1;
// String
var myExplit = 'new text';
var myString = 'Hello World';
// Next lines are going to trigger an error
// myString = 1;
// myString = true;
// Template String 
var firstName = "Omar";
var lastName = "Mendoza";
var phoneNumber = 12314;
var myTemplate;
myTemplate = "\n    Flight\n    firstName: " + firstName + "\n    lastName: " + lastName + "\n    phoneNumber: " + phoneNumber + "\n";
console.log(myTemplate);
// output:
//  Flight
//  firstName: Omar
//  lastName: Mendoza
//  phoneNumber: 12314
// Any 
// Explicit
var myNumber;
myNumber = 1;
console.log(myNumber);
myNumber = 'hola';
console.log(myNumber);
// Inflicted
var myNumber2;
myNumber2 = 2;
console.log(myNumber2);
myNumber2 = 'hola';
console.log(myNumber2);
