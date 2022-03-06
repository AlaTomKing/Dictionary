const wrapper = document.querySelector(".wrapper")
const searchInput = wrapper.querySelector("input")
const searchButton = wrapper.querySelector("button")

function search(word) {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    console.log(url)
    if (word) {
        console.log(word)
        console.log(fetch(url).then(response => response.json()).then((result) => {
            console.log(result)
        }))
    } else {
        console.log("Error: Input empty")
    }
}

searchInput.addEventListener("keyup", input => {
    if (input.key === "Enter") {
        search(searchInput.value)
    }
})

searchButton.addEventListener("click", () => {
    search(searchInput.value)
})