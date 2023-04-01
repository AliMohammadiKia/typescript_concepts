const items: Map<string, number> = new Map<string, number>();
items.set("key1", 123);
items.set("key2", 555);
items.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

const userScores: Set<number> = new Set<number>();
userScores.add(22);
userScores.add(24);
