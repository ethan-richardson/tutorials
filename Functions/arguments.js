// Multiple arguments
let add = function(a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function(name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge area
// total, tipPercent .2, 

let total = function(subTotal, tipPercent = .2) {
    //return subTotal + (subTotal * tipPercent)
    return `A ${tipPercent *100}% tip on $${subTotal} would be $${subTotal * tipPercent}`
}

let finalTotal = total(50, .1)
console.log(finalTotal)

