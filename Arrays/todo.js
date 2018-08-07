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


const deleteTodo = function (todoList, todoTitle){
    const index = todoList.findIndex(function (todoRemove, index) {
        return todoRemove.todo.toLowerCase() === todoTitle.toLowerCase()
    }) 
    return todoList.splice([index], 1)
    // return todoList.splice(todoList[index], 0) 
}

const getThingsToDo = function (todoList) {
    return todoList.filter(function (todo) {
        // const isTodoMatch = todo.todo.toLowerCase().includes(query.toLowerCase())
        return !todo.completed 
         
    })
}

const sortTodos = function (todoList) {
    todoList.sort(function (a, b){
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}


sortTodos(todoList.sort())

console.log(todoList)
// console.log(getThingsToDo(todoList))
  

// const todoRemove =  deleteTodo(todoList, 'learn js')
// console.log(todoList)


























// todoList.splice(2, 1)
// todoList.push('Give Blizzard Pill')
// todoList.shift()

// console.log(`You have ${todoList.length} things to do`)

// todoList.forEach(function (item, index) {
//     console.log(`${index + 1}. ${item}`)
// })

// for (let i = 0; i < todoList.length; i++) {
//     console.log(`${i + 1}. ${todoList[i]}`)
// }