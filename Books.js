/*jshint esversion: 6 */
/*jshint -W030*/

const myForm = document.getElementById("myForm");
const table = document.getElementById("myTable");
const hobbit =  new Book('The Hobbit', 'J.R.R. Tolkien', '295', 0);
const potter = new Book("Harry Potter", "J.K. Rowling", "489", 1);
const bible = new Book("The Bible", "Jesus H. Christ", "572", 1);

let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title,
	this.author = author,
	this.pages = pages,
	this.read = (read >= 1) ? "Yes" : "No",
	this.info = function() {
		return  this.title + " by " + this.author + " - " + this.pages + " pages";
	};
}

function newBook() {
	document.getElementById("formContainer").style.display = "block";
	return false;
}

function addBookToLibrary(e) {
	document.getElementById("formContainer").style = "display: none";

	let title = document.getElementById('title').value;
	let author = document.getElementById('author').value;
	let pages = document.getElementById('pages').value;
	let read = document.querySelector('input[name="read"]:checked').value;
	const book1 = new Book(title, author, pages, read);
		myLibrary.push(book1);
	let tbody = document.getElementById("tableBody");
		tbody.innerHTML = '';
	render();
	myForm.reset();
}

function render() {
	let tbody = document.getElementById("tableBody");

	myLibrary.forEach((item, index) => {
		let rowPlace = index;
		let row = tbody.insertRow(rowPlace);
			row.setAttribute('id', item.title);
		let bookData = row.insertCell(0);
			bookData.innerHTML = item.info();
		let finished = document.createElement("TD");
			finished.setAttribute('class', "btn");
			finished.textContent = item.read;
			row.insertAdjacentElement("beforeend", finished);

			finished.addEventListener("click", (e) => {
				if (finished.innerHTML === "Yes") {
					finished.innerHTML = "No";
				} else {
					finished.innerHTML = "Yes";
				}
			});
		let remove = document.createElement("TD");
			remove.setAttribute('class', "btn");
			remove.textContent = "Remove From List";
			row.insertAdjacentElement("beforeend", remove);

			remove.addEventListener("click", (e) => {
		let child = document.getElementById(item.title);
				console.log(child.id);
				console.log(index);
				tbody.removeChild(child);
				myLibrary.splice(index, 1);
			});
    });
}

console.log(myForm.parentNode);
console.log(hobbit.info());
document.getElementsByTagName("body").onload = myLibrary.push(hobbit, potter, bible), render();