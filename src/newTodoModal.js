import style from "./stylesheets/newTodoModal.css";

export default function newTodoModal () {
    const container = document.createElement('div');
    container.classList.add("ntm-container");

    // Title
    const titleInput = document.createElement("input");
    titleInput.classList.add('ntm-title');
    titleInput.placeholder = "Title..."
    container.appendChild(titleInput);

    // Due Date
    const dueToInput = document.createElement("input");
    dueToInput.classList.add('ntm-date');
    dueToInput.type = "date";
    container.appendChild(dueToInput);
    
    // Description
    const descInput = document.createElement('input');
    descInput.classList.add('ntm-description');
    descInput.type = "textarea";
    descInput.placeholder = "Description..."
    container.appendChild(descInput);

    // Actions
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('ntm-btnContainer');
    container.appendChild(btnContainer);

    const saveBtn = document.createElement('button');
    saveBtn.classList.add('ntm-save');
    saveBtn.textContent = "Save"
    btnContainer.appendChild(saveBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('ntm-cancel');
    cancelBtn.textContent = "Cancel";
    btnContainer.appendChild(cancelBtn);

    return container;
}