const items = new Map();
items.set("key1", 123);
items.set("key2", 555);
items.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
const userScores = new Set();
userScores.add(22);
userScores.add(24);
