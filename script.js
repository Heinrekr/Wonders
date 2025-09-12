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

// ХЕРО КНОПКА
document.addEventListener('DOMContentLoaded', function () {
    const findRideBtn = document.getElementById('findRideBtn');

    const departure = document.getElementById('departure');
    const arrival = document.getElementById('arrival');
    const departDate = document.getElementById('depart');
    const returnDate = document.getElementById('return');

    const roundTrip = document.getElementById('roundTrip');
    const oneWay = document.getElementById('oneWay');

    oneWay.addEventListener('change', function () {
        if (oneWay.checked) {
            returnDate.value = '';       // очищаем поле Return
            returnDate.disabled = true;  // блокируем его
        }
    });

    roundTrip.addEventListener('change', function () {
        if (roundTrip.checked) {
            returnDate.disabled = false; // разблокируем поле Return
        }
    });

    findRideBtn.addEventListener('click', function () {
        const departureValue = departure.value.trim();
        const arrivalValue = arrival.value.trim();
        const departDateValue = departDate.value;
        const returnDateValue = returnDate.value;

        const today = new Date().toISOString().split('T')[0];

        if (!departureValue || !arrivalValue || !departDateValue) {
            alert('Please fill in all required fields: Departure, Arrival, and Depart Date!');
            return;
        }
        if (departureValue.toLowerCase() === arrivalValue.toLowerCase()) {
            alert('Departure and Arrival cannot be the same!');
            return;
        }
        if (departDateValue < today) {
            alert('Depart date cannot be in the past!');
            return;
        }
        if (roundTrip.checked) {
            if (!returnDateValue) {
                alert('Please select a Return date for Round Trip!');
                return;
            }
            if (returnDateValue < departDateValue) {
                alert('Return date cannot be earlier than Depart date!');
                return;
            }
        }
        window.location.href = 'bus-list.html';
    });
});