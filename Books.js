const books = document.getElementById('myBooks');
const theHobbit =  new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', false);
let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title,
	this.author = author,
	this.pages = pages,
	this.read = (read === true) ? "Yes" : "Not read yet",
	this.info = function() {
		return this.title + " by " + this.author + " , " + this.pages + " , " + this.read;
	};
}

function addBookToLibrary () {

}

console.log(theHobbit.info());
console.log();