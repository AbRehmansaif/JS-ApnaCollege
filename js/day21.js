// ==> FOR EACH LOOP
// let arr = [1, 2, 3, 4, 5];
// arr.forEach((el) =>{
//     console.log(el);
// });

// arr.forEach(function(en){
//     console.log(en);
// });

// let ob = [
//     {
//         name: "Abdul Rehman",
//         marks: 95,
//     },{
//         name: "Khizer",
//         marks: 94,
//     },{
//         name:"Omer",
//         marks:89,
//     },
// ];

// ob.forEach((fe) =>{
//     console.log(fe.marks);
// });

// ==> MAP Function
// most familier to forEach.
let num = [1, 2, 3, 4];
let double = num.map((el) => {
    return el * 2;
});

//==> Filter Function
let nums = [1,2,3,4,7,3,8,9];
let ans = nums.filter((en)=>{
    return en % 2 ==0;
});