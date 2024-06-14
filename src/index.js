import { CreateProjectOnPage, LoadProjectOnPage, LoadProjectCreation, LoadProjectDeletion, clearPage} from "./load_project.js";
import { todoLists } from "./todo.js";
import { todoItemCreator } from "./item.js";
import { loadToDo } from "./load_items.js";
import "./style.css";

const todosSection = document.querySelector(".sidebar-content");
const addProject = document.querySelector(".add-project");
const main = document.querySelector('.main-section');
const deleteButton = document.querySelector(".delete-project");

const mainLists = new todoLists(todosSection);
const item1 = todoItemCreator('1', '2', '3', '4', '5');
mainLists.addItemToList('default', item1);

const getSideBarName = function () {
    const todosSectionName = document.querySelectorAll(".sidebar-content div");
    todosSectionName.forEach(name => {
        name.addEventListener('click', () => {
            let nameInfo = name.textContent;
            console.log(mainLists.projects[nameInfo]);
            loadToDo(mainLists.projects[nameInfo]);
        });
    });
};

getSideBarName();

addProject.addEventListener("click", () => {
    const submit = LoadProjectCreation(main)
    submit.addEventListener("click", (event) => {
        const projectName = document.querySelector("#project-label");
        const projectNameValue = projectName.value
        mainLists.addProject(projectNameValue);
        const projectSideBar = CreateProjectOnPage(projectNameValue);
        LoadProjectOnPage(todosSection, projectSideBar)
        projectName.value = ''
        getSideBarName();
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