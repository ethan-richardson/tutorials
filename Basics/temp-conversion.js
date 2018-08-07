let fahrenheit = 60
let celsius = (fahrenheit - 32) *.5556
let kelvin = (fahrenheit + 459.67) * (5 / 9)


console.log(celsius)
console.log(kelvin)


let temp = 45

if (temp <= 32) {
    console.log('Its freezing outside!')
} else if (temp >= 85) {
    console.log('Its hot outside!')
} else {
    console.log('Go for it, its pretty nice')
}