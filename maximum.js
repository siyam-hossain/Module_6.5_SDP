var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const noDuplicates = new Set(numbers);


const maximum = Math.max(...noDuplicates);

console.log(maximum);