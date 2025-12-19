 

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

//  ۱. یک آرایه جدید بسازید که فقط توش اسم افراد باشه
//  ۲. یک آرایه جدید بسازید که توش اسم و سن و شغل آدما، به صورت جمله‌ای باشه
//  مثلا: 'Jasmine is a 33 year old HR'
//  ۳. آرایه‌ای از افراد بالای ۳۰ سال بسازید
//  ۴. لیستی از افرادی که Engineer هستند بسازید

//  console.log(
//      people.map((person) => {
//          return person.name;
//      })
//  );

//  const personName = (person) => {
//      return person.name
//  }

//  console.log(people.map(personName));

//  const peopleName = people.map(person => person.name)
//  console.log(peopleName);

//   ----------------------------------

//  console.log(
//      people.map((person) => {
//          return person.name+ " " +"is a "+ person.age+ " years old " + person.job;
//      })
//  );

//  const peopleInfo = people.map(person => {
//      return person.name + "is a "+ person.age + " years old " + person.job
//  });
//  console.log(peopleInfo);

//    ----------------------------

//   const overthirty = (person) => {
//      return person.age >= 30

//   };
//   console.log(people.filter(overthirty));
 
//   const agePeopel = people.filter(person => {
//      return person.age >= 30
//   });

//   console.log(agePeopel);

//   const over30  = people.filter(person => person.age >= 30)
//   console.log(over30);
  
//    ------------------------------

//  peopleJob = people.filter(person => person.job === "Engineer")
//  console.log(peopleJob)


//  peopleJob =  people.filter(person => {
//      return person.job === "Engineer"
//  })

//  console.log(peopleJob);


//  console.log( 
//      people.filter((person) => {
//          return person.job === "Engineer"
//      })

//  );
//  ----------------------------------

//  const lijn  = people.length
//  let avrageAge = 0;

//  people.forEach((person) => {
//      avrageAge = avrageAge + person.age
    
//  });

//  console.log(avrageAge);
//  avrageAge = avrageAge / lijn
//  avrageAge

//  const lijn = people.length
//  let aveAge = 0;
//  people.forEach((person) => {
//      aveAge = aveAge + person.age
//  })
//  console.log(aveAge);
//  const avrageAge = aveAge / lijn
//  console.log(avrageAge);
//  _________________________________

// const jobCounter = {} ;
// people.forEach (person => {
//     const job = person.job;
//     if (jobCounter[job]) {
//         jobCounter[job] += 1 ;
//     } else {
//         jobCounter[job ] = 1 ;
//     }
// });
// console.log(jobCounter);
// ======================
// const jobLijn = people.length
// let aveAge = 0;

// people.forEach ((person) => {
//     aveAge = aveAge + person.age 
// });
// console.log(aveAge);
// averageAge  = aveAge / jobLijn
// console.log(averageAge);

// ====================

// const jobCounter = {} ;
//  people.forEach (person => {
//      const job = person.job;
//      if (jobCounter[job]) {
//          jobCounter[job] += 1 ;
//      } else {
//          jobCounter[job ] = 1 ;
//      }
//  });
//  console.log(jobCounter);

// ===================??\
// const jobCounter = {};
// people.forEach((person) => {
//     if(jobCounter[person.job]){
//         jobCounter[person.job] += 1;

//     }else{
//         jobCounter[person.job] = 1
//     }
// })
// console.log(jobCounter);

// ======================
// const jobCounter = {}
// people.forEach ((person ) => {
//     if (!jobCounter[person.job]) {
//         jobCounter[person.job] = 0 
        
//     }
//     jobCounter[person.job] = jobCounter[person.job] + 1;
// })
// console.log(jobCounter);
// =====================
// jobcount = []
// people.forEach((person) => {
//     if (!jobcount.includes(person.job)) {
//         jobcount.push(person.job)
//     }
// })
// console.log(jobcount);
// -----------------------


//  const uniqueJobs = []
//  people.forEach((person) => {
//     if (!uniqueJobs.includes(person.job)) {
//         uniqueJobs.push(person.job)


        
//     }
//  });
//  console.log(uniqueJobs.length);
 

// ۱. بر اساس سن هر کدوم از آدما، سطح سینیور بودنشون رو مشخص کنین و به لیست آدما اضافه کنین.
// زیر ۳۰ سال: junior
// بین ۳۰ تا ۴۰: min
// بالای ۴۰ سال: senior
// مثال
// [
//     { name: "Bob", age: 32, job: "Designer", level: "Mid" }
// ]

// ۲. میانگین سنی آدما تو هر شغلی رو بدست بیارین.
// ۳. پیدا کنین چه شغلی، سینیورهای بیشتری داره

const peopleWithLevel = people.map(person => {
  const levelOfPeople = { ...person }; 

  if (levelOfPeople.age < 30) {
    levelOfPeople.level = "Junior";
  } else if (levelOfPeople.age <= 40) {
    levelOfPeople.level = "Mid";
  } else {
    levelOfPeople.level = "Senior";
  }

  return levelOfPeople; 
});

console.log(peopleWithLevel);


const peopleWithLevel2 = people.map(person => ({
  ...person,
  level:
    person.age < 30
      ? "Junior"
      : person.age <= 40
      ? "Mid"
      : "Senior"
}));

console.log(peopleWithLevel);

