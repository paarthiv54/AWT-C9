//Array destructuring

const numbers = [1, 2, 3, 4, 5];

const [first, second, , fourth, fifth] = numbers;

console.log(first);  
console.log(second); 
console.log(fourth);  



const arr = ['Hello', 'World!', 'This', 'is', 'JavaScript'];

const [a,b,...c] = arr;

console.log(a);
console.log(b);
console.log(c);
