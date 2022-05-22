import todoComponent from "./todoComponent";

export default function projectViewer (proj) {
    const container = document.createElement('div')
    
    const title = container.appendChild(document.createElement('h2'));
    title.classList.add('ProjView-title');
    title.textContent = proj.getId();

    for (const item of proj.getEveryEntry()) {
        container.appendChild(todoComponent(item[1]));
    }
    
    return container
}