import Mohi from 'Mohi';

let country = "iran"
console.log(country);
console.log(27+2+8);

let firstName = "Ali";
console.log("Ali")

let age = 18;
console.log(age)

const birthYear = 1997;
console.log(birthYear)

let age2 = 51;
console.log(age2)

let areYouOk = true;
console.log(areYouOk)


let A = 5;
let B = 10;
let X = B / A ; 
console.log(X);

let d = 10
d += 20;
console.log(d);

let myName = "Ali";
let myLastName = "Mohamadi";
let result = myName + " " + myLastName;
console.log(result);
 
let m = 2;
m -- ; 
console.log(m);

const nowYear = 2025;
const aliBirthYear = 1997;
const fatemehBirthYear = 2000;
const aliAge = nowYear - aliBirthYear;
const fatemehAge = nowYear - fatemehBirthYear;
console.log(fatemehAge);
console.log(aliAge);
console.log(aliAge < fatemehAge);

let result2 = 2;
result2 = result2 + 6 * 3;
console.log(result2);


const myName3 = "Mohi";
const year = 11;
const result3 = `I am ${myName3} web developer \n\ with ${year}of experience` ;
console.log(result3);

let w = "14"

if(w >= 15) {
    console.log("you can drive");   
} else {
    console.log("voy cant drive");
}


let book = "History";
let result6;

if (book == "Math Book"){
    console.log("Math Book");
} else if (book == "Economics"){
    console.log("Economics Book");
} else if (book == "History"){
    console.log("History Book");
}else{
    console.log("NOTHING");
}


if (book == "Math Book"){
   result6 = "Math Book";
} else if (book == "Economics"){
    result6 = "Economics Book";
} else if (book == "History"){
    result6 = "History Book";
}else{
    result6 = "NOTHING";
}

console.log(result6);

function showMyName(age , name){
    const timInfo="my is" + age + "and im" + name)
}
showMyName(showMyName(25, "tim"));

const add2 = function (a, b){
    return a + b;
}
console.log(add2(2, 8));

const ageReza = (birthday) =>{
    return 2050 - birthday;
}
const age = ageReza(1993);
console.log(age);
 








