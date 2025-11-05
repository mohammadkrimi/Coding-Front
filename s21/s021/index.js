// const doSomething = () => {
//   console.log("inside");
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("hi");
//       resolve();
//     }, 2000);
//   });
// };

// doSomething().then(() => {
//   console.log("after");
// });

// const withoutPromise = () => {
//   setTimeout(() => {
//     console.log("hi");
//   }, 2000);
// };

// withoutPromise();
// console.log("after");

const doSomething = (isOk) => {
  console.log("inside");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hi");
      if (isOk) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
};

// doSomething(true)
//   .then(() => {
//     console.log("was ok");
//   })
//   .catch(() => {
//     console.log("Oops");
//   })
//   .finally(() => {
//     console.log("it's done!");
//   });

const flipCoin = (userPick) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      const coin = rand > 0.5 ? "head" : "tail";
      if (coin === userPick) {
        resolve("resolve param");
      } else {
        reject("reject param");
      }
    }, 2000);
  });
};

// flipCoin("head")
//   .then((res) => {
//     console.log("you won");
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("you lost");
//     console.log(err);
//   });

// const playGame = (pick) => {
//   flipCoin(pick)
//     .then(() => {
//       console.log("you won");
//     })
//     .catch(() => {
//       console.log("you lost");
//     });
// };

const boilWater = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ready");
    }, 2000);
  });
};
const brewTea = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ready");
    }, 3000);
  });
};

// boilWater()
//   .then(() => {
//     console.log("water is ready");
//     return brewTea();
//   })
//   .then(() => {
//     console.log("tea is ready");
//   });

const getData = () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      console.log("loaded");
      console.log(response);
      return response.json();
    })
    .then((result) => {
      console.log("result");
      console.log(result);
    });
};

// async/await
const flipDice = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.ceil(Math.random() * 6));
    }, 3000);
  });
};

const getDice = async () => {
  console.log("before");
  const num = await flipDice();
  console.log("after");
  console.log(num);
};

const playGame = async (pick) => {
  const result = await flipCoin(pick);
  console.log(result);
};

const getTea = async () => {
  const waterIsReady = await boilWater();
  console.log(waterIsReady);
  const teaIsReady = await brewTea();
  console.log(teaIsReady);
};

const getData2 = async () => {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
  } catch (error) {
    alert("something happened");
  }
};

const foo = async () => {
  const dice = await flipDice();
  const coin = await flipCoin("head");
  console.log(dice, coin);
};

// foo();

const parallel = () => {
  Promise.all([flipCoin("head"), flipDice()])
    .then((result) => {
      console.log("done");
      console.log(result);
    })
    .catch(() => {
      console.log("error");
    });
};

parallel();

const throwDice = () => {
  Promise.all([flipDice(), flipDice()]).then((res) => {
    console.log(res);
    if (res[0] === res[1]) {
      console.log("DOUBLE!!");
    }
  });
};

console.log([flipDice().then((res) => res), flipDice().then((res) => res)]);
throwDice();
