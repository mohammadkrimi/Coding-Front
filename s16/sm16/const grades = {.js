const grades = {
    Alice: 90,
    // Bob: 58,
    // Charlie: 95,
}

 const topStudent = {
    name: "" ,
    grade: 0
 }
 Object.entries(grades).forEach((item) => {
    console.log(item)
    // [ALICE,90]
    if (item[1] > topStudent.grade ){
        topStudent.name = item[0]
        topStudent.grade = item[1]
    }
 })
 console.log(topStudent.name)


 const products = {
  shirt: 20,
  pants: 40,
  shoes: 60
};

let totalProducts = 0 ;

Object.values(products).forEach((num) =>{
    totalProducts = totalProducts + num
})
console.log(totalProducts)

const cars = {
  bmw: { price: 50000, inStock: 4 },
  toyota: { price: 30000, inStock: 10 },
  tesla: { price: 70000, inStock: 2 },
  ford: { price: 25000, inStock: 8 }
}

console.log(cars.bmw.price * cars.bmw.inStock)

let totalWorth = 0
Object.values(cars).forEach((car) => {
    totalWorth = totalWorth + (car.price * car.inStock)
})
console.log(totalWorth)


const carNames = Object.keys(cars);
let maxCar = carNames[0];

carNames.forEach(name => {
  if (cars[name].inStock > cars[maxCar].inStock) {
    maxCar = name;
  }
});

console.log(maxCar)
cars[maxCar].price * 0.9;
console.log(cars[maxCar].price);