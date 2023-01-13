console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructore (name, pets, residence, hobbies){
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;

    }
    
    addHobby(hobby){
        this.hobbies.push(hobby);
    }
    
    removeHobby(rmhobby) { 
     let myIdx = this.hobbies.indexOf(rmhobby);
     this.hobbies.splice(myIdx, 1);

    }
       
    greeting() {
        console.log("Hello fellow person");
    } 
        
}  


// Exercise 2 //

class  Coder extends Person {
    constructor(name, pets, residence, hobbies, occupation) {
         super(name, pets, residence, hobbies);
         this.occupation = "Full stack Web Developer";
    }

    greeting() {
         console.log("Hello I am a coder!");
   }
}

const myCoder = new Coder("Kinjal", 4, "indiana",["feeling warm", "drink coffee", "playing"]);
console.log(myCoder);


// // Exercise 3 //

const testPerson = new Person ("Kinjal", 12, "Indiana", ["cricket", "football", "games",]); 


console.log(testPerson.hobbies.slice());
testPerson.removeHobby("football");
console.log(testPerson.hobbies);





// Exercise 4 //

class Calculator {
    constructor(){
        this.result = 0;
    }

    
    add(a, b) {
        if (b != undefined){
        this.result = a + b;
        }else{
            this.result += a;
        }   
        return this.result
    }

    subtract(a, b){
        if (b != undefined){
            this.result = a - b;
        }else{
            this.result -= a;
        } 
        return this.result
    }

    multiply(a, b){
        if (b != undefined){
            this.result = a * b;
            }else{
                this.result *= a;
            }  
            return this.result
    }

    divide(a, b){
        if (b != undefined){
            this.result = a / b;
            }else{
                this.result /= a;
            }    
            return this.result
    }

    displayResult(){
        console.log(`cyrrent Result is ${this.result}`);
    }
}

const myCalculator = new Calculator();
myCalculator.displayResult();

console.log(myCalculator.result);
console.log(myCalculator.add(10, 2));
console.log(myCalculator.add(10, 0));
console.log(myCalculator.add(5));

