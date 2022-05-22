import style from './stylesheets/libraryManager.css';

export default function libraryManager (library) {
    const container = document.createElement('div');
    container.classList.add('libmgr-container');

    // New Project Button
    const newProj = document.createElement('button');
    container.appendChild(newProj);
    newProj.classList.add('libmgr-newProjBtn');
    newProj.textContent = "New Project";

    // Project List
    const projList = document.createElement('div');
    projList.classList.add('libmgr-projList');
    for (const proj of library.getEveryEntry()) {
        const projTitle = document.createElement('h4');
        projTitle.textContent = proj[0];
        projList.appendChild(projTitle);
    }
    container.appendChild(projList);

    return container;
}