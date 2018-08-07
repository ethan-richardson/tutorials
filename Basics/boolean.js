let age = 28
let child = age <= 7
let senior = age >= 65
let fullPrice = 8 <= age <= 64

if (child) {
    console.log('Child discount applied!')
}
if (senior) {
    console.log('Senior discount applied!')
}
if (fullPrice) {
    console.log('Full price ticket')
}