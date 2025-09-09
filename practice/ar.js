function greet() {
    console.log("Hello, World!");
}

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(num => num * num);
console.log("Squares:", squares);

const evens = numbers.filter(num => num % 2 === 0);
console.log("Evens:", evens); // [2, 4, 6]

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum); // 21

const chained = numbers
  .map(num => num * num)      // square
  .filter(num => num > 10)    // keep > 10
  .reduce((acc, num) => acc + num, 0); // sum

console.log("Chained result:", chained);


let a="Kali linux";
console.log(a);