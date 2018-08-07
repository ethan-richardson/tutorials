//student score, total possible score

const score = function(studentScore, totalScore) {
   const finalScore = (studentScore / totalScore) * (100)
   if (finalScore >= 90) {
        console.log(`You got an A (${finalScore}%)!`)
    } else if (finalScore >= 80) {
            console.log(`You got a B (${finalScore}%)!`)
    } else if (finalScore >= 70) {
        console.log(`You got a C (${finalScore}%)!`)
    } else if (finalScore >= 60) {
        console.log(`You got a D (${finalScore}%)!`)
    } else {
        console.log(`You got a F (${finalScore}%)!`)
    }
}
   




let scoreTest1 = score(18, 20)
let scoreTest2 = score (59, 100)