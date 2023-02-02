let arr = [1, 2, 3, 4, 5, 0, null];

let even = 0;
let odd = 0;
let zero = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    zero++;
  } else if (arr[i] % 2 === 0) {
    even++;
  } else {
    odd++;
  }  
}  
console.log(`Четных: ${even}, Нечетных: ${odd}, Нулей: ${zero}`);