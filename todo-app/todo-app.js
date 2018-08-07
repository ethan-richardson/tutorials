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




const incompleteTodos = todoList.filter(function (todo) {
    return !todo.completed;
});

const todoCount = document.createElement('h2');
todoCount.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector('body').appendChild(todoCount);



todoList.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.todo
    document.querySelector('body').appendChild(p);
});

document.querySelector('#add-todo').addEventListener('click', function () {
    console.log('You have added a new todo')
})

