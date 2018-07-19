const books = document.getElementById('myBooks');
const theHobbit =  new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', false);


function Book(title, author, pages, read) {
	this.title = title,
	this.author = author,
	this.pages = pages,
	this.read = true,
	this.info = function() {
		return this.title + " by " + this.author + " , " + this.pages + " , " + this.read;
	};
}

console.log(theHobbit.info());
console.log();