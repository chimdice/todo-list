const todoItemCreator = (title, description, due, priority, notes) => {
    return {title, description, due, priority, notes}
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


export {todoItemCreator, projectCreator, projectDeletor, addItem, removeItem}