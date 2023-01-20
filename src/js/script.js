"use strict"
const adviceText = document.querySelector(".adviceText")
const adviceId = document.querySelector(".adviceId")
const btn = document.querySelector(".btn")

async function getAdvice() {
    const randomInt = Math.floor(Math.random() * 250) 
    try {
        const response = await fetch(`https://api.adviceslip.com/advice/${randomInt}`)
        const advice = await response.json()
        if (!advice.slip.id == isNaN()) {
            throw new Error("sayı değil")
        } else {
            adviceId.innerText = advice.slip.id
            adviceText.innerText = advice.slip.advice
        }
    } catch (ifTakeError) {
        btn.click()
    }
}


///////////Another Solituon without randomInt

// async function getAdvice() {
//     const randomInt = Math.floor(Math.random() * 200)
//     const response = await fetch(`https://api.adviceslip.com/advice/${randomInt}`)
//     console.log(randomInt)
//     console.log(response)
//     const advice = await response.json()
//     console.log(advice.slip)
//     adviceId.innerText = advice.slip.id
//     adviceText.innerText = advice.slip.advice

// }



///////////Another Solituon without randomInt
// function getAdvice() {
//     const request = new XMLHttpRequest();
//     request.open('GET', 'https://api.adviceslip.com/advice');
//     request.send();

//     request.addEventListener('load', function() {
//         const advice = JSON.parse(this.responseText);
//         console.log(advice.slip.id,advice.slip.advice);
//         adviceId.innerText = advice.slip.id
//         adviceText.innerText = advice.slip.advice
//     });
//    }


