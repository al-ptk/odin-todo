import projectBuilder from './project.js';

export default (function libraryBuilder () {
    const _library = {
        "Default": projectBuilder("Default"),
        "Hustle": projectBuilder("Hustle")
    };

    // Create
    function createProj (projId) {
        if (!_library[projId]) {
            _library[projId] = projectBuilder(projId);
        } else {
            duplicateWarning(projId);
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

    function getEveryEntry () {
        return Object.entries(_library);
    }

    function duplicateWarning (id) {
        console.log(`${id} already exists.`)
    }

    return {
        createProj,
        getProj,
        updateProj,
        delProj,
        getEveryEntry,
        debug: {
            printLibrary () {
                getEveryEntry().forEach(e => console.log(e));
            },
        }
    }
})();