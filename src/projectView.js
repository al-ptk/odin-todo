import todoComponent from "./todoComponent";

export default function projectViewer (proj) {
    const container = document.createElement('div');
    container.classList.add("pjview-container")
    
    const title = container.appendChild(document.createElement('h2'));
    title.classList.add('pjview-title');
    title.textContent = proj.getId();

    const todoBucket = document.createElement("div");
    todoBucket.classList.add("pjview-bucket");
    for (const item of proj.getEveryEntry()) {
        todoBucket.appendChild(todoComponent(item[1]));
    }
    container.appendChild(todoBucket);
    
    return container
}