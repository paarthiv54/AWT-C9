//1.creating js object

const person = {};

// Add Properties
person.firstName = "Paar";
person.lastName = "thiv";
person.age = 20;
person.branch = "IT";

console.log(person.firstName+""+person.lastName+" is in the "+person.branch+" branch");


//2.creating js object using constructor function

function Person(firstname, lastname, age, branch) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.branch = branch;
}
const p2 = new Person("Karthik", "Sharma", 19, "IT");
console.log(p2.firstname+" "+p2.lastname+" is in the "+p2.branch+" branch");


//3.creating js obj with new keyword
const p3 = new Object()
    p3.firstName="jayanth";
    p3.lastName="ganji";
    p3.age=20;
    p3.branch="IT";
    console.log(p3.firstName+" "+p3.lastName+" is in the "+p3.branch);  