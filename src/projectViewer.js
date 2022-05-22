import newTodoModal from './newTodoModal';
import style from './stylesheets/projectViewer.css';
import todoComponent from "./todoComponent";

export default function projectViewer (proj) {
    const container = document.createElement('div');
    container.classList.add("pjview-container")

    // Project Title
    const title = container.appendChild(document.createElement('h2'));
    title.classList.add('pjview-title');
    title.textContent = proj.getId();

    // Project Todo List
    const todoBucket = document.createElement("div");
    todoBucket.classList.add("pjview-bucket");
    for (const item of proj.getEveryEntry()) {
        todoBucket.appendChild(todoComponent(item[1]));
    }
    container.appendChild(todoBucket);

    // Project Add Todo
    const newTodoBtn = document.createElement("button");
    newTodoBtn.classList.add("pjview-addBtn");
    container.appendChild(newTodoBtn);
    newTodoBtn.textContent = "+";
    newTodoBtn.addEventListener('click', e => {
        container.appendChild(newTodoModal());
    });

    container.appendChild(newTodoModal());

    return container
}