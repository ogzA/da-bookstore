function init() {
	loadBooks();
	renderBooks();
}

function renderBooks() {
	const renderBooksRef = document.getElementById("render-books");

	renderBooksRef.innerHTML = "";

	for (let booksIndex = 0; booksIndex < books.length; booksIndex++) {
		const book = books[booksIndex];

		renderBooksRef.innerHTML += getBookTemplate(book, booksIndex);
	}
}

function getLikeStatus(liked) {
	if (!liked) {
		return /*html*/ `
            <img class="heart" src="./assets/icons/heart.png" width="50" alt="">`;
	} else {
		return /*html*/ `
            <img class="heart" src="./assets/icons/heart_full.png" width="50" alt="">    
        `;
	}
}

function updateLikeStatus(booksIndex) {
	const book = books[booksIndex];
	book.liked = !book.liked;

	if (!book.liked) {
		book.likes--;
	} else {
		book.likes++;
	}

	saveBooks();
	renderBooks();
}

function addComment(booksIndex) {
	const commentInput = document.getElementById(`comment-input-${booksIndex}`);
	const commentInputValue = commentInput.value;

	if (commentInputValue !== "") {
		books[booksIndex].comments.push({
			name: "Guest",
			comment: commentInputValue,
		});
	}
	saveBooks();
	renderBooks();
}

function saveBooks() {
	localStorage.setItem("books", JSON.stringify(books));
}

function loadBooks() {
	const storedBooks = JSON.parse(localStorage.getItem("books"));

	if (storedBooks !== null) {
		books = storedBooks;
	}
}
