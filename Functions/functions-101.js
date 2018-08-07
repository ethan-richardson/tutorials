let greetUser = function () {
    console.log('Welcome user')
}

greetUser()

let square = function(num) {
    let result = num * num
    return result
}

let value = square(9)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// Challenge Area
// convertFahrenheitToCelsius

let conversion = function(tempF) {
    let tempC = (tempF -32) * 5/9
    return tempC 
}

let test1 = conversion(32)
let test2 = conversion(68)
console.log(test1)
console.log(test2)