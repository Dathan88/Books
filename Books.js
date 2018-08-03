/*jshint esversion: 6 */
const bookDisplay = document.getElementById('myBooks');
const myForm = document.getElementById("myForm");
const hobbit =  new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 0);
let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title,
	this.author = author,
	this.pages = pages,
	this.read = (read >= 1) ? "Have Read" : "Not Read Yet  ",
	this.info = function() {
		return  this.title + " by " + this.author + " - " + this.pages + " - " + this.read;
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
	let table = document.getElementById("myTable");
	let tbody = document.getElementById("tableBody");

	myLibrary.forEach((item, index) => {
		let rowPlace = index;
		let row = tbody.insertRow(rowPlace);
			row.setAttribute('id', item.title);
		let bookData = row.insertCell(0);
			bookData.innerHTML = item.info();
		let btn = document.createElement("BUTTON");
		let text = document.createTextNode("Delete " + item.title);
			btn.appendChild(text);
			row.insertAdjacentElement("beforeend", btn);
		btn.addEventListener("click", (e) => {

		});
    });
}

console.log(hobbit.info());
document.getElementsByTagName("body").onload = myLibrary.push(hobbit), render();


// for(let key in item) {
// 			if(typeof item[key] === "function") {
// 			let text = document.createTextNode("Delete " + item.title);
// 			btn.appendChild(text);
// 				continue;
// 			}

// 		let bookData = row.insertCell(i);
// 			bookData.innerHTML = item[key];
// 			bookData.insertAdjacentElement("afterend", btn);
// 			i++;