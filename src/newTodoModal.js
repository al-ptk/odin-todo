import style from "./stylesheets/newTodoModal.css";

export default function newTodoModal () {
    const container = document.createElement('div');
    container.classList.add("ntm-container");

    // Title
    const titleInput = document.createElement("input");
    container.appendChild(titleInput);

    // Due Date
    const dueToInput = document.createElement("input");
    dueToInput.type = "date";
    container.appendChild(dueToInput);
    
    // Description
    const descInput = document.createElement('input');
    descInput.type = "textarea";
    container.appendChild(descInput);

    return container;
}