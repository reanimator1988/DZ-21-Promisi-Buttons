"use strict";


const buttonCount = 12;
let oddButtonClicks = 0;
let evenButtonClicks = 0;

for (let i = 1; i <= buttonCount; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', function () {
        button.style.cssText = "box-shadow: 15px 15px 15px rgb(255, 0, 255); background: #00FFFF;";
        if (i % 2 !== 0) {
            oddButtonClicks++;
            if (oddButtonClicks === Math.ceil(buttonCount / 2)) {
                alert('Всі непарні кнопки були натиснуті!');
            }
        }
        if (i % 2 === 0) {
            evenButtonClicks++;
            if (evenButtonClicks === Math.floor(buttonCount / 2)) {
                alert('Всі парні кнопки були натиснуті!');
            }
        }
        if (oddButtonClicks === Math.ceil(buttonCount / 2) && evenButtonClicks === Math.floor(buttonCount / 2)) {
            setTimeout(function () {
                alert("Усі кнопки були натиснуті!");
            }, 1000);
        }
    });
    document.body.appendChild(button);
    button.classList.add('buttons');
}