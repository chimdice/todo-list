import {todoItemCreator, projectCreator, projectDeletor, addItem, removeItem} from './item.js';
import {CreateProjectOnPage, LoadProjectOnPage, LoadProjectCreation} from './load.js'

export class todoLists {
    constructor(section) {
        this.projects = {
            "default":[]
        };

        this.default = CreateProjectOnPage('default')
        LoadProjectOnPage(section, this.default);
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
