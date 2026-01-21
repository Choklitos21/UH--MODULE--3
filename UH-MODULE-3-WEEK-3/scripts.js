document.addEventListener('DOMContentLoaded', function() {
    renderList()
})

const addButton = document.getElementById("notes-form")

addButton.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    let data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    const list = document.getElementById("list")
    let notesSaved = JSON.parse(localStorage.getItem("notes")) || []

    const listElement = document.createElement("li")
    listElement.textContent = `Note #${notesSaved.length + 1} : ${data.notes}`

    const buttonElement = document.createElement("button")
    buttonElement.textContent = "Delete"
    buttonElement.type = "button"
    buttonElement.classList.add("deleteButtons")

    listElement.appendChild(buttonElement)

    list.appendChild(listElement)

    notesSaved.push({
        id: list.childElementCount ? list.childElementCount + 1 : "1",
        note: data.notes
    })
    localStorage.setItem("notes", JSON.stringify(notesSaved))
    console.log("¡Note added!")
    e.target.reset()
})

let listContainer = document.getElementById("list")

listContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteButtons")) {
        e.preventDefault();

        const listChildren = e.currentTarget.children;
        const liElements = Array.from(listChildren)
        const index = liElements.indexOf(e.target.parentElement);
        console.log(index)

        let notesSaved = JSON.parse(localStorage.getItem("notes")) || [];
        notesSaved.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesSaved));
        renderList();
    }
})

function renderList () {
    let notesSaved = JSON.parse(localStorage.getItem("notes")) || []
    const list = document.getElementById("list")
    list.innerHTML = ""

    for (let i = 0; i < notesSaved.length; i++) {
        const listElement = document.createElement("li")
        listElement.textContent = `Note #${i + 1} : ${notesSaved[i].note}`

        const buttonElement = document.createElement("button")
        buttonElement.textContent = "Delete"
        buttonElement.type = "button"
        buttonElement.classList.add("deleteButtons")

        listElement.appendChild(buttonElement)

        list.appendChild(listElement)
    }
}




