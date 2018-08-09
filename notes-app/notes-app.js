/*jshint esversion:6*/

const notes = [ {
    title: 'My next trip',
    body: 'I would like to go to Switzerland'
}, {
    title: 'Habits to work on',
    body: 'Exercise and eat healthier'
}, {
    title: 'Office modification',
    body: 'Lap desk'
}]

const filters = {
    searchText: ''
};

// const user = {
//   name:'Ethan',
//   age: 28
// };

// const userJSON = JSON.stringify(user);
// localStorage.setItem('user', userJSON);

const userJSON = localStorage.getItem('user');
const user = JSON.parse(userJSON);

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    document.querySelector('#notes').innerHTML = '';
    
    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p');
        noteEl.textContent = note.title;
        document.querySelector('#notes').appendChild(noteEl);
    });
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function (e) {
    console.log('Did this work?');
    e.target.textContent = 'The button was clicked';
});


document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});


document.querySelector('#filter-by').addEventListener('change', function (e) {
  console.log(e.target.value)
})
//DOM - Document Object Model

// const p = document.querySelector('p')
// p.remove()

// const ps = document.querySelectorAll('p');

// ps.forEach(function (p) {;
//     p.textContent = '******';
//     // console.log(p.textContent)
// });

// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'This is a new element from Javascript';
// document.querySelector('body').appendChild(newParagraph)