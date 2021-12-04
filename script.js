let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return `${title} by ${author}, ${pages}, ${read} yet.`
    }
}

function addBook() {
    // if the book exists (all properties match), don't add it
}

function displayBook() {
    // 
}