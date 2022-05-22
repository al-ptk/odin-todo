import library from './library.js';
import index from './stylesheets/index.css';
import projectViewer from './projectViewer.js';

const root = document.querySelector("#app");
root.appendChild(projectViewer(library.getProj("Default")));