let num = 13.015



let min = 1
let max = 5
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)

let makeGuess = function(guess) {
    if (guess === randomNum) {
    return "Correct guess"
} else {
    return "Incorrect guess"
    }
}

console.log(makeGuess(3))