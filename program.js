const container = document.querySelector(".container")

function createGrid (boxAmount = 16) {

for (let i = 0; i < boxAmount*boxAmount; i++) {
    const box = document.createElement("div")
    box.setAttribute("class", "box")

    let boxSize = (400 / boxAmount) - 2;
    box.style.width = `${boxSize}px`
    box.style.height = `${boxSize}px`

    if (boxAmount > 35) {
        box.style.borderRadius = "1px"
    }

    box.addEventListener("mouseover", () => {
        box.classList.add("painted")
    })
    container.appendChild(box)
}

}

function destroyGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
}

createGrid()

const button = document.querySelector("button")

function popup() {
    let boxAmount = +prompt("Set the number of squares per side for the new grid.")
    if (boxAmount > 50) {
        alert("Too many boxes!")
        return undefined;
    }
    else if (boxAmount === 0) return undefined;
    else return boxAmount;
}


button.addEventListener("click", () => {
    destroyGrid()
    createGrid(popup())
})