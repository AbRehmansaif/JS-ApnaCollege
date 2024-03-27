// ==> For Loop
// used to iterate a piece of code

// for(initialisation; condition; updation){
//     statements;
// }

// for(let i=1; i<=5; i++){
//     console.log(i);
// }

// print all odd numbers (1 to 15)
// for(let j=1; j<=15; j=j+2){
//     console.log(j);
// }

// print all even numbers (2 to 10)
// for( let even=2; even<=10; even=even+2){
//     console.log(even);  
// }

// Infinite loop: If ending condition of the loop is missing then the loop run continuously(not stop) called infinite loop.
// Some examples of Infinite loop
// for(let i=1; i>=0; i++){}
// for(let i=1; i<=5; i--){}
// for(let i=1; ; i++){}

// Print the multiplication table of 5
// for(let table=5; table<=50; table=table+5){
//     console.log(table); 
// }

// let n = prompt("Write your number");
// for(let tab=n; tab<=n*10; tab=tab+n){
//     console.log(tab);
// }

// ==> While Loop
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// ==> Break
// let i=1;
// while(i<=5){
//         if (i==3) {
//             break;
//         }
//     console.log(i);
//     i++;
// }


// ==> Loops with Array
let fruits = ["mango","apple","banana","litches","orange"];
for (let i=0; i<fruits.length; i++){
    console.log(i,fruits[i]);
}

// reverse printing the loop
for (let j=fruits.length; j>=0; j--){
    console.log(j,fruits[j]);
}

// Nested Loop is used for Nested Array
let heroes = [ ["Ironman", "Spiderman", "Thor"], ["Superman", "Wonder Womed", "Flash"]];

for(let k=0; k<heroes.length; k++){
    console.log(`List #${k}`);
    for(let l=0; l<heroes[k].length; l++){
        console.log(heroes[k][l]);
    }
}

// ==> for of loop:
// used when we access the items of a collection
// to access the indivisual items of a collection(String, Array, etc).
// used when we have a complex collection of Data.
for(fruit of fruits){
    console.log(fruit);
}

// Nested For of Loop:
for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}