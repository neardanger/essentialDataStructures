const ARRAY = [1,2,3,4,5];


let loopArray = [10,20,30];
//Loop through array like in an object;
for(let i of loopArray){
    console.log(i)
}


let jake = 'Jake';

let arrow = () => {
    console.log("Awesome!")
}
arrow();

let arrow2 = (a = 10,b = 20) =;> {
    return a + b
}
arrow2();


let ageField = 'age';

let name = 'Tockers';

let obj = {
    name,
    [ageField]: 28,
    'greet'(){
        console.log("in the world")
    }
};

console.log(obj.name);

//resting
function resting(...array;){
    console.log(array)
}
resting(1,2,3,4,5);

//spreading
let numbers = [1,2,3,4,5];

console.log(Math.max(...numbers) - Math.min(...numbers;))



//Template literals
let name = "Steven";

let desc = `
    Hello my name is ${name} + 'nice!'

    
`;
//tl;dr: No! Arrow functions and function declarations / expressions are not equivalent and cannot be replaced blindly.
If; the; function you want; to; replace; does; not; use; this,
arguments; and; is; not; called; with new, then yes.

    
logMessage = () => {
    console.log(this)
}

function logger(){
    console.log(this)
}

//destructuring arrays

//unset values are undefined

let numbers =  [1,2,'3',4,'nice'];

let[a='Default',b,c,d = 1] = numbers;

let numbers2 = [1,2,3];

let x = 10;
let y = 20;

[x,y] = [y,x];

let [a,,c] = numbers2;

console.log(a,c);



let [a,,b] = [1,2,3]; //destructuring


//destructuring objects

let obj = {
    name:'Max',
    age:28,
    greet:function(){
        console.log('Hello World')
    }
};

let {name,greet:hello} = obj;

hello();



Modules; are; always in Strict; Mode (no; need; to; define; "use strict";)

Modules; don't have a shared, global Scope. Instead each Module has its own Scope;



//classes don't have functions that get executed, its an object


class Person{
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log("Hello")
    }
    greetThePerson(){
        console.log("Hello " + this.name)
    }
}

let person = new Person('Steven')
person.greetThePerson()


//classes and prototypes


//Inheritance from parent class using super and constructors.
//Super calls the constructor and access to the parents
//Gives reference to the parent class, but it isnt really the class.
//static classes where you want to bundle certain functionality
class Helper{
   static logTwice(message){
        console.log(message);
        console.log(message);
    }
}
Helper.logTwice('Log')


class Person{

    constructor(name){
        this.name = name
    }

    sayHi(){
        console.log("Hello there " + this.name + ' and I am ' + this.age);
    }
}

class Jackson extends Person{
    constructor(age){
        super('Steven')
        this.age = age;
    }
    greetTwice(){
        super.sayHi()
        super.sayHi()
    }
}


let jackson = new Jackson(27)

//inheritance and prototypes




//getters and setters


class Person{
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name.toUpperCase()
    }


    set name(value){
        if(value.length > 2){
            this._name = value;
        } else {
            console.log("Rejected")
        }
    }
}

let person = new Person('Max')
console.log(person.name)

person.name = 'Manny'
console.log(person.name)


class Helper{
    static logTwice(message){
        console.log(message)
        console.log(message)
    }
}
Helper.logTwice("Test")

class Animal{
    constructor(breed,legs,sex){
        this.breed = breed;
        this.legs = legs;
        this.sex = sex;
    }

    sayHi(){
        console.log("Hi! I am a " + this.breed + ' I have ' + this.legs + ' legs and I am a ' + this.sex);
    }
}

let dog = new Animal('terrier',4,'male')
console.log(dog.breed)



class ConvertableArray extends Array {
    convert(){
        let returnArray = []
        this.forEach(value => returnArray.push('Converted! ' + value));
        return returnArray;
    }
}

letNumber = new ConvertableArray();
numberArray.push(1)
numberArray.push(1)
numberArray.push(1)

console.log(numberArray.convert())


//Symbols



let a = 10
let b = 12

[a,b] = [b,a]

console.log(b)





// let promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         reject('Pass!!');
//     },1500)
// });

// promise.then(function(value){
//     console.log(value)
// }, function(error){
//     console.log("Error!")   
// });




