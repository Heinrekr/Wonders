//СЧЕТЧИК ПАССАЖИРОВ
const counterText = document.querySelector('.passenger-number');
const counterButton = document.querySelectorAll('.passenger-button');
let counter = 1;

counterButton.forEach( (el,index) => {
    el.addEventListener('click', (e) => {
        if (index === 0 && counter > 1) {
            counter = counter - 1;
        } else if (index === 1 && counter < 12) {
            counter = counter + 1;
        }
        counterText.textContent = counter;
    });
});

// БУРГЕР МЕНЮ
document.getElementById('burger').addEventListener('click', (e) => {
    document.querySelector('.burger').classList.toggle('open')
});

document.getElementById('burger').addEventListener('click', (e) => {
    document.querySelector('.menu').classList.toggle('open')
});
