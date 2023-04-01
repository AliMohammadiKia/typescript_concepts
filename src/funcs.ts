function calculateDiscount(amount: number, discount: number): number {
  if (amount <= 0) {
    return amount;
  }
  return amount * ((100 - discount) / 100);
}

let priceAfterDiscount: number = calculateDiscount(100_000, 10);
// console.log({ priceAfterDiscount });

const calculateDiscount2 = (amount: number, discount: number): number => {
  if (amount <= 0) {
    return amount;
  }
  return amount * ((100 - discount) / 100);
};

let priceAfterDiscount2: number = calculateDiscount(100_000, 15);
// console.log({ priceAfterDiscount2 });

function sumNumbers(...numbers: number[]): number {
  return numbers.reduce((total, current) => total + current, 0);
}

let sumScores: number = sumNumbers(18, 20, 19);
console.log({ sumScores });
