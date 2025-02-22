class Car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    age(x){
        return x-this.year;
    }
}

const date = new Date();
let year = date.getFullYear();

const myCar = new Car('Toyota', 2008);
const myCar1 = new Car(' Honda', 2010);

console.log(myCar.name+" "+myCar.year+" car age is :"+myCar.age(year));
console.log(myCar1.name+" "+myCar1.year);

