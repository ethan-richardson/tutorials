
let isValidPassword = function (password) {
    if (password.length > 8 && !password.includes('password')) {
        return 'Strong password!'
    } else {
        return 'Please choose a stronger password'
    }

}

console.log(isValidPassword('jfds'))
console.log(isValidPassword('jfds123213'))
console.log(isValidPassword('jfdspassword123'))