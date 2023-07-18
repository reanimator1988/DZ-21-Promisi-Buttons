"use strict";


const buttonCount = 12;
let oddButtonClicks = 0;
let evenButtonClicks = 0;
let uniqueButtonClicks = new Set();

for (let i = 1; i <= buttonCount; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', function () {
        if (!button.disabled) {
            button.style.cssText = "box-shadow: 15px 15px 15px rgb(255, 0, 255); background: #00FFFF; border: none; color: black";
            uniqueButtonClicks.add(i);

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

            if (uniqueButtonClicks.size === buttonCount) {
                setTimeout(function () {
                    alert("Усі кнопки були натиснуті!");
                }, 1000);
            }
        }
        button.disabled = true;
    });
    document.body.appendChild(button);
    button.classList.add('buttons');
}
