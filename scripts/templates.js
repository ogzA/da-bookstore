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
                    <button class="add-comment__button" onclick="addComment(${booksIndex})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
                    </button>
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
