import { clearPage } from "./load_project.js";

const main = document.querySelector('.main-section');

const loadToDo = (projectName, nameInfo) => {
    clearPage(main);
    let taskNubmer = 1;
    const todos = document.createElement("div");
    todos.id = "project-tasks";

    for (let task in projectName) {
        const infoDiv = document.createElement('div');
        infoDiv.id = "todo-task";

        const infoHeader = document.createElement('h4');
        infoHeader.textContent = `task ${taskNubmer}`
        taskNubmer++
        infoDiv.appendChild(infoHeader);

        const info = projectName[task]
        for (let key in info) {
            const partofInfo = document.createElement('p');
            partofInfo.textContent = `${key}: ${info[key]}`;
            infoDiv.appendChild(partofInfo);
        };

        todos.appendChild(infoDiv)
    };

    const nameTitle = document.createElement('h2');
    nameTitle.textContent = nameInfo;
    main.appendChild(nameTitle);
    main.appendChild(todos);

    const addButton = document.createElement('button');
    addButton.classList.add('item-button');
    addButton.textContent = "Add new task";
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('item-button');
    deleteButton.textContent = "Delete a task";

    const buttonHolder = document.createElement('div');
    buttonHolder.appendChild(addButton);
    buttonHolder.appendChild(deleteButton);
    main.appendChild(buttonHolder);

    return [addButton, deleteButton];
};

const LoadItemFourm = () => {
    const form = document.createElement('form');
    form.classList.add("item-form");

    const itemDivOne = document.createElement('div');
    const label = document.createElement('label');
    label.setAttribute('for', 'task-name');
    label.textContent = "Task Name:";
    const input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'task-name');
    input.setAttribute('id', 'task-name');
    input.setAttribute('required', '');
    const divder = document.createElement('div');
    divder.appendChild(input);
    itemDivOne.appendChild(label);
    itemDivOne.appendChild(divder);

    const itemDivTwo = document.createElement('div');
    const labelTwo = document.createElement('label');
    labelTwo.setAttribute('for', 'task-description');
    labelTwo.textContent = "Task Description:";
    const inputTwo = document.createElement("textarea");
    inputTwo.setAttribute('rows', '4');
    inputTwo.setAttribute('cols', '80');
    inputTwo.setAttribute('id', 'task-description');
    inputTwo.setAttribute('required', '');
    const divderTwo = document.createElement('div');
    divderTwo.appendChild(inputTwo);
    itemDivTwo.appendChild(labelTwo);
    itemDivTwo.appendChild(divderTwo);

    const itemDivThree = document.createElement('div');
    const labelThree = document.createElement('label');
    labelThree.setAttribute('for', 'task-date');
    labelThree.textContent = "Task Date:";
    const inputThree = document.createElement("input");
    inputThree.setAttribute('type', 'date');
    inputThree.setAttribute('name', 'task-date');
    inputThree.setAttribute('id', 'task-date');
    inputThree.setAttribute('required', '');
    const divderThree = document.createElement('div');
    divderThree.appendChild(inputThree);
    itemDivThree.appendChild(labelThree);
    itemDivThree.appendChild(divderThree);

    const field = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = "Priority";
    field.appendChild(legend);
    const options = ['high', 'normal', 'low'];
    for (let idx in options) {
        const priority = options[idx];
        const radioDivder = document.createElement('div');
        const labelRadio = document.createElement('label');
        labelRadio.setAttribute('for', `radio-${priority}`);
        labelRadio.textContent = priority;
        const inputRadio = document.createElement("input");
        inputRadio.setAttribute('type', 'radio');
        inputRadio.setAttribute('name', `radio-prio`);
        inputRadio.setAttribute('value', priority);
        inputRadio.setAttribute('id', `radio-${priority}`);
        inputRadio.setAttribute('required', '');
        radioDivder.appendChild(inputRadio);
        radioDivder.appendChild(labelRadio);
        field.appendChild(radioDivder);
    };

    const itemDivFive = document.createElement('div');
    const labelFive = document.createElement('label');
    labelFive.setAttribute('for', 'task-notes');
    labelFive.textContent = "Task Notes:";
    const inputFive = document.createElement("textarea");
    inputFive.setAttribute('rows', '4');
    inputFive.setAttribute('cols', '80');
    inputFive.setAttribute('id', 'task-notes');
    inputFive.setAttribute('required', '');
    const divderFive = document.createElement('div');
    divderFive.appendChild(inputFive);
    itemDivFive.appendChild(labelFive);
    itemDivFive.appendChild(divderFive);

    const inputButton = document.createElement("button");
    inputButton.setAttribute('type', 'submit');
    inputButton.id = 'submit-button';
    inputButton.textContent = 'Submit';

    form.appendChild(itemDivOne);
    form.appendChild(itemDivTwo);
    form.appendChild(itemDivThree);
    form.appendChild(field);
    form.appendChild(itemDivFive);
    form.appendChild(inputButton);

    return form
};

const LoadItemCreation = (main) => {
    clearPage(main)

    const header = document.createElement('h2');
    header.textContent = "Create Task Project!"
    main.appendChild(header)

    const form = LoadItemFourm()
    main.appendChild(form)
    return form.lastChild
};

/*Deletion*/
/*Delete Project */
const LoadDeleteItemFourm = (projectList) => {
    const form = document.createElement('form');

    for (let taskNumber in projectList) {
        const project = document.createElement('div');

        const label = document.createElement('label');
        label.setAttribute('for', `project-task-dele`);
        label.textContent = projectList[taskNumber]['title'];

        const input = document.createElement("input");
        input.setAttribute('type', 'checkbox');
        input.setAttribute('name', `project-task-dele`);
        input.setAttribute('id', `project-task-dele`);

        project.appendChild(input);
        project.appendChild(label);
        form.appendChild(project);
    };

    const inputButton = document.createElement("button");
    inputButton.setAttribute('type', 'submit');
    inputButton.id = 'submit-button';
    inputButton.textContent = 'Delete';

    form.appendChild(inputButton);

    return form
};

const LoadItemDeletion = (main, projectList) => {
    clearPage(main);
    const form = LoadDeleteItemFourm(projectList);
    const header = document.createElement('h2');
    header.textContent = "Choose Item(s) to Delete";
    main.appendChild(header);
    main.appendChild(form);
    return form.lastChild;
};

export {loadToDo, LoadItemCreation, LoadItemDeletion}