let likeButton = document.getElementById("like-button");

function getBookTemplate(book, booksIndex) {
	return /*html*/ `
        <article class="book-card">
            <header> <h2>${book.name}</h2></header>
            <section class="section-img" id="section-img">
                <img src="./assets/img/book-element.png" height="75" alt="">
            </button>
            </section>
            <section class="section-details" id="section-details">
                <div class="price-and-like">
                    <p class="book-price">${book.price} €</p>
                    <div class="book-favorite">
                        <span class="like-counter">${book.likes}</span> 
                        <button onclick="updateLikeStatus(${booksIndex})">${getLikeStatus(book.liked)}</button>
                    </div>
                </div>

                <table>
                    <tbody>
                        <tr>
                            <th scope="row">Autor</th>
                            <td>: ${book.author}</td>
                        </tr>
                        <tr>
                            <th scope="row">Erscheinungsjahr</th>
                            <td>: ${book.publishedYear}</td>
                        </tr>
                        <tr>
                            <th scope="row">Genre</th>
                            <td>: ${book.genre}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section id="section-comments" class="section-comments">
                <h3>Kommentare:</h3>
                <div class="comment-list">
                    ${getCommentsTemplate(book.comments)}
                </div>
                <div class="add-comment">
                    <input id="comment-input-${booksIndex}" placeholder="Kommentar hinzufügen" type="textarea">
                    <button onclick="addComment(${booksIndex})">Hinzufügen</button>
                </div>
            </section>
        </article>
    `;
}

function getCommentsTemplate(comments) {
	let commentsHTML = "";

	for (let commIndex = 0; commIndex < comments.length; commIndex++) {
		const comment = comments[commIndex];

		commentsHTML += /*html*/ `
            <table>
                <tbody id="comment-${commIndex + 1}">
                    <tr>
                        <th>${comment.name}</th>
                        <td>:${comment.comment}</td>
                    </tr>
                </tbody>
            </table>
        `;
	}

	return commentsHTML;
}
