// Line 01
let btn1Permission = document.getElementById('btn1Permission')
let btn1Ability = document.getElementById('btn1Ability')
let btn1Offer = document.getElementById('btn1Offer')
let btn1Possibility = document.getElementById('btn1Possibility')
let like1 = document.getElementById('like1')
let notGood1 = document.getElementById('notGood1')
let word1 = document.getElementById('word1')
let score = document.getElementById('score')

let value = 0

btn1Offer.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    like1.style.visibility = 'visible'
    notGood1.style.visibility = 'hidden'
    btn1Offer.style.backgroundColor = 'chartreuse'
    btn1Offer.style.color = 'black'
    word1.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn1Permission.disabled = true
    btn1Ability.disabled = true
    btn1Offer.disabled = true
    btn1Possibility.disabled = true
})

btn1Ability.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood1.style.visibility = 'visible'
    btn1Ability.style.backgroundColor = 'red'
    btn1Ability.style.color = 'yellow'
    word1.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn1Ability.disabled = true
})
btn1Permission.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood1.style.visibility = 'visible'
    btn1Permission.style.backgroundColor = 'red'
    btn1Permission.style.color = 'yellow'
    word1.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn1Permission.disabled = true
})

btn1Possibility.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood1.style.visibility = 'visible'
    btn1Possibility.style.backgroundColor = 'red'
    btn1Possibility.style.color = 'yellow'
    word1.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn1Possibility.disabled = true
})


// Line 02

let btn2Permission = document.getElementById('btn2Permission')
let btn2Ability = document.getElementById('btn2Ability')
let btn2Offer = document.getElementById('btn2Offer')
let btn2Possibility = document.getElementById('btn2Possibility')
let like2 = document.getElementById('like2')
let notGood2 = document.getElementById('notGood2')
let word2 = document.getElementById('word2')

btn2Ability.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    like2.style.visibility = 'visible'
    notGood2.style.visibility = 'hidden'
    btn2Ability.style.backgroundColor = 'chartreuse'
    btn2Ability.style.color = 'black'
    word2.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn2Permission.disabled = true
    btn2Possibility.disabled = true
    btn2Ability.disabled = true
    btn2Offer.disabled = true
})

btn2Offer.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood2.style.visibility = 'visible'
    btn2Offer.style.backgroundColor = 'red'
    btn2Offer.style.color = 'yellow'
    word2.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn2Offer.disabled = true
})
btn2Permission.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood2.style.visibility = 'visible'
    btn2Permission.style.backgroundColor = 'red'
    btn2Permission.style.color = 'yellow'
    word2.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn2Permission.disabled = true
})

btn2Possibility.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood2.style.visibility = 'visible'
    btn2Possibility.style.backgroundColor = 'red'
    btn2Possibility.style.color = 'yellow'
    word2.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn2Possibility.disabled = true
})


// Line 03

let btn3Permission = document.getElementById('btn3Permission')
let btn3Ability = document.getElementById('btn3Ability')
let btn3Offer = document.getElementById('btn3Offer')
let btn3Possibility = document.getElementById('btn3Possibility')
let like3 = document.getElementById('like3')
let notGood3 = document.getElementById('notGood3')
let word3 = document.getElementById('word3')

btn3Permission.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    like3.style.visibility = 'visible'
    notGood3.style.visibility = 'hidden'
    btn3Permission.style.backgroundColor = 'chartreuse'
    btn3Permission.style.color = 'black'
    word3.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn3Permission.disabled = true
    btn3Possibility.disabled = true
    btn3Ability.disabled = true
    btn3Offer.disabled = true
})

btn3Offer.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood3.style.visibility = 'visible'
    btn3Offer.style.backgroundColor = 'red'
    btn3Offer.style.color = 'yellow'
    word3.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn3Offer.disabled = true
})
btn3Ability.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood3.style.visibility = 'visible'
    btn3Ability.style.backgroundColor = 'red'
    btn3Ability.style.color = 'yellow'
    word3.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn3Ability.disabled = true
})

btn3Possibility.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood3.style.visibility = 'visible'
    btn3Possibility.style.backgroundColor = 'red'
    btn3Possibility.style.color = 'yellow'
    word3.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn3Possibility.disabled = true
})


// Line 04

let btn4Permission = document.getElementById('btn4Permission')
let btn4Ability = document.getElementById('btn4Ability')
let btn4Offer = document.getElementById('btn4Offer')
let btn4Possibility = document.getElementById('btn4Possibility')
let like4 = document.getElementById('like4')
let notGood4 = document.getElementById('notGood4')
let word4 = document.getElementById('word4')

btn4Possibility.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    like4.style.visibility = 'visible'
    notGood4.style.visibility = 'hidden'
    btn4Possibility.style.backgroundColor = 'chartreuse'
    btn4Possibility.style.color = 'black'
    word4.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn4Permission.disabled = true
    btn4Possibility.disabled = true
    btn4Ability.disabled = true
    btn4Offer.disabled = true
})

