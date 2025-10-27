console.log(Math.floor(2.1));
console.log(Math.ceil(2.1));
console.log(Math.round(2.6));
console.log(Math.random());


const number = () =>{
    return Math.floor(Math.random() * 10 + 1)

}

console.log(number());

const number2 = () => {
    return Math.random() * 10 + 1
}
console.log(number2());


const dice = () => {
    return Math.floor(Math.random() * 6 ) + 1
}
console.log(dice())

const number3 = (max) => {
    return Math.floor(Math.random() * max) + 1
}

console.log(number3(6));

const number4 = (min , max) => {
    return Math.floor(Math.random() *(max - min +1)) + 1
}

console.log(number4(6, 20));

const people = [
  { name: "Alice", age: 25, job: "Engineer" },
  { name: "Bob", age: 32, job: "Designer" },
  { name: "Charlie", age: 29, job: "Teacher" },
  { name: "Diana", age: 24, job: "Developer" },
  { name: "Ethan", age: 35, job: "Manager" },
  { name: "Fiona", age: 28, job: "Engineer" },
  { name: "George", age: 41, job: "CEO" },
  { name: "Hannah", age: 30, job: "Marketing" },
  { name: "Ian", age: 27, job: "Support" },
  { name: "Jasmine", age: 33, job: "HR" },
];

console.log(
    people[number4(0, people.length-1)]
);


const groupA = []
const groupB = []
const MAX_GROUP_LENGTH = people.length / 2


people.forEach((person) =>{
    const shouldBeInA = !number4(0, 1)
    const groupAHasEmptySeats = groupA.length < MAX_GROUP_LENGTH ;
    const groupBHasEmptySeats = groupB.length < MAX_GROUP_LENGTH ;
    if ((shouldBeInA && groupAHasEmptySeats) || !groupBHasEmptySeats){
        groupA.push(person)
    } else {
        groupB.push(person)
    }
})
console.log(groupA, groupA.length)
console.log(groupB, groupB.length);

const now = new Date()
console.log(now)


console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const today = new Date();
console.log(today) 
console.log(days[today.getDay()]);


const i18n = new Intl.DateTimeFormat("fa").format()
console.log(i18n);


