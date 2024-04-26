// => Template Literals:
//=> ${}
let pencilPrice = 13;
let penPrice = 60;
let totalPrice = `The total price is ${pencilPrice+penPrice}`;
console.log(totalPrice);

// conditional Starements
let age = 23;
if(age >= 18){
    console.log(`Your age is ${age} years and now you can Vote`);
}else{
    console.log(`You age is ${age} years you can't vote`);
}
// => Conditional Statements:
// if (condition){
//     Statement;
// }else if(condition){
//     Statement;
// }else{
//     Statement;
// }

// =>Logical Operators:
// logical && and " Run when both values are true"
// logical || or "IF when one value is true"
// logical ! not "work on single expression"

                                        //  Start Day16
// =>String Methods:
// String is immutable(don't change)
// methods don't change the original string 
let msg = "     Hello World    ";
console.log(msg.trim());
// trim() only remove front and end space of the String in the above example it don't remove space between Hello world

// 2) toUpperCase()
console.log(msg.toUpperCase());
// 2) toLowerCase()
console.log(msg.toLocaleLowerCase());

// =>String methods with Arguments:
// stringName.method(arg)
// arg is the value that we pass to the method
console.log(msg.indexOf("W"));
// indexof() return the first index of the occurrence

// =>Method Chaining:
// use one method after another. Order of execution will be left to right
console.log(msg.trim().toUpperCase());

// => Slice Method:
// Returns a part of the original String with a new string
console.log(msg.slice(5,7));
console.log(msg.slice(7));
console.log(msg.slice(-6));

// => Replace Method:
// Search a value in the string and return a new string with the value replaced but only first occurance is replace
// str.replace("old value", "new value");
console.log(msg.replace("ello","y"));

// => Count Method:
// Return a string with the number of copies of a String
let name = "Abdul Rehman ";
console.log(name.repeat(3));

//=> Array DS:
// Array is used to store data in linear way
// Linear collection of things
// In JavaScript we store multiple elements and datatypes in one variable
// array is object type
// Array is Mutable, means when we change the elements of an array it don't create the copy of that array but it update the array.
let students = ["Ab-Rehman","Usman","Ali"];
students[0];     // access first index of an array
students[0][0];  // access first index of array and also first element of first index element
students[0].length; // access the length of 0 index element
students[1]="Saif"; // changing the element of first index

// ==> Array Methods:
// Push:     add to end
// POP:      delete from end & returns it
// Unshift:  add to start
// Shift:    delete from start & returns it
// indexOf:  to find the index of that element but it is case-sensitive
// includes:  search for a value it returns true and false if value is present in that array it returns true otherwise it return false.
// concat:   merge two array, it create new array that contain elements of both array ex: array1.concat(array2)
// reverse:   reverse an array, it don't create the new array but it update the original array
// slice:     copies a portion of an array ex: array.slice(2,3) ending index n-1(3-1=2), array.slice(4) it slice the element after index 4 but it start from 4 index

let cars = ['bmw','toyota','Hyundai','Hummer'];
cars.push('Mercedies'); // add Mercedies at the end and we must define the element that we want to store in the array in push method/
cars.push('Ferrari');
cars.pop(); // remove the last index element and we not  define the element that we want to remove in the array in pop method because it automatically remove the last index element.

// splice:    remove / replace / add elements in place splice(start, deleteCount, item0...itemN), it make changes in the original array
cars.splice(3); // it returns elements from 3 index
cars.splice(0,1)  // it remove the element of 0 index, removing element from 0 to 1 index
cars.splice(0,1,'black','gray'); // it remove element element from 0 to 1 index and update black and grey at first and second index.
cars.splice(1,0,'Honda'); // add honda at 1 index

// sort:    sort an array in ascending and decending way, it first convert the array in string and then sort it, in this way it don't work well with integers
cars.sort();  // sort the cars array in ascending way

// array Referance:    address in memory
// when we create the array it first create the reference of that array in the memory

// constant in array:
const arr = [1,2,3];
// in array constant array is increaseable we can apply pop, push method on an const array.we perform operation on an const array but we don't completely change the array 
// as we know how to store array in memory(array reference) so arr don't store [1,2,3] but it store the address in the memory it store the address of [1,2,3] in the memory, in this way after creating the array const we don't be able to change the address of the array we change the value of that address, and we dont add the address of other variable in the const array

// Nested array   multidimentional array
// mostly one level of nested array used
let num = [ [1,2], [3,4], [5,6]];

//                              End Day 16