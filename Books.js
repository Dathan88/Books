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

	myLibrary.push(book1);

	let tbody = document.getElementById("tableBody");
	tbody.innerHTML = '';

	render();
}

function render() {
	console.log(myLibrary);
	let table = document.getElementById("myTable");
	let tbody = document.getElementById("tableBody");

	myLibrary.forEach((item, index) => {
		let i = 0;
		let rowPlace = index;
		let row = tbody.insertRow(rowPlace);
		row.setAttribute('id', 'myRows');
			
		for(let key in item) {
			if(typeof item[key] === "function") {
				continue;
			}
			let bookData = row.insertCell(i);
			bookData.innerHTML = item[key];

			i++;
		};
    });
}


console.log(hobbit.info());
document.getElementsByTagName("body").onload = myLibrary.push(hobbit), render();