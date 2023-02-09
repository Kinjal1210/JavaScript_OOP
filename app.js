console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies){
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }  
      
   addHobby(hobby){
    this.hobbies.push(hobby);
    }

   removeHobby(hobby){
    this.hobbies = this.hobbies.filter(elements => elements !== hobby);
    }

   greetings(){ 
    console.log(`Hello fellow person!`);
    }
}
 const testPerson = new Person("Riddhi", 1, "Indiana"); 

 console.log(testPerson);


//Exercise 2 Section
 console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
    constructor(name, pets,residence, hobbies){
        super(name, pets, residence, hobbies);
        this.occupation = "Full Stack Web Developer";
    }
    greetings(){
        console.log(`Hello, world`);
    }
    
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

const tPerson = new Person("Kunjal", 1, "Indiana"[ "Playing"]); 

console.log(tPerson.hobbies);

let myCoder = new Coder("Kunjal", 0, "Indiana", ["reading", "Playing"]);

console.log(myCoder);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculater {
    constructor(){
     this.return = 0;
    }

    add(a,b) {
        this.result = a + b;
        return this.result;

    }
    subtract(a, b) {
        this.result = a - b;
        return this.result;


    }
    multiply(a, b) {
        this.result = a * b;
        return this.result;


    }
    divide(a, b) {
        this.result = a / b;
        return this.result;
    }
    display() {
        console.log(this.result);
    }
}
 let calc = new Calculater();

 calc.add(2, 1);
 calc.display()
 calc.subtract(7, 3);
 calc.display()
 calc.multiply(8, 3);
 calc.display()
 calc.divide(8, 40);
 calc.display()


