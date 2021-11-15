// run this using:
// $ tsc learnWithExamples.ts && node learnWithExamples.js

// Number  ------------------------------------------------
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




// Boolean  ------------------------------------------------
let isOk: boolean;
isOk = true;
// Next line will trigger an error
// isOk = 1;




// String  ------------------------------------------------
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




// Any  ------------------------------------------------

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




// Void  ------------------------------------------------

// Explicit Type

// Use of void is default in this scenario
function printSpecs(Computer: any) {
    console.log(' 1 Computer Specs', Computer.cpu, Computer.memory, Computer.disk)
}

printSpecs({cpu: "Intel", memory: "16GB", disk: "512GB"});

// Use of void is default in this scenario
function printSpecsTemplate(computer: any) {
    console.log(`
        2 Computer Specs:
        cpu: ${computer.cpu}
        memory: ${computer.memory}
        disk: ${computer.disk}
    `);
}

printSpecsTemplate({cpu: "Intel", memory: "16GB", disk: "512GB"});

let nodata: void;
// nodata = 1;
// Error: ^ Type 'number' is not assignable to type 'void'.


// other edgecase
interface Thing {
    method1(): number;
    method2(paramater: number | string): Thing;
  }




// Never  ------------------------------------------------

function printSomething(something: string): never {
    throw new Error(`${something}`);
}

// printSomething('test');
// OUTPUT:
// throw new Error("" + something);
// ^

// Error: test
// at printSomething (/Users/omendoza/Documents/zrepos/talleres/taller_typescript/variables/variables.js:66:11)
// at Object.<anonymous> (/Users/omendoza/Documents/zrepos/talleres/taller_typescript/variables/variables.js:68:1)
// at Module._compile (node:internal/modules/cjs/loader:1095:14)
// at Object.Module._extensions..js (node:internal/modules/cjs/loader:1147:10)
// at Module.load (node:internal/modules/cjs/loader:975:32)
// at Function.Module._load (node:internal/modules/cjs/loader:822:12)
// at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
// at node:internal/main/run_main_module:17:47

try {
    printSomething('test');
} catch (error) {
    console.log('fail!');
}

// Never is usually to throw error or terminate this is going 
// to return this error:
// function mynerver(): never {
//                      ~~~~~
// A function returning 'never' cannot have a reachable end point.
// function mynerver(): never {
//     console.log('this is working');
// }

// Other edge types Null / Undefined
let myundefined: undefined;
let mynull: null;
mynull = null;
myundefined = undefined;
console.log(mynull, myundefined);




// Object vs object  ------------------------------------------------
 
var o: object;
o = { prop: 0 }; // OK
o = []; // OK
// o = 42; // Error
// o = "string"; // Error
// o = false; // Error
// o = null; // Error
// o = undefined; // Error
console.log(o);

var p: {}; // or Object -- this is an instanceof Object from TS
console.log(o instanceof Object);
p = { prop: 0 }; // OK
p = []; // OK
p = 42; // OK
p = "string"; // OK
p = false; // OK
// p = null; // Error
// p = undefined; // Error
console.log(p);


// Run this using:
// $ tsc variables/variables.ts && node variables/variables.js




// Array  ------------------------------------------------ 

// using brackets
let fruits: string[];
fruits = ['apple', 'orange', 'grapes']
// fruits = ['test', 1]
//                   ^ error TS2322: Type 'number' is not assignable to type 'string'.
console.log(fruits);

// brackets - corchetes
// braces - llaves

// using Array<type>
let languages: Array<string>;
languages = ['vb6', 'java', 'php', 'js', 'python', 'terraform', 'ts'];

// languages = [1]
//              ^ error TS2322: Type 'number' is not assignable to type 'string'.
console.log(languages);

console.log(languages[5]);


// Array Properties

languages.sort()
console.log(languages.length);
console.log(languages);

languages.push('go');
console.log(languages);



// Tuple  ------------------------------------------------

let devices: [number, string];
devices = [1, 'galaxyTab'];

console.log(devices);
console.log(devices[1]);

// the type is identified in the string item
console.log(devices[1].length); 

// id, type, active
let vehicle: [number, string, boolean]; // <-- ideally each type is different, but next example is valid.
vehicle = [1, 'truck', true];
console.log('Vehicle', vehicle)

let test: [number, number, number, string];
test = [1,1,1,'ok'];
console.log(test);




// Array of Tuples  ------------------------------------------------

let vehicles: [number, string, boolean][] = [];
// we need to initialize ................... ^, next line triggers an error.
// let vehicles: [number, string, boolean][];

vehicles.push([1, 'car', true]);
vehicles.push([2, 'truck', true]);
console.log(vehicles);
console.log(vehicles[1][1]);




// Enum  ------------------------------------------------

const car = 'Car';
const airplane = 'Airplane';
const truck = 'Truck';

enum Vehicle {
    car,
    airplane,
    truck
}

