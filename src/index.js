document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("create-task-form")
  form.addEventListener("click", createTaskToDo)
})

function createTaskToDo(event) {
  event.preventDefault()
  const task = document.querySelector("#new-task-description").value
  let newDiv = document.createElement("div")
  document.getElementById("tasks").appendChild(newDiv)
  newDiv.textContent = task
  }
  

