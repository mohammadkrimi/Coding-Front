const lastName = "Izadfar";

let firstName = "Javid";
console.log(firstName);
firstName = "Jay";
console.log(firstName);

var age = 30;
console.log(age);
age = age + 1;
console.log(age);

const teacherName = firstName;
console.log(firstName);
console.log(teacherName);
firstName = "Javid";
console.log(firstName);
console.log(teacherName);

let myClass = {
  title: "CF 32",
  time: [6, 10],
};
console.log(myClass.title);
const AliClass = myClass;
console.log(AliClass.title);
myClass.title = "Coding Front";
console.log(myClass.title);
console.log(AliClass.title);

const person = {
  name: "Jay",
  lastName: "Izadfar",
};
console.log(person.name);
person.name = "Javid";
console.log(person.name);

console.log(myClass.title);
const HodaClass = { ...myClass };
console.log(HodaClass);
console.log(HodaClass.title);
myClass.title = "CF";
console.log(myClass.title);
console.log(HodaClass.title);

const numList1 = [1, 2, 3];
const numList2 = [...numList1];

numList1.forEach((item) => {
  console.log(item);
});

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

const peopleCount = people.length;
let totalAgeOfPeople = 0;

people.forEach((person) => {
  totalAgeOfPeople = totalAgeOfPeople + person.age;
});
console.log(totalAgeOfPeople);

const averageAge = totalAgeOfPeople / peopleCount;
console.log(averageAge);

// {
//     Engineer: 4,
//     CEO: 1,
//     HR: 2,
//     ....
// }

// Sol1
const jobs1 = {
  Engineer: people.filter((person) => person.job === "Engineer").length,
  Designer: people.filter((person) => person.job === "Designer").length,
  Teacher: people.filter((person) => person.job === "Teacher").length,
  Developer: people.filter((person) => person.job === "Developer").length,
  Manager: people.filter((person) => person.job === "Manager").length,
  CEO: people.filter((person) => person.job === "CEO").length,
  Marketing: people.filter((person) => person.job === "Marketing").length,
  Support: people.filter((person) => person.job === "Support").length,
  HR: people.filter((person) => person.job === "HR").length,
};
console.log(jobs1);

const getJobCount = (jobName) => {
  return people.filter((person) => person.job === jobName).length;
};
const jobs2 = {
  Engineer: getJobCount("Engineer"),
  Designer: getJobCount("Designer"),
  Teacher: getJobCount("Teacher"),
  Developer: getJobCount("Developer"),
  Manager: getJobCount("Manager"),
  CEO: getJobCount("CEO"),
  Marketing: getJobCount("Marketing"),
  Support: getJobCount("Support"),
  HR: getJobCount("HR"),
};
console.log(jobs2);

const job3 = {
  Engineer: 0,
  Designer: 0,
  Teacher: 0,
  Developer: 0,
  Manager: 0,
  CEO: 0,
  Marketing: 0,
  Support: 0,
  HR: 0,
};
people.forEach((person) => {
  if (person.job === "Engineer") {
    job3.Engineer = job3.Engineer + 1;
  } else if (person.job === "Designer") {
    job3.Designer = job3.Designer + 1;
  } else if (person.job === "Teacher") {
    job3.Teacher = job3.Teacher + 1;
  } else if (person.job === "Developer") {
    job3.Developer = job3.Developer + 1;
  } else if (person.job === "Manager") {
    job3.Manager = job3.Manager + 1;
  } else if (person.job === "CEO") {
    job3.CEO = job3.CEO + 1;
  } else if (person.job === "Marketing") {
    job3.Marketing = job3.Marketing + 1;
  } else if (person.job === "Support") {
    job3.Support = job3.Support + 1;
  } else if (person.job === "HR") {
    job3.HR = job3.HR + 1;
  }
});
console.log(job3);

const jobs4 = {
  Engineer: 0,
  Designer: 0,
  Teacher: 0,
  Developer: 0,
  Manager: 0,
  CEO: 0,
  Marketing: 0,
  Support: 0,
  HR: 0,
};
people.forEach((person) => {
  jobs4[person.job] = jobs4[person.job] + 1;
});
console.log(jobs4);

const jobs5 = {};
people.forEach((person) => {
  if (jobs5[person.job]) {
    jobs5[person.job] = jobs5[person.job] + 1;
  } else {
    jobs5[person.job] = 1;
  }
});
console.log(jobs5);

const jobs6 = {};
people.forEach((person) => {
  if (!jobs6[person.job]) {
    jobs6[person.job] = 0;
  }
  jobs6[person.job] = jobs6[person.job] + 1;
});
console.log(jobs6);

const arr = [];
console.log(arr);
arr[arr.length] = 1;
console.log(arr);
arr[arr.length] = 2;
console.log(arr);
arr.push(3);
console.log(arr);
arr.pop();
console.log(arr);

const uniqueJobs = [];
people.forEach((person) => {
  if (!uniqueJobs.includes(person.job)) {
    uniqueJobs.push(person.job);
  }
});
console.log(uniqueJobs);
