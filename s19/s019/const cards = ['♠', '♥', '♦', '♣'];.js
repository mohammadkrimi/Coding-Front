const cards = ['♠', '♥', '♦', '♣'];
const ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
const arr = []

cards.map(card => {
    ranks.map(rank =>{
        arr.push(rank + card);
    })
})

const  shuffeld = [];
function shuffel(cards) {
    if (cards.length === 0) return;
    const randomIndex = Math.floor(Math.random() * cards.length);
    const [card] = cards.splice(randomIndex, 1)
    shuffeld.push(card);
    shuffel(cards);
}
shuffel([...arr])

const players = [[], [], [], []];
let turn = 0;

shuffled.forEach(card => {
  players[turn].push(card);
  turn = (turn + 1) % 4;
});

players.forEach((hand, idx) =>{
      console.log(`Player ${idx + 1} (${hand.length} cards):`, hand.join(' '));
})

