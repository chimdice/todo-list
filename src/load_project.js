const clearPage = (main) => {
    while (main.firstChild) {
        main.removeChild(main.lastChild)
    };
};

/*Create Project */

const CreateProjectOnPage = function (name) {
    const projectElement = document.createElement('p');
    projectElement.id = `${name}-list`;
    projectElement.textContent = name;
    projectElement.setAttribute('style', 'text-align:center');
    
    return projectElement;
};

const LoadProjectOnPage = function (projectsSection, projectElement) {
    projectsSection.appendChild(projectElement);
};

const LoadProjectFourm = () => {
    const form = document.createElement('form');

    const label = document.createElement('label');
    label.setAttribute('for', 'project-label');
    label.textContent = "Project Name:";

    const input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'project-label');
    input.setAttribute('id', 'project-label');

    const inputButton = document.createElement("button");
    inputButton.setAttribute('type', 'submit');
    inputButton.id = 'submit-button';
    inputButton.textContent = 'Submit';

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(inputButton);

    return form
};

const LoadProjectCreation = (main) => {
    clearPage(main)

    const header = document.createElement('h2');
    header.textContent = "Create New Project!"
    main.appendChild(header)

    const form = LoadProjectFourm()
    main.appendChild(form)
    return form.lastChild
};

/*Delete Project */
const LoadDeleteFourm = (todos) => {
    const form = document.createElement('form');

    for (let key in todos) {
        const project = document.createElement('div');

        const label = document.createElement('label');
        label.setAttribute('for', `project-check`);
        label.textContent = key;

        const input = document.createElement("input");
        input.setAttribute('type', 'checkbox');
        input.setAttribute('name', `project-check`);
        input.setAttribute('id', `project-check`);

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

const LoadProjectDeletion = (main, todos) => {
    clearPage(main);
    const form = LoadDeleteFourm(todos);
    const header = document.createElement('h2');
    header.textContent = "Choose Project(s) to Delete";
    main.appendChild(header);
    main.appendChild(form);
    return form.lastChild;
};

export {CreateProjectOnPage, LoadProjectOnPage, LoadProjectCreation, LoadProjectDeletion, clearPage}