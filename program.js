const container = document.querySelector(".container")

function createGrid (boxAmount = 16) {

for (let i = 0; i < boxAmount*boxAmount; i++) {
    const box = document.createElement("div")
    box.setAttribute("class", "box")

    let boxSize = (400 / boxAmount) - 2;
    box.style.width = `${boxSize}px`
    box.style.height = `${boxSize}px`

    box.addEventListener("mouseover", () => {
        box.classList.add("painted")
    })
    container.appendChild(box)
}

}

createGrid()