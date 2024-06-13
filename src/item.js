export const todoItemCreator = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority}
};

const addItem = (project, item) => {
    projects[project].push(item)
}