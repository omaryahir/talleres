
let personName: string = 'Omar';
let personComputers: number = 3;

interface Person {
    name: string;
    computers: number;
}

let Omar: Person = {
    name: personName,
    computers: personComputers
}

console.log(Omar);

/*
Output:

$ npx ts-node basic.ts 
{ name: 'Omar', computers: 3 }

*/
