const bookDisplay = document.getElementById('myBooks');
const myForm = document.getElementById("myForm");
const hobbit =  new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 0);
let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title,
	this.author = author,
	this.pages = pages,
	this.read = (read >= 1) ? "Yes" : "No",
	this.info = function() {
		return this.title + " by " + this.author + " , " + this.pages + " , " + this.read;
	};
}

function newBook() {
	document.getElementById("formContainer").style.display = "block";

	return false;
}

function addBookToLibrary() {
	let title = document.getElementById('title').value;
	let author = document.getElementById('author').value;
	let pages = document.getElementById('pages').value;
	let read = document.querySelector('input[name="read"]:checked').value;
	const book1 = new Book(title, author, pages, read);

	console.log(book1);
	myLibrary.push(book1);
	document.getElementById("myTr").remove();
	render();
	console.log(myLibrary);
}

function render(b) {

    myLibrary.forEach((book) => {
		let table = document.getElementById("myTable");
		let row = document.createElement("TR");
			row.setAttribute("id", "myTr");
		table.appendChild(row);

    	for(let key in item) {
    		if(typeof item[key] === "function") {
    			break;
    		}

		let bookData = document.createElement("TD");
		let text = document.createTextNode(item[key]);
			bookData.appendChild(text);
		document.getElementById("myTr").appendChild(bookData);

  		}
    });
}

console.log(hobbit.info());

document.getElementsByTagName("body").onload = myLibrary.push(hobbit), render();