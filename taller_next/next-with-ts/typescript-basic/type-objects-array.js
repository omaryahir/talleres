/*
Run this using:
tsc types-objects-array.ts

You wll see the issue related to the type by inference firstName is string.
*/
var user = {
    name: 'John',
    age: 28,
    isMarried: false,
    hobbies: ['Football', 'Guitar']
};
var users = [user];
console.log(users);
var newuser = {
    name: 'John',
    age: 28,
    isMarried: false,
    hobbies: ['Football', 'Guitar']
};
var newusers = [newuser];
console.log(newusers);
var user2 = {
    name: 'John',
    age: 28,
    isMarried: false,
    hobbies: ['Football', 'Guitar']
};
var users2 = [user2];
console.log(users2);
