import { CreateProjectOnPage, LoadProjectOnPage, LoadProjectCreation, LoadProjectDeletion, clearPage} from "./load_project.js";
import { todoLists } from "./todo.js";
import { todoItemCreator } from "./item.js";
import { loadToDo, LoadItemCreation, LoadItemDeletion} from "./load_items.js";
import "./style.css";

const todosSection = document.querySelector(".sidebar-content");
const addProject = document.querySelector(".add-project");
const main = document.querySelector('.main-section');
const deleteButton = document.querySelector(".delete-project");

const mainLists = new todoLists(todosSection);
const item1 = todoItemCreator('1', '2', '3', '4', '5');
mainLists.addItemToList('default', item1);

const getSideBarName = function () {
    const todosSectionName = document.querySelectorAll(".sidebar-content p");
    todosSectionName.forEach(name => {
        name.addEventListener('click', () => {
            let nameInfo = name.textContent;
            const itemButtons = loadToDo(mainLists.projects[nameInfo], nameInfo);

            const addItem = itemButtons[0];
            const deleteItem = itemButtons[1];

            addItem.addEventListener("click", ()=> {
                const submit = LoadItemCreation(main);
                submit.addEventListener("click", (event) => {
                    const taskName = document.querySelector('#task-name');
                    const taskDesc = document.querySelector('#task-description');
                    const taskDate = document.querySelector('#task-date');
                    const taskPriority = document.querySelector('input[name="radio-prio"]:checked');
                    const taskNotes = document.querySelector('#task-notes');

                    const newItem = todoItemCreator(
                        taskName.value,
                        taskDesc.value,
                        taskDate.value,
                        taskPriority.value,
                        taskNotes.value 
                    );

                    mainLists.addItemToList(nameInfo, newItem)
                    clearPage(main);
                    event.preventDefault()
                });
            });

            deleteItem.addEventListener('click', ()=> {
                const submit = LoadItemDeletion(main, mainLists.projects[nameInfo]);
                submit.addEventListener('click', (event) => {
                    const options = document.querySelectorAll('#project-task-dele');
                    const titles = [];
                    options.forEach(option => {
                        if (option.checked) {
                            const label = option.nextElementSibling;
                            titles.push(label.textContent);
                        };
                    });
                    for (let task in mainLists.projects[nameInfo]){
                        const taskTitle = mainLists.projects[nameInfo][task];
                        if (titles.includes(taskTitle['title'])){
                            mainLists.removeItemToList(nameInfo, taskTitle);
                        };
                    };
                    clearPage(main);
                    event.preventDefault();
                });
            });
        });
    });
};

getSideBarName();

addProject.addEventListener("click", () => {
    clearPage(main)
    const submit = LoadProjectCreation(main)
    submit.addEventListener("click", (event) => {
        const projectName = document.querySelector("#project-label");
        const projectNameValue = projectName.value
        mainLists.addProject(projectNameValue);
        const projectSideBar = CreateProjectOnPage(projectNameValue);
        LoadProjectOnPage(todosSection, projectSideBar)
        projectName.value = ''
        getSideBarName();
        clearPage(main);
        event.preventDefault()
    });
});

deleteButton.addEventListener("click", () => {
    clearPage(main)
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
            const keyName = checkedProjects[key];
            const id = document.querySelector(`#${keyName}-list`);
            todosSection.removeChild(id);
            mainLists.deleteProject(keyName);
        };

        clearPage(main)
        event.preventDefault();
    });
});

