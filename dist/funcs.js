function calculateDiscount(amount, discount) {
    if (amount <= 0) {
        return amount;
    }
    return amount * ((100 - discount) / 100);
}
let priceAfterDiscount = calculateDiscount(100000, 10);
// console.log({ priceAfterDiscount });
const calculateDiscount2 = (amount, discount) => {
    if (amount <= 0) {
        return amount;
    }
    return amount * ((100 - discount) / 100);
};
let priceAfterDiscount2 = calculateDiscount(100000, 15);
// console.log({ priceAfterDiscount2 });
function sumNumbers(...numbers) {
    return numbers.reduce((total, current) => total + current, 0);
}
let sumScores = sumNumbers(18, 20, 19);
console.log({ sumScores });
