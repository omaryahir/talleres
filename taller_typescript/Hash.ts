
// How to use or declare a Hash in typescript

interface IHash<Type> {
  [index: string]: Type;
}

let teamPoints: IHash<number> = {};

teamPoints['Python'] = 1;

console.log(teamPoints);

if ('Python' in teamPoints) {
  console.log('Yep Python is in teamPoints');
}

if (!('Java' in teamPoints)) {
  console.log('Nop Java is not in teamPoints');
}


