// The query selector - version4 "The Net Ninja"

const wrap = document.querySelector("#book-list");
console.log(wrap);


const wmf = document.querySelector("#book-list li:nth-child(2) .name");  //returns single element
console.log(wmf);

var books = document.querySelectorAll("#book-list li .name");  //returns multiple elements
console.log(books);

Array.from(books).forEach(function(book){
    console.log(book);
});

// Changing text and HTML content or retirve it from the DOM - version5
//HTML Collections = Array.from() vs. Node List = books.forEach 

var books = document.querySelectorAll("#book-list li .name");

Array.from(books).forEach(function(book){
    console.log(book.textContent);
});

Array.from(books).forEach(function(book){
    book.textContent += " (book title)";
});

const bookList = document.querySelector("#book-list");
console.log(bookList.innerHTML);

//const bookList = document.querySelector("#book-list");
bookList.innerHTML = "<h2>Books and more books...</h2>";
bookList.innerHTML += "<p>This is how you add HTML</p>";

// DOM nodes - version6
//Nodes are Elements, text, comment, attributes

//https://www.w3schools.com/jsref/prop_node_nodetype.asp = node type return values

const banner = document.querySelector("#page-banner");
console.log("#page-bannner node type is:", banner.nodeType);
console.log("#page-bannner node name is:", banner.nodeName);
console.log("#page-bannner has child nodes:", banner.hasChildNodes()); // returns true or false

const clonedBanner = banner.cloneNode(true);  //returns all elements
console.log(clonedBanner);

// DOM traversal (parent/child) nodes - version7

const bookList = document.querySelector("#book-list");
console.log("The parent node is:", bookList.parentNode);
console.log("The parent element is:", bookList.parentElement);
console.log("The parent element is:", bookList.parentElement.parentElement); // traverse updward thru the DOM

console.log(bookList.childNodes);
console.log(bookList.children);

// DOM traversal (sibling/sibling) nodes - version8

const bookList = document.querySelector("#book-list");
console.log("book-list next sibling is:",bookList.nextSibling);
console.log("book-list next element sibling is:",bookList.nextElementSibling);

console.log("book-list previous sibling is:",bookList.previousSibling);
console.log("book-list previous element sibling is:",bookList.previousElementSibling);

bookList.previousElementSibling.querySelector("p").innerHTML += "<br/>Too cool for everyone else!";

// DOM events/removing content - version9
//https://www.w3schools.com/jsref/dom_obj_event.asp = HTML DOM Events 

var h2 = document.querySelector("#book-list h2");
h2.addEventListener("click", function(e){
    console.log(e.target);
    console.log(e);
});

var btns = document.querySelectorAll("#book-list.delete");
Array.from(btns).forEach(function(btn){
    btn.addEventListener("click", function(e){
        
     const li = e.target.parentElement;
     li.parentNode.removeChild(li);
     
    });
    
});

const Link = querySelector("#page-banner a");
link.addEventListener("click", function(e){
    e.preventDefault();
    console.log("navigation to" e.targert.textContent, "was prevented");  //the net ninja website
    
});

// DOM Event Bubbling - version10




