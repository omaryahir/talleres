/*
Run this using:
tsc types-objects-array.ts

or 

ts-node types-objects-array.ts

You wll see the issue related to the type by inference firstName is string.
*/


const user : {
    name: string,
    age: number,
    isMarried: boolean,
    hobbies: string[]
} = {
    name: 'John',
    age: 28,
    isMarried: false,
    hobbies: ['Football', 'Guitar']
};

const users : {
    name: string,
    age: number,
    isMarried: boolean,
    hobbies: string[]
}[] = [user];

console.log(users);

// A better way to do the above things is this...

type User = {
    name: string,
    age: number,
    isMarried: boolean,
    hobbies: string[]
}

const newuser: User = {
    name: 'John',
    age: 28,
    isMarried: false,
    hobbies: ['Football', 'Guitar']
};

const newusers: User[] = [newuser];

console.log(newusers);


// Optionals Attributes

type User2 = {
    name: string,
    age: number,
    isMarried: boolean,
    hobbies: string[],
    gender?: string // <-- this is not required is optional
}

const user2: User2 = {
    name: 'John',
    age: 28,
    isMarried: false,
    hobbies: ['Football', 'Guitar']
};

const users2: User2[] = [user2];

console.log(users2);

