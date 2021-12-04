const cardContainerDiv = document.querySelector('.card-container');
const addBookForm = document.querySelector('.form-wrapper')

let title = document.getElementById('title').value;
let author = document.getElementById('author').value;
let pages = document.getElementById('pages').value;
let read = document.getElementById('read-status').value;

const submitButton = document.querySelector('.submit');
const addBookButton = document.querySelector('.open-form');
const closeFormButton = document.querySelector('.close');

let myLibrary = [
    {
        title: 'The Fellowship of the Ring',
        author: 'J.R.R. Tolkien',
        pages: '423',
        read: false,
    }
]

addBookButton.addEventListener('click', () => {
    addBookForm.style.display = 'block'
})

closeFormButton.addEventListener('click', () => {
    addBookForm.style.display = 'none'
})

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    pages = document.getElementById('pages').value;
    read = document.getElementById('read-status').checked;
    read === true ? read = 'Yes!' : read = 'Not yet.'  
    console.log(title, author, pages, read)
    addBook()
    displayBook()
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('pages').value = ''
    document.getElementById('read-status').checked = false
    console.log(title, author, pages, read)
    addBookForm.style.display = 'none'
})


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    // this.info = function(){
    //     return `${title} by ${author}, ${pages}, ${read} yet.`
    // }
}

function addBook() {
    const book =  new Book(title, author, pages, read)
    console.log(book)
    myLibrary.push(book)
    console.log(myLibrary)

}

function displayBook() {
    cardContainerDiv.innerHTML += (`
        <div class="card">
            <div class="card-content">
                <h2>${title}</h2>
                <h3>${author}</h3>
                <P>${pages}</p>
                <p>Read Status: ${read}</p>
            </div>
        </div>
    `)
}

// if storing the info locally
function populate() {
    myLibrary.forEach(book => {
        title = book.title
        author = book.author
        pages = book.pages
        read === true ? read = 'Yes!' : read = 'Not yet.'
        displayBook(book)
    })
}
window.onload = populate()