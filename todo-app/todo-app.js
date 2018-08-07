const todoList = [{
    todo: 'Learn JS',
    completed: false
}, {
    todo: 'Exercise',
    completed: false
}, {
    todo: 'Eat Healthy',
    completed: false

}, {
    todo: 'Walk Dog',
    completed: true
}, {
    todo: 'Get to bed early',
    completed: true
}]

// You have x todos left






document.querySelector('#add-todo').addEventListener('click', function () {
    console.log('You have added a new todo');
});

document.querySelector('#todo-text').addEventListener('input', function(e) {
    console.log(e.target.value);
});



const filters = {
    searchText: ''
}

const renderTodos = function (todoList, filters) {
    const filteredTodos = todoList.filter(function (todo) {
        return todo.todo.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed;
    });

    document.querySelector('#todos').innerHTML = '';
    
    const todoCount = document.createElement('h2');
    todoCount.textContent = `You have ${incompleteTodos.length} todos left`;
    document.querySelector('#todos').appendChild(todoCount);
    
    
    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p');
        p.textContent = todo.todo;
        document.querySelector('#todos').appendChild(p);
       
    });

   

};

renderTodos(todoList, filters);

document.querySelector('#search-todos').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderTodos(todoList, filters);
});



