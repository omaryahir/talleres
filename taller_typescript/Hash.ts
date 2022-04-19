
// How to use or declare a Hash in typescript

interface IHash<Type> {
  [index: string]: Type;
}

let teamPoints: IHash<number> = {};

teamPoints['Python'] = 1;

console.log(teamPoints);

