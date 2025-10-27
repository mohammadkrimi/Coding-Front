
// // function ageFn(newAge){
// //     const myNewAge = newAge + 3;
// //     return myNewAge;
// // }

// // function salaryFn(newSalary){
// //     const myNewSalary = newSalary + 200;
// //     return myNewSalary
    
// // }

// // function myInfo(myAge, mySalay){
// //     const myNewAge = ageFn(myAge)
// //     const myNewSalay = salaryFn(mySalay)
// //     const result = "my age is " + myNewAge + " and my salary is " + myNewSalay;
// //     return result;
// // }

// // console.log(myInfo(18, 700));
// // console.log(myInfo(20,4244));

// let car1 = "BMW"
// let car2 = "KIA"
// let car3 = "TOYOTA"
// let car4 = "FORD"
// let car5 = "BENZ"

// // const cars = [ "BMW" , "KIA" , "TOYOTA" , "FORD" , "BENZ" ];
// // console.log(cars);
// // console.log(cars[0]);
// // console.log(cars.length);
// // console.log(cars[4]);

// // cars[2] = "Tesla"
// // console.log(cars);


// const list = ["WWW" , "YYY" , "RRR"]
// // console.log(list);
// // console.log(list[3][2]);


// // console.log(cars.toString());
// // console.log(cars.join(" - "));
// // console.log(cars.pop());
// // console.log(cars.pop());
// // console.log(cars);
// // let t = cars.pop();
// // console.log(t);
// // console.log(cars);


// // cars.push("ytr");
// // console.log(cars);

// const cars2 = [ "BMW" , "KIA" , "TOYOTA" , "FORD" , "BENZ" ];

// cars2.shift();
// console.log(cars2.shift());
// console.log(cars2);

// cars2.unshift("HINDA")
// console.log(cars2);
// cars2[cars2.length] = "audi";
// console.log(cars2);



// let result = cars2.concat(list);
// console.log(result);

const car = {
    name :  "BMW", 
    color : "wihte",
    models : ["m1" , "x2" , "x3" , "i7"],

    start : function(){
      let result =  this.name + " roshan shod"
      return result;
    }
}

const colorSet = "color"

console.log(car);
console.log(car.color);
console.log(car["color"]);
console.log(car[colorSet]);
console.log(car.colorSet);
console.log(car.models);

console.log(car.models[2 ]);
console.log(car.start());
console.log(car["start"]());

