const container = document.querySelector(".container")

for (let i = 0; i < 256; i++) {
    const box = document.createElement("div")
    box.setAttribute("class", "box")
    box.addEventListener("mouseover", () => {
        box.classList.add("painted")
    })
    container.appendChild(box)
}

