import projectBuilder from './project.js';

export default (function libraryBuilder () {
    const _library = {};

    // Create
    function createProj (projId) {
        _library[projId] = projectBuilder(projId);
    }

    // Read
    function getProj (projId) {
        return _library[projId];
    }

    // Update
    function updateProj (projId, projData) {
        _library[projId] = projData;
    }

    function delProj (projId) {
        delete _library[projId];
    }

    return {
        createProj,
        getProj,
        updateProj,
        delProj
    }
})();