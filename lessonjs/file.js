const x = 10; // === matches the data
if( x == 5)    // or||  and &&
{
   console.log('x is 10') ;
}else{
    console.log('x is not 10') ; 
}
// ternary operator (var based on condition)
const color = x > 5 ? 'red' : 'green';
console.log(color); //? then   : else

//functions
function addNums(num1, num2){
    console.log(num1 + num2);}
addNums(5, 66);

//object construction
function Person(firstName, lastName ){
    this.firstName = firstName;
    this.lastName = lastName ;
}
Person.prototype.getlastName = function(){
    return `${this.lastName}`;
}

const person1 = new Person('aya', 'raki');
const person2 = new Person('dida', 'bon');
console.log(person1);
console.log(person2.lastName);
console.log(person2.getlastName());

//classes 
class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
const mycar = new Car("toyota", 2005);
console.log(mycar);