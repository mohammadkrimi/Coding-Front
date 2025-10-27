const suits = ["SPADE", "HEART", "DIAMOND", "CLUB"];
const cards = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

const deck = [];
for (let suit of suits) {
  for (let card of cards) {
    deck.push([suit, card]);
  }
}

// console.log(deck);
const changeOrder = (arry) => {
  arry.forEach((card, i) => {
    let changeIndex = 0;

    // A random number between i and arry.length-1 => (arry.length - 1) - i + 1 = (arry.length - i)
    changeIndex = Math.floor(Math.random() * (arry.length - i) + i);
    let changeItem = card;
    arry[i] = arry[changeIndex];
    arry[changeIndex] = changeItem;
  });
  return arry;
};

const finalCards = (cardsDeck) => {
  const newCards = [[], [], [], []];
  const allCards = changeOrder([...cardsDeck]);
  allCards.forEach((card, i) => {
    newCards[i % 4].push(card);
    // if(i % 4 === 0){
    //     newCards[0].push(card)
    // }else if(i % 4 === 1){
    //     newCards[1].push(card)
    // }else if(i % 4 === 2){
    //     newCards[2].push(card)
    // }else if(i % 4 === 3){
    //     newCards[3].push(card)
    // }
  });
  return newCards;
  //   return [
  //     allCards.filter((_, i) => i % 4 === 0),
  //     allCards.filter((_, i) => i % 4 === 1),
  //     allCards.filter((_, i) => i % 4 === 2),
  //     allCards.filter((_, i) => i % 4 === 3),
  //   ];
};

console.log(finalCards(deck));
