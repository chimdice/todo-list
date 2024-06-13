import { CreateProjectOnPage, LoadProjectOnPage, LoadProjectCreation } from "./load.js";
import { todoLists } from "./todo.js";
import "./style.css";

const todosSection = document.querySelector(".sidebar-content");
const addProject = document.querySelector(".add-project");
const main = document.querySelector('.main-section')

const mainLists = new todoLists(todosSection);

addProject.addEventListener("click", () => {
    const submit = LoadProjectCreation(main)
    console.log(submit);
})

console.log(mainLists.projects);