class Book {
    constructor(title, author, pages, genre) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.genre = genre;
    }
}

let books = [];

function displayBooks(booksToDisplay) {
    const bookList = document.getElementById('book-list');
    const noBooksFound = document.getElementById('no-books-found');
    const searchField = document.getElementById('search');

    bookList.innerHTML = '';

    if (searchField.value.trim() === '') {
        noBooksFound.style.display = 'none';
    } else if (booksToDisplay.length === 0) {
        noBooksFound.style.display = 'block';
    } else {
        noBooksFound.style.display = 'none';
        booksToDisplay.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book-item');
            bookItem.innerHTML = `
                <h5>${book.title}</h5>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Pages:</strong> ${book.pages}</p>
                <p><strong>Genre:</strong> ${book.genre}</p>
            `;
            bookList.appendChild(bookItem);
        });
    }
}

document.getElementById('bookForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const genre = document.getElementById('genre').value;

    if (title && author && pages && genre) {
        const newBook = new Book(title, author, parseInt(pages), genre);
        books.push(newBook);
        displayBooks(books);
        this.reset();
    }
});

document.getElementById('search').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm));
    displayBooks(filteredBooks);
});

// Initial display
displayBooks(books);
