/*

to install prompt-sync
1. npm install --save prompt-sync
2. npm install --save @types/prompt-sync
*/

import promptSync from "prompt-sync";
const prompt = promptSync();

const calculateA = (birthYear: number): number => {
    return new Date().getFullYear() - birthYear;
}

const birthYear = prompt('what is your birthYear ? ');
const age = calculateA(birthYear != null ? parseInt(birthYear.toString()) : 0);

function greetMe(userInfo: {name: string; age: number}): string {
    return ` ${userInfo.name}. It's nice to know that you are ${userInfo.age} years old`;
}

console.log(greetMe({name: "Omar", age: age}))

