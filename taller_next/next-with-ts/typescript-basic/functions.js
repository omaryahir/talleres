var calculateA = function (birthYear) {
    return new Date().getFullYear() - birthYear;
};
var birthYear = prompt('what is your birthYear ?');
var age = calculateA(birthYear != null ? parseInt(birthYear.toString()) : 0);
console.log(age);
