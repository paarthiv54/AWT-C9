let Person1={
    firstname:"Paarthiv",
    lastname:"Ramaraju"
};

let Person2={
    age:20
};

console.log(Person2.firstname);
Person2.__proto__=Person1;
console.log(Person2.firstname);

Object.setPrototypeOf(Person2,Person1);
console.log(Person2.firstname);
console.log(Person2.lastname);
console.log(Person2.age);

// Constructor function for a Person object
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the Person prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Creating an instance of Person
let paarthiv = new Person("Paarthiv", 20);
paarthiv.greet();