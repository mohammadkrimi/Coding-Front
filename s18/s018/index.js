console.log(Math.floor(2.1));
console.log(Math.ceil(2.1));
console.log(Math.round(2.6));

console.log(Math.random());

const getRandom1 = () => {
  return Math.floor(Math.random() * 10) + 1;
};

console.log(getRandom1());

const getRandom2 = () => {
  return Math.floor(Math.random() * 6) + 1;
};

console.log(getRandom2());

const getRandom4 = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(getRandom4(5, 20));

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

console.log(people[getRandom4(0, people.length - 1)]);

const groupA = [];
const groupB = [];
const MAX_GROUP_LENGTH = people.length / 2;

people.forEach((person) => {
  const shouldBeInA = !getRandom4(0, 1);
  const groupAHasEmptySeat = groupA.length < MAX_GROUP_LENGTH;
  const groupBHasEmptySeat = groupB.length < MAX_GROUP_LENGTH;
  if ((shouldBeInA && groupAHasEmptySeat) || !groupBHasEmptySeat) {
    groupA.push(person);
  } else {
    groupB.push(person);
  }
});
console.log(groupA, groupA.length);
console.log(groupB, groupB.length);

const now = new Date();
console.log(now);

// ISO Datetime String: '2025-10-22T16:35:29.000Z'

console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const then = new Date("2025-10-20");
console.log(then);
console.log(weekdays[then.getDay()]);

// internationalization
const i18n = new Intl.DateTimeFormat("fa-af").format();
console.log(i18n);
