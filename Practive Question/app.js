// conditional statement for traffic light signal
let color = "red";
if (color ==="red"){
    console.log(`Stop ${'Color is Red'}`);
}else if(color === "yellow"){
    console.log(`Ready ${'Color is Yellow'}`);
}else{
    console.log("Go");
}

// conditional statement for Calculate popcon price
let size = "M";
if (size === "XL") {
    console.log(`The Price of ${size} is 250rupees`)
}else if (size === "L") {
    console.log(`The Price of ${size} is 200 rupees`)
}else if (size === "M") {
    console.log(`The Price of ${size} is 100 rupees`)
}else{
    console.log(`The Price of ${size} is 50 repees`);
}

// Practice Question
let letter = "abcf";
if (letter[0] === "a" && letter.length >3) {
    console.log(`The String is Good`);
}else{
    console.log(`The String is Bad`);
}