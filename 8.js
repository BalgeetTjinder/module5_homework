let map = new Map([
    ["name", "John"],
    ["age", 25],
    ["city", "New York"]
  ]);
  
  for (let [key, value] of map) {
    console.log(`Ключ - ${key}, значение - ${value}`);
  }