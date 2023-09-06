/*
Run this using:
tsc types-sample.ts

You wll see the issue related to the type by inference firstName is string.
*/
// Multiple types
var otherName;
var othervar;
otherName = "Omar";
otherName = 1000;
othervar = 123;
othervar = true;
console.log(" ".concat(otherName, " ").concat(othervar));
