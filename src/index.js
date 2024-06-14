import { CreateProjectOnPage, LoadProjectOnPage, LoadProjectCreation } from "./load.js";
import { todoLists } from "./todo.js";
import "./style.css";

const todosSection = document.querySelector(".sidebar-content");
const addProject = document.querySelector(".add-project");
const main = document.querySelector('.main-section')

const mainLists = new todoLists(todosSection);

addProject.addEventListener("click", () => {
    const submit = LoadProjectCreation(main)
    submit.addEventListener("click", (event) => {
        const projectName = document.querySelector("#project-label").value;
        mainLists.addProject(projectName);
        const projectSideBar = CreateProjectOnPage(projectName);
        LoadProjectOnPage(todosSection, projectSideBar)
        console.log(mainLists.projects);
        event.preventDefault()
    })
})

console.log(mainLists.projects);