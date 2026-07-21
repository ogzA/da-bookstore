let likeButton = document.getElementById("like-button");

function getBookTemplate(book) {
	return /*html*/ `
        <article class="book-container">
            <header> <h2>${book.name}</h2></header>
            <section class="section-img" id="section-img">
                <img src="./assets/img/book-element.png" height="75" alt="">
                
            </button>
            </section>
            <section class="section-details" id="section-details">
                <div class="price-and-like">
                    <p class="book-price">${book.price} €</p>
                    <p class="book-favorite">${book.likes} ${getLikeStatus(book.liked)}</p>
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
            <section id="section-comments">
                ${getCommentsTemplate(book.comments)}
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
