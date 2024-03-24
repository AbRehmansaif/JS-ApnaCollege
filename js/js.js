// Template Literals => ${}
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

// if (condition){
//     Statement;
// }else if(condition){
//     Statement;
// }else{
//     Statement;
// }

// Logical Operators
// logical && and " Run when both values are true"
// logical || or "IF when one value is true"
// logical ! not "work on single expression"