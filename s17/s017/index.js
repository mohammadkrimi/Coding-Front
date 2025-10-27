// ۲. میانگین سنی آدما تو هر شغلی رو بدست بیارین.

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

const calcAverage = (arrayOfNum) => {
  let sumOfArray = 0;
  arrayOfNum.forEach((item) => (sumOfArray = sumOfArray + item));
  const countOfArray = arrayOfNum.length;
  return sumOfArray / countOfArray;
};

const getAgeListOfJob = (job) => {
  return people
    .filter((person) => person.job === job)
    .map((person) => person.age);
};

// Solution 1
// const jobAndAges = {
//     Engineer: calcAverage(
//         getAgeListOfJob('Engineer')
//     ),
//     Designer: calcAverage(
//         getAgeListOfJob('Designer')
//     )
// }
// console.log(jobAndAges)

// Solution 2
// const jobAndAges = {}

// people.forEach((person) => {
//     if (!jobAndAges[person.job]) {
//         jobAndAges[person.job] = calcAverage(
//             getAgeListOfJob(person.job)
//         )
//     }
// })

// console.log(jobAndAges)

// Solution 3

// const jobAndAges = [
//     ['a'],
//     ['b']
// ]
// people.forEach((person) => {
//     // if (!jobAndAges[person.job]) {
//     //     jobAndAges[person.job] = []
//     // }
//     // jobAndAges[person.job].push(person.age)
//     if (!jobAndAges.some(group => group[0] === person.job)) {
//         jobAndAges.push([person.job])
//     }
// })

// console.log(jobAndAges)

const sumJobs = {};
const avgJobs = {};
people.forEach((person) => {
  if (!sumJobs[person.job]) {
    sumJobs[person.job] = [0, 0];
  }
  sumJobs[person.job][0] = sumJobs[person.job][0] + person.age;
  sumJobs[person.job][1] = sumJobs[person.job][1] + 1;

  avgJobs[person.job] = sumJobs[person.job][0] / sumJobs[person.job][1];
});
// console.log(avgJobs);

const person = {
  name: "Jay",
  age: 31,
};
console.log(person);

const personArr1 = Object.values(person);
console.log(personArr1);

const personArr2 = Object.keys(person);
console.log(personArr2);

const personArr3 = Object.entries(person);
console.log(personArr3);

const person2 = Object.fromEntries(personArr3);
console.log(person2);

console.log(Object.fromEntries([["a", 2], ["b"]]));

// const peopleObj = {
//   Alice: { name: "Alice", age: 25, job: "Engineer" },
//   Bob: { name: "Bob", age: 32, job: "Designer" },
//   Charlie: { name: "Charlie", age: 29, job: "Teacher" },
//   Diana: { name: "Diana", age: 24, job: "Developer" },
//   Ethan: { name: "Ethan", age: 35, job: "Manager" },
//   Fiona: { name: "Fiona", age: 28, job: "Engineer" },
//   George: { name: "George", age: 41, job: "CEO" },
//   Hannah: { name: "Hannah", age: 30, job: "Marketing" },
//   Ian: { name: "Ian", age: 27, job: "Support" },
//   Jasmine: { name: "Jasmine", age: 33, job: "HR" }
// };

const peopleArr = people.map((person) => {
  return [person.name, person];
});
console.log(peopleArr);
const peopleObj = Object.fromEntries(peopleArr);
console.log(peopleObj);

const grades = {
  Alice: 90,
  Bob: 85,
  Charlie: 95,
};

const products = {
  shirt: 20,
  pants: 40,
  shoes: 60,
};

const cars = {
  bmw: { price: 50000, inStock: 4 },
  toyota: { price: 30000, inStock: 10 },
  tesla: { price: 70000, inStock: 2 },
  ford: { price: 25000, inStock: 8 },
};

console.log(cars.bmw.price * cars.bmw.inStock);

let totalWorth = 0;
Object.values(cars).forEach((car) => {
  totalWorth = totalWorth + car.price * car.inStock;
});
console.log(totalWorth);

const mostInStockCar = {
  name: "",
  count: 0,
};
Object.entries(cars).forEach((car) => {
  if (mostInStockCar.count < car[1].inStock) {
    mostInStockCar.name = car[0];
    mostInStockCar.count = car[1].inStock;
  }
});
console.log(cars[mostInStockCar.name]);
cars[mostInStockCar.name].price = cars[mostInStockCar.name].price * 0.9;
console.log(cars);

// با فرض این که از هر ماشین نهایتا ۱۰ تا میشه داشت
// با فرض این که بابت هر فروش، ما ۲۰ درصد سود میکنیم
// پر فروش ترین ماشین رو پیدا کنید
// حساب کنید که برای این که موجودی این ماشین ۱۰ تا بشه، چقدر باید هزینه بکنیم