const myTypeCar: Vehicle = Vehicle.airplane;
const myTypeCar3 = Vehicle.truck;

console.log('myTypeCar', myTypeCar);
// output: myTypeCar 1
console.log('Vehicule[myTypeCar]', Vehicle[myTypeCar]);
// output: Vehicule[myTypeCar] airplane


enum Flavors {
    chocolate = 'Chocolate',
    vanilla = 'Vanilla',
    strawberry = 'Strawberry'
}

let myFavoriteFlavor: Flavors;
myFavoriteFlavor = Flavors.chocolate;
console.log(myFavoriteFlavor);
// output: Chocolate

// myFavoriteFlavor = 'test';
// ^ error TS2322: Type '"test"' is not assignable to type 'Flavors'.




// Type Union // Union de tipos  ------------------------------------------------

let twoTypesVariable: number | string;

twoTypesVariable = 1;
console.log('twoTypeVariable as number: ', twoTypesVariable);
// output: twoTypeVariable as number:  1

twoTypesVariable = 'hola'; 
console.log('twoTypeVariable as string: ',twoTypesVariable);
// output: twoTypeVariable as number:  1

// Alias type -- Something to create custom types 
type myCustomType = number | string;
let myAliasTypeVariable : myCustomType
myAliasTypeVariable = 1;
myAliasTypeVariable = 'hola';

console.log('myAliasTypeVariable:', myAliasTypeVariable);
// output: myAliasTypeVariable: hola

// Alias type using -- valid values
type favoriteComputer = 'Mac Mini' | 'Macbook Pro' | 'TUF' | 'Razer'

let computer: favoriteComputer;
// computer = 'hola';
// output: error TS2322: Type '"hola"' is not assignable to type 'favoriteComputer'

// computer = 'mac Mini';
// output: error TS2322: Type '"hola"' is not assignable to type 'favoriteComputer'

computer = 'Mac Mini';
console.log(`The computer is ${computer}`);
// output: The computer is Mac Mini





// Type assertions ------------------------------------------------

let anyVariable: any;
let myStringVariable: string;

anyVariable = 'Hola';

if((<string>anyVariable).length == 4) {
    myStringVariable = <string>anyVariable;
    console.log(myStringVariable);
}

// syntax 'as'
if((anyVariable as string).length == 4) {
    myStringVariable = anyVariable as string;
    console.log(myStringVariable);
}





// Functions   ------------------------------------------------

type VehicleType = 'Car' | 'Truck' | 'Bus';
                                              //? means optional :) 
function createCar(model:string, year:number, vehicleType?: VehicleType): string {
    return (model + ' ' + year.toString() + ' ' + vehicleType);    
}

console.log(createCar('Sentra', 2006, 'Car'));
// output: Sentra 2006 Car

console.log(createCar('Eco', 2006));
// output: Eco 2006 undefined



// Flat Array Function

let createCarFlatFunction = (model: string, year: number, vehicleType?: VehicleType): object => {
    // return {
    //     model: model,
    //     year: year,
    //     vehicleType: vehicleType
    // } // or ...
    return { model, year, vehicleType };
};
console.log(createCarFlatFunction('Escape', 2006));
// output: { model: 'Escape', year: 2006, vehicleType: undefined }



// Functions with never and return 

function handleError2(code: number, message: string): never | string {
    if (message == 'myerror') {
        throw new Error(`${message}. Code error: ${code}`);
    } else 
        return 'An error occurred';
}

let result = handleError2(200, 'OK');
console.log(`result ${result}`);
// output: result An error occurred

try {
    result = handleError2(400, 'myerror');
    console.log(`result ${result}`);    
} catch(error) {
    console.log(error);
    // error message with traceback ... 
}

console.log('ok !!');
// output: ok !!








// Interfaces ------------------------------------------------

interface Car {
    model: string,
    readonly year: number,      // READONLY
    vehicle?: Vehicle           // OPTIONAL
}

function showCar(car: Car) {
    console.log(`- model: ${car.model}, year: ${car.year}, vehicleType: ${car.vehicle}`);
}

let myCar: Car = {
    model: 'Sentra',
    year: 2006,
    vehicle: Vehicle.car
}
showCar(myCar);
// output: - model: Sentra, year: 2006, vehicleType: 0

showCar({
    model: 'Eco',
    year: 2015,
    vehicle: Vehicle.truck
});
// output: - model: Eco, year: 2015, vehicleType: 2

showCar({
    model: 'Eco',
    year: 2015
});
// output: - model: Eco, year: 2015, vehicleType: undefined


// Quick const review && readonly

const myConstant = '1';
// myConstant = '2';
// ^ error TS2588: Cannot assign to 'myConstant' because it is a constant.

const myCar2: Car = {
    model: 'Sentra',
    year: 2006
};
console.log(myCar2.model);

myCar2.model = 'Escape';
console.log(myCar2.model);


// myCar2.year = 2006
// ^ error TS2540: Cannot assign to 'year' because it is a read-only property

