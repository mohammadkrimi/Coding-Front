console.log("inside js");

// alert("hi");

// console.log("after hi");

const sayHello = () => {
  console.log("hi");
  console.log(document.getElementById("area"));
  document.getElementById("area").innerText = "changed by js";
  document.getElementById("area").style.color = "red";
  document.getElementById("area").style.backgroundColor = "black";
  // box-shadow => boxShadow
  // background-image => backgroundImage
  // border-radius => borderRadius
};

let handWithGoal = "";
// TODO: make it random
const shuffleGoal = () => {
  const rand = Math.random();
  if (rand > 0.5) {
    handWithGoal = "left";
  } else {
    handWithGoal = "right";
  }
  console.log(handWithGoal);
};

let counter = 0;

const updateResult = (result) => {
  document.getElementById("result").innerText = result;
};
const updateCount = (amount) => {
  counter = counter + amount;

  console.log(amount, counter);
  document.getElementById("count").innerText = "wins count: " + counter;
};

const openHand = (hand) => {
  let result = "You've LOST!";
  if (hand === handWithGoal) {
    result = "You've WON!!!";
    updateCount(1);
  }
  document.getElementById("resetButton").disabled = false;
  updateResult(result);
};

const reset = () => {
  shuffleGoal();
  updateResult("");
  document.getElementById("resetButton").disabled = true;
};

shuffleGoal();
