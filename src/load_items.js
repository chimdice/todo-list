import { clearPage } from "./load_project.js";

const main = document.querySelector('.main-section');

const loadToDo = (projectName) => {
    clearPage(main);
    let taskNubmer = 1;

    for (let task in projectName) {
        const infoDiv = document.createElement('div');

        const infoHeader = document.createElement('h4');
        infoHeader.textContent = `task ${taskNubmer}`
        taskNubmer++
        infoDiv.appendChild(infoHeader);

        const info = projectName[task]
        for (let key in info) {
            console.log(key);
            const partofInfo = document.createElement('p');
            partofInfo.textContent = `${key}: ${info[key]}`;
            infoDiv.appendChild(partofInfo);
        };

        main.appendChild(infoDiv)
    };
};

export {loadToDo}