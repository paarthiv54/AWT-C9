// Object destructuring 

const person = {
    name: 'Paarthiv',
    age: 20,
    branch: 'IT'
};

const { name, age, branch } = person;

console.log(person.name); 
console.log(age); 
console.log(branch); 


const {name:n,age:a,branch:brn} = person;

console.log(n);
console.log(a);
console.log(brn);


