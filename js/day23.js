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