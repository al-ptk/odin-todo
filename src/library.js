import projectBuilder from './project.js';

export default (function libraryBuilder () {
    const _library = {};

    // Create
    function createProj (projId) {
        if (!_library[projId]) {
            _library[projId] = projectBuilder(projId)
        }
    }

    // Read
    function getProj (projId) {
        return _library[projId];
    }

    // Update
    function updateProj (projId, projData) {
        _library[projId] = projData;
    }

    // Delete
    function delProj (projId) {
        delete _library[projId];
    }

    function getEveryProj () {
        return Object.keys(_library);
    }

    function printLibrary () {
        getEveryProj().forEach(e => console.log(e));
    }

    return {
        createProj,
        getProj,
        updateProj,
        delProj,
        getEveryProj,
        debug: {
            printLibrary
        }
    }
})();