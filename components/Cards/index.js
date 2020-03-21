// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.



const cardCreator = (objectData) => {
    const card = document.createElement("div")
    const header = document.createElement("div")
    const author = document.createElement("div")
    const imageContainer = document.createElement("div")
    const image = document.createElement("img")
    const byLine = document.createElement("span")

    card.appendChild(header)
    card.appendChild(author)
    author.appendChild(imageContainer)
    imageContainer.appendChild(image)
    author.appendChild(byLine)

    card.classList.add("card")
    header.classList.add("headline")
    author.classList.add("author")
    byLine.classList.add("span")
    imageContainer.classList.add("img-container")

    objectData.forEach(element => {
        let header = objectData.headline
        let image = objectData.authorPhoto
        let author = objectData.authorName
    })
    header.textContent = objectData.headline
    image.textContent = objectData.authorPhoto
    author.textContent = objectData.authorName


    return card
}

const addCard = document.querySelector(".cards-container")

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response.data.articles)
    })

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        let java = response.data.articles.javascript
        java.forEach(element => {
            addCard.appendChild(cardCreator(java))
        })
    })
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        let boot = response.data.articles.bootstrap
        boot.forEach(element => {
            addCard.appendChild(cardCreator(boot))
        })
    })
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        let tech = response.data.articles.technology
        tech.forEach(element => {
            addCard.appendChild(cardCreator(tech))
        })
    })
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        let jquery = response.data.articles.jquery
        jquery.forEach(element => {
            addCard.appendChild(cardCreator(jquery))
        })
    })
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        let node = response.data.articles.node
        node.forEach(element => {
            addCard.appendChild(cardCreator(node))
        })
    })