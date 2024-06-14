import { CreateProjectOnPage, LoadProjectOnPage, LoadProjectCreation, LoadProjectDeletion, clearPage} from "./load.js";
import { todoLists } from "./todo.js";
import "./style.css";

const todosSection = document.querySelector(".sidebar-content");
const addProject = document.querySelector(".add-project");
const main = document.querySelector('.main-section');
const deleteButton = document.querySelector(".delete-project");

const mainLists = new todoLists(todosSection);

addProject.addEventListener("click", () => {
    const submit = LoadProjectCreation(main)
    submit.addEventListener("click", (event) => {
        const projectName = document.querySelector("#project-label");
        const projectNameValue = projectName.value
        mainLists.addProject(projectNameValue);
        const projectSideBar = CreateProjectOnPage(projectNameValue);
        LoadProjectOnPage(todosSection, projectSideBar)
        projectName.value = ''
        console.log(mainLists.projects);
        event.preventDefault()
    })
})

deleteButton.addEventListener("click", () => {
    const submit = LoadProjectDeletion(main, mainLists.projects);

    submit.addEventListener('click', (event) => {
        const options = document.querySelectorAll('#project-check');
        const checkedProjects = [];
        options.forEach(option => {
            if (option.checked) {
                const label = option.nextElementSibling;
                checkedProjects.push(label.textContent);
            };
        });

        for (let key in checkedProjects) {
            const id = document.querySelector(`${key}-list`)
            todosSection.removeChild(id);
            mainLists.deleteProject(key);
        };

        clearPage(main);
        console.log(mainLists.projects);
        event.preventDefault();
    });
});

console.log(mainLists.projects);