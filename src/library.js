export default (function libraryBuilder () {
    const _library = {};

    // Create
    function createProj (projId, projData) {
        _library[projId] = projData;
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