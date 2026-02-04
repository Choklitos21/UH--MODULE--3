import * as storage from "./js/storage.js"
import {updateTask} from "./js/storage.js";

document.addEventListener("DOMContentLoaded", async function() {
    await renderTasks()
});

async function renderTasks() {
    let tasksList = document.getElementById("table-container")
    tasksList.innerHTML = ``
    let tasks = await storage.getTasks()

    tasks.forEach( (task) => {
        let newElement = document.createElement("li")
        newElement.classList.add("list-group-item", "d-flex", "align-items-center", "justify-content-between")
        newElement.innerHTML = `
        <span>${task.title}</span>
        <span>${task.description}</span>
        <div>
            <button id="edit-${task.id}" type="button" class="btn btn-warning editButton" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Edit
            </button>
            <button type="button" class="btn btn-danger deleteButton" id="delete-${task.id}">
                Delete
            </button>
        </div>
        `
        tasksList.append(newElement)
    })

    let editButtons = document.querySelectorAll(".editButton")

    editButtons.forEach( button => {
        button.addEventListener("click",async (e) => {
            let taskId = (e.currentTarget.id).split("-")[1];
            let oldTask = await storage.findOneTask(taskId)
            document.getElementById("titleUpdate").value = oldTask.title
            document.getElementById("descriptionUpdate").textContent = oldTask.description
            document.querySelector(".task-id").id = taskId
        })
    })

    let deleteButtons = document.querySelectorAll(".deleteButton")

    deleteButtons.forEach( button => {
        button.addEventListener("click",async (e) => {
            let taskId = (e.currentTarget.id).split("-")[1];
            await deleteTask(taskId)
            await renderTasks()
        })
    })
}

async function deleteTask(taskId) {
    await storage.deleteTask(taskId)
}

document.getElementById("createTaskForm").addEventListener("submit", async (e) => {
    e.preventDefault()

    let formData = new FormData(e.target)
    let data = {}
    formData.forEach((value, key) => {
        console.log(`data[${key}] = ${value}`)
        data[key] = value
    })
    console.log(data)

    await storage.saveTask(data)
    await renderTasks()

    e.target.reset()
})

document.getElementById("updateTaskForm").addEventListener("submit", async (e) => {
    e.preventDefault()

    let formData = new FormData(e.target)
    let data = {}
    formData.forEach((value, key) => {
        console.log(`data[${key}] = ${value}`)
        data[key] = value
    })
    console.log(data)

    let taskId = document.querySelector(".task-id").id
    await storage.updateTask(taskId, {
        title: data.titleUpdate,
        description: data.descriptionUpdate
    })
    await renderTasks()

    e.target.reset()
})

