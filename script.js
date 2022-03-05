const wrapper = document.querySelector(".wrapper")
const searchInput = wrapper.querySelector("input")
const searchButton = wrapper.querySelector("button")

function search() {
    if (searchInput.value) {
        console.log(searchInput.value)
    } else {
        console.log("Bruh, did you even put anything? You can't put nothing and expect something out of it.")
    }
}

searchInput.addEventListener("keyup", input => {
    if (input.key === "Enter") {
        search()
    }
})

searchButton.addEventListener("click", () => {
    search()
})