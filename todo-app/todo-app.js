/*jshint esversion:6*/

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




const filters = {
    searchText: '',
    hideCompleted: false
}

const renderTodos = function (todoList, filters) {
    let filteredTodos = todoList.filter(function (todo) {
        return todo.todo.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    filteredTodos = filteredTodos.filter(function (todo) {
      if (filters.hideCompleted == true) {
        return !todo.completed;
      } else {
        return true;
      }
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

document.querySelector('#add-todo').addEventListener('submit', function (e) {
  const p = document.createElement('p');
  e.preventDefault();
  p.textContent = e.target.elements.addTodo.value; 
  todoList.push ({todo: e.target.elements.addTodo.value, completed: false});
  document.querySelector('#todos').appendChild(p);
  e.target.elements.addTodo.value = '';
  renderTodos(todoList, filters);
});

document.querySelector('#hide-completed').addEventListener('change', function(e) {
  filters.hideCompleted = e.target.checked;
  renderTodos(todoList, filters);
});





