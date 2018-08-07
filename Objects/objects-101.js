let myBook =  {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

let me = {
    name: 'Ethan',
    age: 28,
    city: 'New York'
}

console.log(`${me.name} is ${me.age} and lives in ${me.city}`)

me.age = me.age + 1

console.log(`${me.name} is ${me.age} and lives in ${me.city}`)
