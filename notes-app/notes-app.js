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


document.querySelector('#create-note').addEventListener('click', function (e) {
    console.log('Did this work?');
    e.target.textContent = 'The button was clicked';
});

document.querySelector('#remove-all').addEventListener('click', function() {
    document.querySelectorAll(".note").forEach(function(note) {
        note.remove(); 
    })
});


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