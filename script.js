//my first js code
//document.querySelector('h1').style.color='blue';
//let name='aya'; //name cant be a reserved keyword
//console.log(name);
//console.error('test'); //to controll from inspect browseer
//alert("hello");
//console.error('this is an error');
//let, const
let age = 30;
age = 50;
console.log(age);
const name = 'aya'; //string
const people= 10; //number
const isCold = true; //boolean
const x = null; //var but there is nothing in it
const y = undefined;  let z;

console.log(typeof x);

//template string
console.log('my name is ${name}');
const s='i love me';
console.log(s.length);
console.log(s.split(''));

//array
const fruits = ['apples', 4,'oranges', 'pears', false];
console.log(fruits);
//for
for (let i=0; i<10; i++){
    console.log(i);
}
//while
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}
