
// Number
// Explicit
let phone: number = 1;

// Next line can trigger an error type
//phone = "hola";

// Inflicted
let phone2 = 1;

// Next line can trigger an error type
// the thing is typescript assigned number
// due to the initial value for phone2
// phone2 = "string"

let hex: number = 0xf00d;
let binary: number = 0b0010;
let octal: number = 0o710;

// Boolean
let isOk: boolean;
isOk = true;
// Next line will trigger an error
// isOk = 1;

// String
let myExplit: string = 'new text';
let myString = 'Hello World';

// Next lines are going to trigger an error
// myString = 1;
// myString = true;

// Template String 
let firstName: string = "Omar";
let lastName: string = "Mendoza";
let phoneNumber: number = 12314;

let myTemplate: string;
myTemplate = `
    Flight
    firstName: ${firstName}
    lastName: ${lastName}
    phoneNumber: ${phoneNumber}
`
console.log(myTemplate);
// output:
//  Flight
//  firstName: Omar
//  lastName: Mendoza
//  phoneNumber: 12314


// Any 

// Explicit
let myNumber: any;
myNumber = 1;
console.log(myNumber);
myNumber = 'hola';
console.log(myNumber);


// Inflicted
let myNumber2;
myNumber2 = 2;
console.log(myNumber2);
myNumber2 = 'hola';
console.log(myNumber2);


// Void

// Explicit Type

function printSpecs(Computer: any) {
    console.log('Computer Specs', Computer.cpu, Computer.memory, Computer.disk)
}

printSpecs({cpu: "Intel", memory: "16GB", disk: "512GB"});
