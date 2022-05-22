
const todoManager = {
        // Create
        createTodo (todoId, todoData) {
            _bucket[todoId] = todoData;
        },
    
        // Read
         getTodo (todoId) {
            return _bucket[todoId];
        },
    
        // Update
        updateTodo (todoId, todoData) {
            _bucket[todoId] = todoData;
        },
    
        // Delete
        delTodo (todoId) {
            delete _bucket[todoId];
        }
}

export default function projectBuilder (projId) {
    return Object.assign(Object.create(todoManager), 
        {
            _bucket: {},
            projId,
        }
    );
};