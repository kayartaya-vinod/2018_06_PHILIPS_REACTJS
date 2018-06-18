let hello = (name = 'friend', city = 'your city') =>
    `Hello ${name}, How's weather in ${city}?`;

let msg = hello('Suma', 'Vasco');
console.log(msg);

msg = hello('John');
console.log(msg);

msg = hello('Jane', 'Dallas');
console.log(msg);

msg = hello();
console.log(msg);

msg = hello(undefined, 'Bangalore');
console.log(msg);

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even_nums = nums.filter(num => num % 2 === 0);
let odd_nums = nums.filter(num => num % 2);
console.log(even_nums);
console.log(odd_nums);

let index = nums.findIndex(n => n === 6);
console.log('index of 6 is ', index);
