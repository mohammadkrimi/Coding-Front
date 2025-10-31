// console.log("start");

// setTimeout(() => {
//   console.log("between");
// }, 5000);

// console.log("after");

// const items = [1, 2, 3, 4, 5];
// console.log("start");

// setTimeout(() => {
//   items.forEach((item) => {
//     console.log(item);
//   });
// }, 5000);

// items.forEach((item, index) => {
//   setTimeout(() => {
//     console.log(item);
//   }, 5000 + (index * 1000));
// });

// console.log("after");

// EGG
// const CONFIG = {
//   soft: 4,
//   medium: 6,
//   hard: 10,
// };

// const startEggReminder = (cookType) => {
//   if (!CONFIG[cookType]) return;

//   const cookDuration = CONFIG[cookType] * 1000 * 60;
//   console.log("You have to wait", CONFIG[cookType], "minutes");

//   setTimeout(() => {
//     alert("Your Eggs are ready");
//   }, cookDuration);
// };

// Traffic light
// const CONFIG = {
//   purple: 45,
//   blue: 25,
// };

// let sec = 0;
// let counter = 0;

// const updateLightColor = (color) => {
//   const lightElement = document.getElementById("light");
//   lightElement.style.background = color;
// };

// const updateLightRemaining = (seconds) => {
//   const lightElement = document.getElementById("light");
//   lightElement.innerText = seconds;
// };

// const remainingTimer = () => {
//   setTimeout(() => {
//     sec = sec - 1;
//     updateLightRemaining(sec);
//     if (sec > 1) {
//       remainingTimer();
//     }
//   }, 1000);
// };

// const trafficLight = () => {
//   const currentColor = Object.keys(CONFIG)[counter];
//   const currentWaitDuration = CONFIG[currentColor];

//   sec = currentWaitDuration;

//   updateLightColor(currentColor);
//   updateLightRemaining(sec);
//   remainingTimer();

//   setTimeout(() => {
//     counter = (counter + 1) % Object.keys(CONFIG).length;
//     trafficLight();
//   }, currentWaitDuration * 1000);
// };

// trafficLight();

// const interval1 = setInterval(() => {
//   console.log("here");
// }, 1000);

// setTimeout(() => {
//   clearInterval(interval1);
// }, 2000);

// const updateDisplay = (text) => {
//   document.getElementById("display").innerText = text;
// };

// const showCurrentTime = () => {
//   const now = new Date();
//   const hours = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();

//   if (minutes < 10) minutes = "0" + minutes;
//   if (seconds < 10) seconds = "0" + seconds;

//   updateDisplay(hours + ":" + minutes + ":" + seconds);
// };

// setInterval(showCurrentTime, 1000);

const devices = [
  { name: "Fridge", usage: 100 },
  { name: "TV", usage: 50 },
  { name: "Laptop", usage: 70 },
  { name: "Lamp", usage: 30 },
];

let count = 0;
let totalUsage = 0;
const interval = setInterval(() => {
  const usage = devices.reduce((acc, cur) => {
    console.log(cur);
    return acc + cur.usage;
  }, 0);

  console.log(`${count + 1}s: Power used this tick = ${usage}W`);

  count += 1;
  totalUsage += usage;
  if (count === 5) {
    console.log(`⚡ Total power used: ${totalUsage}W`);
    clearInterval(interval);
  }
}, 1000);
