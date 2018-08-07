let temp = 55

if (temp >= 60 && temp <= 95) {
    console.log('Its great outside!')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside!')
} else {
    console.log('Eh, do what you want.')
}

//Challenge area

let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Offer only vegan options')
} else if (isGuestOneVegan|| isGuestTwoVegan) {
    console.log('Offer a few vegan options')
} else {
    console.log('Offer anything on the menu')
}
