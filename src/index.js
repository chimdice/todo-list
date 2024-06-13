import { todoItemCreator, todoLists} from "./item.js";

const mainLists = new todoLists()

const item1 = todoItemCreator("One", "Two", "Three", "Four");
mainLists.addItemToList("default", item1)

mainLists.addProject("homework");
const item2 = todoItemCreator("Five", "Six", "Seven", "Eight");
mainLists.addItemToList("homework", item2)

mainLists.removeItemToList("default", item1)
mainLists.deleteProject("homework")


console.log(mainLists.projects);