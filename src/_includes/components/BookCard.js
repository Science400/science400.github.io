const {html} = require('common-tags');

function BookCard({title, author, coverURL, bookType}) {
    return html`
        <div class="card h-100">
            <img src="${coverURL}" class="card-img-top" alt="Cover of ${title}">
            <div class="card-body">
                <div class="row">
                    <div class="col-9">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">by ${author}</p>
                    </div>
                    <div class="col-3">
                        <img src="../../assets/${bookType}.svg" width="100%"/>
                    </div>
                </div>
                <div class="row">
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}

module.exports = BookCard;