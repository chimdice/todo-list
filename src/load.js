const CreateProjectOnPage = function (name) {
    const projectElement = document.createElement('div');
    projectElement.id = `${name}-list`
    projectElement.textContent = name;
    return projectElement;
};

const LoadProjectOnPage = function (projectsSection, projectElement) {
    projectsSection.appendChild(projectElement);
};

const LoadProjectFourm = () => {
    const form = document.createElement('form');

    const label = document.createElement('label');
    label.setAttribute('for', 'project-label');
    label.textContent = "Project Name:"

    const input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'project-label');
    input.setAttribute('id', 'project-label');

    const inputButton = document.createElement("button");
    inputButton.setAttribute('type', 'submit');
    inputButton.setAttribute('value', 'submit');

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(inputButton);

    return form
};

const LoadProjectCreation = (main) => {
    while (main.firstChild) {
        main.removeChild(main.lastChild)
    };

    const form = LoadProjectFourm()
    main.appendChild(form)
    return form.lastChild
};
export {CreateProjectOnPage, LoadProjectOnPage, LoadProjectCreation}