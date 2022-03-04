console.log("something")

const wrapper = document.querySelector(".wrapper")
const searchInput = wrapper.querySelector("input")

searchInput.addEventListener("keyup", input => {
    if (input.key === "Enter" && input.target.value) {
        console.log(input.target.value)
    }
})