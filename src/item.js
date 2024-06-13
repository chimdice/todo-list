const todoItemCreator = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority}
};

const projectCreator = (projects, name) => {
    projects[name] = [];
};

const projectDeletor = (projects, name) => {
    delete projects[name]
};

const addItem = (project, item) => {
    project.push(item)
};

const removeItem = (project, item) => {
    const index = project.indexOf(item);
    project.splice(index, 1);
};


class todoLists {
    constructor() {
        this.projects = {
            "default":[]
        }
    };

    addItemToList (project, item) {
        const projectList = this.projects[project];
        addItem(projectList, item);
    };

    removeItemToList (project, item) {
        const projectList = this.projects[project];
        removeItem(projectList, item);
    };

    addProject (name) {
        const projects = this.projects;
        projectCreator(projects, name);
    };

    deleteProject (name) {
        const projects = this.projects;
        projectDeletor(projects, name);
    };
}

export {todoItemCreator, todoLists}