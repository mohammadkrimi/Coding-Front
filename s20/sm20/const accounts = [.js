const accounts = [
  { name: "Alice", balance: 1000, rate: 2 },
  { name: "Bob", balance: 1500, rate: 1.5 },
  { name: "Charlie", balance: 2000, rate: 1 }
];

const round2 = n => Math.round(n * 100) / 100;

const months = 12;
let current = accounts.map(a => ({ ...a })); 
let month = 0;
let totalInterestPaid = 0;

const history = [];


const timer = setInterval(() => {
  month++;

  const result = current.reduce(
    (acc, acct) => {
      const interest = round2(acct.balance * (acct.rate / 100));
      const newBalance = round2(acct.balance + interest);

      acc.updated.push({ ...acct, balance: newBalance });
      acc.monthInterest = round2(acc.monthInterest + interest);
      acc.snapshot[acct.name] = newBalance;
      return acc;
    },
    { updated: [], monthInterest: 0, snapshot: {} }
  );

  current = result.updated;
  totalInterestPaid = round2(totalInterestPaid + result.monthInterest);
  history.push({
    month,
    balances: result.snapshot,
    monthInterest: result.monthInterest,
    totalInterestPaid
  });

  console.log(`Month ${month}`);
  console.table(
    current.map(({ name, balance }) => ({ Name: name, Balance: balance }))
  );
  console.log(
    `Bank paid this month: $${result.monthInterest.toFixed(
      2
    )} | Total so far: $${totalInterestPaid.toFixed(2)}`
  );

  if (month === months) {
    clearInterval(timer);
    console.log("=== FINAL ===");
    console.table(
      current.map(({ name, balance }) => ({ Name: name, Balance: balance }))
    );
    console.log(
      `Total interest the bank paid in 12 months: $${totalInterestPaid.toFixed(
        2
      )}`
    );
  }
}, 1000);