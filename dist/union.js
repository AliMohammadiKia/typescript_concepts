const getPrice = (price, format) => {
    return format ? `${price} toman` : price;
};
const priceWithFormat = getPrice(200000, true);
const priceWithoutFormat = getPrice(500000, false);
console.log({
    priceWithFormat: priceWithFormat.concat(" AAA"),
    priceWithoutFormat,
});
