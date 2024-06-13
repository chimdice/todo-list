import { todoItemCreator } from "./item";


const projects = {
    "default": []
};

const item1 = todoItemCreator("One", "Two", "Three", "Four");
projects.default.push(item1);

console.log(projects);