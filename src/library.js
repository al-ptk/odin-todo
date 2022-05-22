import projectBuilder from './project.js';

export default (function libraryBuilder () {
    const _library = {};

    // Create
    function createProj (projId) {
        if (!_library[projId]) {
            _library[projId] = projectBuilder(projId)
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

    function getEveryKey () {
        return Object.keys(_library);
    }

    function duplicateWarning (projId) {
        console.log(`${projId} already exists.`)
    }

    return {
        createProj,
        getProj,
        updateProj,
        delProj,
        getEveryKey,
        debug: {
            printLibrary () {
                getEveryKey().forEach(e => console.log(e));
            },

        }
    }
})();