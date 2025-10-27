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
  { name: "Jasmine", age: 33, job: "HR" }
];


const names = people.map(person => person.name);
console.log(names);

const descriptions = people.map(person => `${person.name} is a ${person.age} year old ${person.job}`);
console.log(descriptions);

const over30 = people.filter(person => person.age > 30);
console.log(over30);

const engineers = people.filter(person => person.job === "Engineer");
console.log(engineers);

const jobs
pepole .forEach((person)=> {
  
  
});