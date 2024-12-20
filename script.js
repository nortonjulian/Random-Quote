//DOM Elements

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author")
const generatBtn = document.getElementById("generate-btn")
const quoteForm = document.getElementById("quote-form")
const quoteTxtInput = document.getElementById("quote-text")
const quoteAuthInput = document.getElementById("quote-author")
const quoteError = document.getElementById("quote-error")
const authError = document.getElementById("author-error")

const mainContent = document.querySelector("main")
const quotesListSect = document.createElement("section")
quotesListSect.id = "quotes-list"
quotesListSect.innerHTML = "<h2>All Quotes</h2>"
mainContent.appendChild(quotesListSect);

//Quote array
const quotes = [
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" }
]

//Add a new quote
function generateQuote() {
    const randIdx = Math.floor(Math.random() * quotes.length)
    const quote = quotes[randIdx];
    quoteElement.textContent = `${quote.text}`
    authorElement.textContent = `${quote.author}`
}

function addQuote(e) {
    e.preventDefault() //Prevents form submission
    const newQuote = quoteTxtInput.value.trim()
    console.log(newQuote)
    const newAuthor = quoteAuthInput.value.trim()
    console.log(newAuthor)
    let isValid = true;

    if(newQuote.length < 10){
        quoteError.textContent = "Quote must be at least 10 characters"
        isValid = false;
    } else {
        quoteError.textContent = ""
    }

    if(!newAuthor){
        authError.textContent = "Author is required";
        isValid = false;
    } else {
        authError.textContent = ""
    }

    if(isValid){
        //Add quotes to array
        quotes.push({text: newQuote, author: newAuthor})

        allQuoteList(newQuote, newAuthor)

        //clear the form
        quoteTxtInput.value = "";
        quoteAuthInput.value = "";

        alert("New quote added!")
    }
}

//Append quotes to "All Quotes" section
function allQuoteList(quote, author) {
    if(!quote || !author){
        console.log("Quote or author missing!");
        return
    }

    const newQuoteDiv = document.createElement("div")
    newQuoteDiv.innerHTML = `<strong>${quote}</strong> - <em>${author}</em>`
    quotesListSect.appendChild(newQuoteDiv)
}

function populateQuotes() {
    quotes.forEach((quoteObj) => {
        allQuoteList(quoteObj.text, quoteObj.author)
    })
}

generatBtn.addEventListener("click", generateQuote);
quoteForm.addEventListener("submit", addQuote)
