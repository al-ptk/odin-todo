
export default function projectBuilder (id) {
    const _bucket = {};

    // Create
    function createTodo (todoId, todoData) {
        _bucket[todoId] = todoData;
    };

    // Read
    function getTodo (todoId) {
        return _bucket[todoId];
    };

    // Update
    function updateTodo (todoId, todoData) {
        _bucket[todoId] = todoData;
    };

    // Delete
    function delTodo (todoId) {
        delete _bucket[todoId];
    };

    function getEveryKey () {
        return Object.keys(_bucket);
    };

    return {
        createTodo,
        getTodo,
        delTodo,
        updateTodo,
        getEveryKey,
    };
};