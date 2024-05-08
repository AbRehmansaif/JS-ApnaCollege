//==> DOM ( Document Object Model )
// The DOM Represents a document with a logical Tree.
// It allow us to Manipulate/ change webpage content (HTML or css elements).

// ==> Selecting Element
// In Select Element By Class Name and Tag Name we use indexing.
// 1) ==> Select Element By ID :
document.getElementById("AI");
// document.getElementById("hd").innerText = "HTML";

// 2) ==> Select Element By Class Name:
// document.getElementsByClassName("dataSci")[0].innerText = "JS"

// 3) ==> Select Element by Tag Name
// document.getElementsByTagName("p")[0].innerText = "HTML";

// 4) Query Selector:
// Allows us to use any CSS Selector.
document.querySelector('p')

// ==> Setting Content in Objects:
// innerText: Shows the visible Text contained in the Node.
// textContent: Shows all the full Text.
// innerHTML: Shows the full Markup.

// ==> Manipulating Attributes:
// These are Getter and Setters
// obj.getAttribute(attr)
// obj.setAttribute(attr, val)
let img = document.querySelector('img');
// img.setAttribute('id', 'firstImg');
img.setAttribute('src','https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D')

// ==> Manipulating Style:
// We dont access external css, we only acces inline css
let heading = document.querySelector('h1');
heading.style.color= 'purple';

let brights = document.querySelector("#DataScience b");
// These styles are saved in Inline CSS
// for (let index = 0; index < bright.length; index++) {
//     bright[index].style.color="orange";
// }
// for(bright of brights){
//     bright.style.color = 'purple';
// }
brights.style.color = 'purple';

// brights.style (this style give us inline css, if we write css in External File it dont show in this stile, that's why we don't use it frequently.)

// ==> To check the classes of the Object:
// obj.classlist
let ims= document.querySelector("firstImg");
ims.classList;
ims.classList.add("green"); // this green class is create in css file
ims.classList.remove("green");
ims.setAttribute('class', 'green');  // it also work
ims.classList.contains("underline"); // contains check this class is present or not with this
ims.classList.toggle("green"); //To toggle b/w add and remove (if this class is present then it remove this class if not present then it add)