function init() {
	renderBooks();
}

function renderBooks() {
	const renderBooksRef = document.getElementById("render-books");

	renderBooksRef.innerHTML = "";

	for (let booksIndex = 0; booksIndex < books.length; booksIndex++) {
		const book = books[booksIndex];

		renderBooksRef.innerHTML += getBookTemplate(book);
	}
}
