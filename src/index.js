import library from './library.js';
import style from './stylesheets/style.css';
import projectViewer from './projectView.js';

const root = document.querySelector("#app");

const task = {
    title: "Greetings, Mortal",
    description: "This is a mock message for test purposes.",
    checked: false,
    dueTo: "01/01/1970",
}

const task2 = {
    title: "Hello there!",
    description: "General Kenobi!",
    checked: false,
    dueTo: "01/01/1970",
}

const id = "Hustle";
library.createProj(id);
library.getProj(id).createTodo(task.title, task);
library.getProj(id).createTodo(task2.title, task2);

root.appendChild (projectViewer (library.getProj(id)));