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


const peopleWithLevel = people.map(person => {
    let level = "";
    if (person.age < 30) level = "Junior";
    else if (person.age <= 40) level= "Mid"
    else level = "Senior"

    return {...person, level };
});

console.log("peopleWithLevel:", peopleWithLevel);

const jobAges = {};

peopleWithLevel.forEach(p => {
    if (!jobAges[p.job]) jobAges[p.job] = [];
    jobAges[p.job].push(p.age)
});

const avgAgePerJop = Object.entries (jobAges).map(([job, ages]) =>
    const sum = ages.reduce((a, b) => a+b, 0);
const avg = sum / ages.length; 

return {job, averageAge: avg.toFixed(1) };
});

console.log(avgAgePerJop)

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


const peopleWithLevel = people.map(person => {
  const level = person.age < 30 ? "Junior" : (person.age <= 40 ? "Mid" : "Senior");
  return { ...person, level };
});


const sumJobs = {};
const avgJobs = {};
people.forEach((person) => {
  if (!sumJobs[person.job]) sumJobs[person.job] = [0, 0, 0]; // [sum, count, avg]
  const x = sumJobs[person.job];
  x[0] += person.age;
  x[1] += 1;
  x[2] = x[0] / x[1];
  avgJobs[person.job] = x[2];
});
console.log(avgJobs);