btn4Offer.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood4.style.visibility = 'visible'
    btn4Offer.style.backgroundColor = 'red'
    btn4Offer.style.color = 'yellow'
    word4.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn4Offer.disabled = true
})
btn4Ability.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood4.style.visibility = 'visible'
    btn4Ability.style.backgroundColor = 'red'
    btn4Ability.style.color = 'yellow'
    word4.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn4Ability.disabled = true
})

btn4Permission.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood4.style.visibility = 'visible'
    btn4Permission.style.backgroundColor = 'red'
    btn4Permission.style.color = 'yellow'
    word4.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn4Permission.disabled = true
})

// Line 05

let btn5Permission = document.getElementById('btn5Permission')
let btn5Ability = document.getElementById('btn5Ability')
let btn5Offer = document.getElementById('btn5Offer')
let btn5Possibility = document.getElementById('btn5Possibility')
let like5 = document.getElementById('like5')
let notGood5 = document.getElementById('notGood5')
let word5 = document.getElementById('word5')

btn5Ability.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    like5.style.visibility = 'visible'
    notGood5.style.visibility = 'hidden'
    btn5Ability.style.backgroundColor = 'chartreuse'
    btn5Ability.style.color = 'black'
    word5.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn5Permission.disabled = true
    btn5Offer.disabled = true
    btn5Ability.disabled = true
    btn5Possibility.disabled = true
})

btn5Offer.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood5.style.visibility = 'visible'
    btn5Offer.style.backgroundColor = 'red'
    btn5Offer.style.color = 'yellow'
    word5.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn5Offer.disabled = true
})
btn5Permission.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood5.style.visibility = 'visible'
    btn5Permission.style.backgroundColor = 'red'
    btn5Permission.style.color = 'yellow'
    word5.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn5Permission.disabled = true
})

btn5Possibility.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood5.style.visibility = 'visible'
    btn5Possibility.style.backgroundColor = 'red'
    btn5Possibility.style.color = 'yellow'
    word5.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn5Possibility.disabled = true
})

// Line 06

let btn6Permission = document.getElementById('btn6Permission')
let btn6Ability = document.getElementById('btn6Ability')
let btn6Offer = document.getElementById('btn6Offer')
let btn6Possibility = document.getElementById('btn6Possibility')
let like6 = document.getElementById('like6')
let notGood6 = document.getElementById('notGood6')
let word6 = document.getElementById('word6')

btn6Possibility.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    like6.style.visibility = 'visible'
    notGood6.style.visibility = 'hidden'
    btn6Possibility.style.backgroundColor = 'chartreuse'
    btn6Possibility.style.color = 'black'
    word6.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn6Permission.disabled = true
    btn6Offer.disabled = true
    btn6Possibility.disabled = true
    btn6Ability.disabled = true
})

btn6Offer.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood6.style.visibility = 'visible'
    btn6Offer.style.backgroundColor = 'red'
    btn6Offer.style.color = 'yellow'
    word6.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn6Offer.disabled = true
})
btn6Permission.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood6.style.visibility = 'visible'
    btn6Permission.style.backgroundColor = 'red'
    btn6Permission.style.color = 'yellow'
    word6.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn6Permission.disabled = true
})

btn6Ability.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood6.style.visibility = 'visible'
    btn6Ability.style.backgroundColor = 'red'
    btn6Ability.style.color = 'yellow'
    word6.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn6Ability.disabled = true
})

// Line 07

let btn7Permission = document.getElementById('btn7Permission')
let btn7Ability = document.getElementById('btn7Ability')
let btn7Offer = document.getElementById('btn7Offer')
let btn7Possibility = document.getElementById('btn7Possibility')
let like7 = document.getElementById('like7')
let notGood7 = document.getElementById('notGood7')
let word7 = document.getElementById('word7')

btn7Permission.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    like7.style.visibility = 'visible'
    notGood7.style.visibility = 'hidden'
    btn7Permission.style.backgroundColor = 'chartreuse'
    btn7Permission.style.color = 'black'
    word7.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn7Permission.disabled = true
    btn7Offer.disabled = true
    btn7Possibility.disabled = true
    btn7Ability.disabled = true
})

btn7Offer.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood7.style.visibility = 'visible'
    btn7Offer.style.backgroundColor = 'red'
    btn7Offer.style.color = 'yellow'
    word7.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn7Offer.disabled = true
})
btn7Possibility.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood7.style.visibility = 'visible'
    btn7Possibility.style.backgroundColor = 'red'
    btn7Possibility.style.color = 'yellow'
    word7.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn7Possibility.disabled = true
})

btn7Ability.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood7.style.visibility = 'visible'
    btn7Ability.style.backgroundColor = 'red'
    btn7Ability.style.color = 'yellow'
    word7.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn7Ability.disabled = true
})





