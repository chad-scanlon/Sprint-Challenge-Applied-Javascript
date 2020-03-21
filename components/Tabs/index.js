// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        // console.log(response)
    })

const tabCreator = (tabs) => {

    const tab = document.createElement("div")
    const hotTopic1 = document.createElement("div")
    const hotTopic2 = document.createElement("div")
    const hotTopic3 = document.createElement("div")
    const hotTopic4 = document.createElement("div")
    const hotTopic5 = document.createElement("div")

    tab.appendChild(hotTopic1)
    tab.appendChild(hotTopic2)
    tab.appendChild(hotTopic3)
    tab.appendChild(hotTopic4)
    tab.appendChild(hotTopic5)

    tab.classList.add("tab")
    hotTopic1.classList.add("active-tab")
    hotTopic2.classList.add("active-tab")
    hotTopic3.classList.add("active-tab")
    hotTopic4.classList.add("active-tab")
    hotTopic5.classList.add("active-tab")

    hotTopic1.textContent = tabs[0]
    hotTopic2.textContent = tabs[1]
    hotTopic3.textContent = tabs[2]
    hotTopic4.textContent = tabs[3]
    hotTopic5.textContent = tabs[4]


    return tab
}

const newTab = document.querySelector(".topics")
    // newTab.appendChild(tabCreator())

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        // console.log(response)
        // response.data.topics.forEach(topic => {
        //     tabCreator(response.data.topics)
        // })
        newTab.appendChild(tabCreator(response.data.topics))
    })