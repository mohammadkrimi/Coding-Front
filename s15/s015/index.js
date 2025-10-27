// hello world

const myFirstVar = "jay";

// string
const myName = "Javid";
const myLastName = "Izadfar";
const myNickName = "it's jay";

// number
const myAge = 31;

// boolean
const isMale = true;
const isSingle = false;

const one = 1;
const two = 2;

const three = one + two;
console.log(three);

console.log(two - one);
console.log(myAge / two);
console.log(myAge * myAge);
console.log(one / two);
console.log(-256 / 0);

const myFullName = myName + " " + myLastName;
console.log(myFullName);
console.log(myFullName - myLastName);
// NaN = Not a Number

const four = "4";
console.log(four + one);
console.log(four - one);
console.log(four * one);
console.log(four / one);
console.log(one * four);
console.log(one * four);
console.log(one - four);
console.log(one + four);

console.log(isMale + two);
console.log(isMale + four);
console.log(0.1 + 0.2);

// And
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Or
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// 0 ~ false
// 1 or any other number ~ true

// empty string ~ false
// filled string ~ true

console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!myName);

const calc = (a, b) => {
  console.log("here");
  console.log("myName", myName);
  console.log("a", a);
  console.log("b", b);
  const sum = a + b;
  return sum;
  console.log("not running");
};

const result = calc(1, 2);
console.log(result);
// console.log(sum);

// console.log( 1 = 2 )

// console.log(myName = 'jay')

// = assignment
// == === compare
console.log(1 === 2);
console.log(myName === "Javid");
console.log(1 === "1");
console.log(1 == "1");

if (isSingle) {
  console.log("yes");
} else {
  console.log("no");
}

if (myName === "Javid") {
  console.log("Hi");
} else if (myName === "Ali") {
  console.log("Hello");
} else {
  console.log("Who are you?");
}

// meet('Javid') -> 'Hello, Javid'
// meet('Reza') -> 'I don't know any Reza'

console.log(0 % 2);
console.log(1 % 2);
console.log(2 % 2);
console.log(3 % 2);
console.log(4 % 2);
console.log(5 % 2);

// isEven(8) -> true isEven(13) -> false

const isEven = (num) => {
  return !(num % 2);
};

const isOdd = (num) => !isEven(num);

console.log(isEven(8));
console.log(isEven(13));
console.log(isEven(5169864616857546318));
console.log(isOdd(12));
console.log(isOdd(7));

// Array
const students = ["Ali", "Bahar", "Hanieh", "Mohammad"];
// {
//     0: 'Ali',
//     1: 'Bahar'
// }
console.log(students[0]);
console.log(students.length);
console.log(students[students.length - 1]);
console.log(students[4]);

// Object
const student = {
  name: "Ali",
  lastName: "Taheri",
};
console.log(student["name"]);
console.log(student.name);

const foo = undefined;
console.log(foo);

const bar = "";
console.log(bar);

const buz = null;
console.log(buz);

console.log(students.includes("Jay"));
console.log(students.includes("Ali"));

const studentsObj = [
  {
    name: "Fariba",
    family: "Khazaei",
    isFemale: true,
  },
  {
    name: "Ali",
    family: "Mirrostami",
    isFemale: false,
  },
  {
    name: "Hanie",
    family: "Rahimi",
    isFemale: true,
  },
];

console.log(
  studentsObj.some((student) => {
    return student.name === "Fariba";
  })
);

console.log(
  studentsObj.map((student) => {
    return student.name;
  })
);

console.log(
  studentsObj.filter((student) => {
    return !student.isFemale;
  })
);

console.log(
  studentsObj
    .filter((student) => {
      return student.isFemale;
    })
    .map((femaleStudent) => {
      return femaleStudent.name;
    })
);
