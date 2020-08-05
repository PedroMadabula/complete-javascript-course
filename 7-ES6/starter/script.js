/*
//Lecture: let and const

// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith'; //constant
let age6 = 23; //can change

name6 = 'Jane Miller';
console.log(name6);


// ES5
function driversLicense5(passedTest) {

    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ", born in " + yearOfBirth + ", is now officially allowed to drive a car.");
}

driversLicense5(true);

//ES6
function driversLicense6(passedTest) {

    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'John';
    }
    console.log(firstName + ", born in " + yearOfBirth + ", is now officially allowed to drive a car.");
}

driversLicense6(true);

*/

/*
//Lecture: Blocks and IIFEs

//ES6
{
    let a = 1;
    let b = 2;
    var c = 3;
}

console.log(c);
*/

//Lecture: Strings 

let firstName = "john";
let lastName = "Smith";
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

//ES5 
console.log("This is " + firstName + " " + lastName + ", He was born in " + yearOfBirth + ". Today, he is " + calcAge(yearOfBirth) + " years old.");

//ES6
console.log(`This is ${firstName}${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`)