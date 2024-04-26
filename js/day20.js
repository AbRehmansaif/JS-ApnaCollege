// ==> This keyword in Js.
// this keyword refer to an object that is executing the current piece of code. Method don't directly access the parameter of an object
const student = {
    name:"Abdul Rehman",
    age:22,
    eng: 75,
    math: 95,
    phy: 80,
    getAvg(){
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

// ==> Try and Catch
// The try statement allows you to define a block of code to be tested for errors while it is been executed.
// The Catch statement allow you to define a block of code to be executed, if an error occur in the try block.

let a = 5;
try {
    console.log(a);
} catch (error) {
    console.log("A is not defined");
    console.log(error); 
}

// Miscellaneous Topics
// ==> Arrow Functions
// arrow functions are nameless functions, they don't have keyword.
const sum=(a, b) =>{
    console.log(a+b);
}

const cube = (n) =>{
    return n * n * n;
}

// ==> Implicit Return in Arrow Function
// In implicit Function we want to return the value insted of using return keyword and we use the parenthesis instead of curly brackets.
const mul=(a,b)=>(a*b);

// ==> Set Timeout Function
// ususlly used for API calls, Request Response
// setTimeout function take time in ms.
// setTimeout(function, Timeout);
setTimeout(() => {
    console.log("Hello");
},4000);

// ==> Set Interval
// setInterval(function, Timeout);
// Multiple time execute after timedelay that you give.
let id = setInterval( () =>{
    console.log("Hello World");
},2000); 
console.log(id);
// TO stop the SetInterval 
clearInterval(id);  // give variable of that setInterval that you want to stop.

// ==> This keyword with Arrow Function.
// Normal function depend on Scope, Normal function check who call
// Arrow Function depend on Lexical Scope, Arrow function check who call my Parent. Arrow Function Scope depend on Parent Function Scope.
// Arrow Function ka lye this hota ha uska parent ka this
const students = {
    name : "Abdul Rehman",
    marks : 95,
    prop: this, // global scope
    getName : function () {   // Normal Function
        return this.name;
    },
    getMarks : () =>{         // Arrow Function
        console.log(this);    // Parents Scope => window
        return this.marks;
    },
    getInfo1 : function (){
        setTimeout(()=> {
            console.log(this); // Student
        }, 2000);
    },
    getInfo1 : function (){
        setTimeout(function() {
            console.log(this);  // Window
        }, 2000);
    }
}; 