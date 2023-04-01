const getPrice = (price: number, format: boolean): string | number => {
  return format ? `${price} toman` : price;
};

const priceWithFormat: string = getPrice(200_000, true) as string;
const priceWithoutFormat: number = getPrice(500_000, false) as number;

console.log({
  priceWithFormat: priceWithFormat.concat(" AAA"),
  priceWithoutFormat,
});
