// The query selector - version4

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

cosnt bookList = document.querySelector("#book-list");
console.log(bookList.innerHTML);

cosnt bookList = document.querySelector("#book-list");
bookList.innerHTML = "<h2>Books and more books...</h2>";
bookList.innerHTML += "<p>This is how you add HTML</p>";


