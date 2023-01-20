"use strict"
const adviceText = document.querySelector(".adviceText")
const adviceId=document.querySelector(".adviceId")

function getAdvice() {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://api.adviceslip.com/advice');
    request.send();

    request.addEventListener('load', function() {
        const advice = JSON.parse(this.responseText);
        console.log(advice.slip.id,advice.slip.advice);            
        adviceId.innerText = advice.slip.id
        adviceText.innerText = advice.slip.advice
    });
   }