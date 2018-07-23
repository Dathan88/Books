const bookDisplay = document.getElementById('myBooks');
const theHobbit =  new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', false);
let myLibrary = [theHobbit];

function Book(title, author, pages, read) {
	this.title = title,
	this.author = author,
	this.pages = pages,
	this.read = (read === true) ? "Yes" : "No",
	this.info = function() {
		return this.title + " by " + this.author + " , " + this.pages + " , " + this.read;
	};
}

function addBookToLibrary(book) {
	console.log(book);
	myLibrary.push(book);
}

function render(b) {
	let table = document.getElementById("myTable");

    myLibrary.forEach((item, index) => {
    	for(let key in item) {
    		console.log(item[key]);
    		if(typeof item[key] === "function") {
    			break;
    		} 
    		let row = document.createElement("TR");
    			row.setAttribute("id", "myTr");
				document.getElementById("myTable").appendChild(row);

			let bookData = document.createElement("TD");
			let text = document.createTextNode(item[key]);
				bookData.appendChild(text);
			document.getElementById("myTr").appendChild(bookData);
  		};
    });
}

function createForm() {
	const bookValues = ["Title", "Author", "Pages", "Read"];
	const formDiv = document.querySelector("#formContainer");
	const form = document.createElement("FORM");
		form.setAttribute("name", "myForm");
		form.setAttribute("id", "myForm");
		formDiv.appendChild(form);
	const fieldSet = document.createElement("FIELDSET");
		fieldSet.setAttribute("id", "mySet");
		form.appendChild(fieldSet);
		
	for(var i = 0; i < bookValues.length; i++) {
		const category = document.createElement("p");
			category.innerHTML += bookValues[i] + ":" + "<br>";
			fieldSet.appendChild(category);
		const formInput = document.createElement("INPUT");
			formInput.setAttribute("text", "text");
			formInput.setAttribute("value", "");
			category.appendChild(formInput);
	};

	const submit = document.createElement("BUTTON");
		submit.setAttribute("id", "Submit");
		submit.setAttribute("type", "submit");
		submit.setAttribute("value", "Submit");
		fieldSet.appendChild(submit);
	const btnLabel = document.createTextNode("Submit");
		submit.appendChild(btnLabel);
}

console.log(theHobbit.info());
console.log(addBookToLibrary());
console.log(render(theHobbit));