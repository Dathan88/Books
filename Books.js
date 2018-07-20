const bookDisplay = document.getElementById('myBooks');
const theHobbit =  new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', false, true);
let myLibrary = [theHobbit];

function Book(title, author, pages, read, enjoyed) {
	this.title = title,
	this.author = author,
	this.pages = pages,
	this.read = (read === true) ? "Yes" : "Not read yet",
	this.enjoyed = (enjoyed === true) ? "Yes" : "No",
	this.info = function() {
		return this.title + " by " + this.author + " , " + this.pages + " , " + this.read + " , " + this.enjoyed;
	};
}

function createForm() {
	const bookValues = ["Title", "Author", "Pages", "Read", "Enjoyed"];
	const formDiv = document.querySelector("#formContainer");
	const form = document.createElement("FORM");
		form.setAttribute("id", "myForm");
		formDiv.appendChild(form);
		
	for(var i = 0; i < bookValues.length; i++) {
		const category = document.createElement("p");
			category.innerHTML += bookValues[i] + "<br>";
			form.appendChild(category);
		const formInput = document.createElement("INPUT");
			formInput.setAttribute("text", "text");
			formInput.setAttribute("value", "");
			category.appendChild(formInput);
	};
	const submit = document.createElement("SUBMIT");
	submit.setAttribute("submit", "Submit");
}

function addBookToLibrary(a) {
	
}

function render(b) {
	let i;
	let libLen = myLibrary.length;
	for(i=0; i <libLen; i++){
		
	}
}

console.log(theHobbit.info());
console.log();