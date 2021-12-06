let myLibrary = []

const addBookForm = document.querySelector('.form-wrapper')
const submitButton = document.querySelector('.submit');
const addBookButton = document.querySelector('.open-form');
const closeFormButton = document.querySelector('.close');

let book

addBookButton.addEventListener('click', () => {
    addBookForm.style.display = 'block'
});

closeFormButton.addEventListener('click', () => {
    addBookForm.style.display = 'none'
});

submitButton.addEventListener('click', addBookToLib); 

class Book {
    constructor(title, author, pages, read) {
    this.title = form.title.value
    this.author = form.author.value
    this.pages = form.pages.value
    this.read = form.read.checked
    this.index = myLibrary.length
    }
}    

function addBookToLib() {
    event.preventDefault()
    addBookForm.style.display = 'none'
    book = new Book(title, author, pages, read)
    myLibrary.push(book)
    displayAllBooks()
    document.querySelector('form').reset()
}

function displayAllBooks() {
    const container = document.querySelector('.card-container')
    const cards = document.querySelectorAll('.card')
    cards.forEach(card => {
        container.removeChild(card)
    })
    for(i = 0; i < myLibrary.length; i++){
        displayNewBook(myLibrary[i])
    }    
}

function displayNewBook(obj) {
    console.log(obj.read)
    const cardContainer = document.querySelector('.card-container')
    const card = document.createElement('div')
    const cardContent = document.createElement('div')
    const title = document.createElement('h2')
    const author = document.createElement('h3')
    const pages = document.createElement('p')
    const readButton = document.createElement('button')
    const removeButton = document.createElement('button')
    
    cardContainer.appendChild(card)
    
    card.classList.add('card')
    card.setAttribute('id', myLibrary.indexOf(obj))
    
    cardContent.classList.add('card-content')
    card.appendChild(cardContent)

    title.classList.add('title')
    title.innerText = obj.title
    card.appendChild(title)

    author.classList.add('author')
    author.innerText = obj.author
    card.appendChild(author)

    pages.classList.add('pages')
    pages.innerText = obj.pages
    card.appendChild(pages)

    readButton.classList.add('read')
    card.appendChild(readButton)
    if(obj.read === false){
        readButton.innerText = "Not read yet."
    } else {
        readButton.innerText = "Finished Reading"
    }

    readButton.addEventListener('click', () => {
        if(obj.read === true){
            obj.read = false
        } else {
            obj.read = true
        }
        displayAllBooks()
    })

    removeButton.classList.add('.remove')
    removeButton.innerText = 'Remove Book'
    card.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(obj, 1))
        displayAllBooks()
    })
}
