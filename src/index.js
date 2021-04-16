document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("create-task-form").addEventListener("submit", (event) => {
    event.preventDefault()
    document.getElementById("tasks").innerHTML += `<li>${document.getElementById("new-task-description").value}</li>`
    event.target.reset()
  })
});
