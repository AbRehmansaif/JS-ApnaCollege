// DOM Events( are the activity on our web page with mouse and Keyboard )
// we also use onclick Event on html file but it is not recommended because it's use in HTML make HTML bulky
let evnt = document.querySelector('button');
// ==> First Method
// evnt.onclick = function(){
//     alert("On click! Event..");
// }

// we don't define multiple values in onclick event

// ==> Second Method.
function msg() {
    alert("On click msg..");
}
function msg1() {
    alert("second msg.")
}
// evnt.onclick=msg;

// ==> Event Listners
// addEventListner
evnt.addEventListener("click", msg);
evnt.addEventListener("click", msg1);
//Note: we can define multiple values in addEventListener

// ==> add RandomColor Activity in Project Folder

// ==> Event Listener for Element
let para = document.querySelector('p');
para.addEventListener("click",function () {
    alert("Event Listener for Element..");
})

let boxHover = document.querySelector(".box");
boxHover.addEventListener("mouseenter",function(){
    alert("Event on Mouse Hover.");
})

// ==> This in Event Listener ( Most Important Topic )
let secbox = document.querySelector(".secBox");
secbox.addEventListener("click", function(){
    this.style.backgroundColor = "blue";
})


// ==> KeyBoard Events
let secBtn = document.querySelector("#secBtn");
secBtn.addEventListener("click",function(event){
    console.log(event);
})

let input = document.querySelector("input");
input.addEventListener("keydown", function(event){
    console.log(event.key);
    if(event.code=="Enter"){
        input.style.backgroundColor="blue";
    }
})

// ==> Form Events
// let form = document.querySelector("form");
// form.addEventListener("submit",function(){
//     alert("Submit");
// })

// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     alert("Submit");
// })

//==> Extraction Form Data

// let registerForm = document.querySelector("form");
// registerForm.addEventListener("submit",function(event){
//     event.preventDefault();
//     let user = document.querySelector("#user")
//     let pass = document.querySelector("#pass")
//     alert(`Your Username is ${user.value} and Password is ${pass.value}`)
// })
      // this code is run like Above Code but we use here this.elements[indexing in the HTML form] for selecting and accessing the data form HTML Form.
// let registerForm = document.querySelector("form");
// registerForm.addEventListener("submit",function(event){
//     event.preventDefault();
//     let user = this.elements[0];
//     let pass = this.elements[1];
//     alert(`Your Username is ${user.value} and Password is ${pass.value}`)
// })

// ==> change Event
// The change event occurs when the value of an element has been changed ( only worked on <input>, <textarea> <select> elements), it only track the final change 
let registerForm = document.querySelector("form");
registerForm.addEventListener("submit",function(event){
        event.preventDefault();
    })
let checkValue = document.querySelector("#user");
checkValue.addEventListener("change",function(){
    console.log(`This is change Event = ${this.value}`); 
})


//==> input Event
// The input event occurs when the value of an <input>, <select>, <textarea></textarea> element has been changed.

checkValue.addEventListener("input",function(){
    console.log(`This is Input Event= ${this.value}`); 
})