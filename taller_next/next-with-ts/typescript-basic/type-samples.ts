/*
Run this using:
tsc types-sample.ts

You wll see the issue related to the type by inference firstName is string.
*/

// Multiple types
let otherName: string | number;
let othervar: number | boolean;

otherName = "Omar";
otherName = 1000;

othervar = 123;
othervar = true;


console.log(` ${otherName} ${othervar}`);
