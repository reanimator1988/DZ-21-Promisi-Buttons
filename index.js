"use strict";


function addShadow(button) {
    return new Promise(resolve => {
        button.classList.add('clicked');
        setTimeout(() => {
            resolve(button);
        }, 200);
    });
}

const buttons = Array.from({ length: 12 }, (_, index) => {
    const button = document.createElement('button');
    button.classList.add('buttons');
    button.textContent = `${index + 1}`;
    document.body.appendChild(button);

    return button;
});

const oddButtons = buttons.filter((_, index) => index % 2 === 0);
const evenButtons = buttons.filter((_, index) => index % 2 !== 0);
const styleCss = "box-shadow: 15px 15px 15px rgb(255, 0, 255); background: #00FFFF; border: none; color: black";

const clickEventController = oddButtons.map(button => {
    return new Promise(resolve => {
        button.addEventListener('click', async () => {
            button.style.cssText = styleCss;
            await addShadow(button);
            resolve(button);
        });
    });
});

Promise.all(clickEventController).then(() => {
    alert('Всі непарні кнопки були натиснуті!');
});

const buttonClickHandler = evenButtons.map(button => {
    return new Promise(resolve => {
        button.addEventListener('click', async () => {
            button.style.cssText = styleCss;
            await addShadow(button);
            resolve(button);
        });
    });
});

Promise.all(buttonClickHandler).then(() => {
    alert('Всі парні кнопки були натиснуті!');
});

const buttonClickExceptAll = clickEventController.concat(buttonClickHandler);

Promise.all(buttonClickExceptAll).then(() => {
    alert("Усі кнопки були натиснуті!");
});