const popup = document.querySelector(".popup-container")
const button = document.querySelector(".share-holder")

button.addEventListener("click", (e) => {
  e.stopPropagation()
  popup.classList.toggle("show")
})

document.querySelector("body").addEventListener("click", () => {
  popup.classList.remove("show")
})
