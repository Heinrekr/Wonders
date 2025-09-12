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

        if (!roundTrip.checked && !oneWay.checked) {
            alert('Please select a trip type: Round Trip or One Way!');
            return;
        }
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

//ВЫПАДАЮЩИЕ СПИСКИ
const Stations = [
    // Switzerland
    "Zermatt Bus Terminal",
    "Interlaken Ost Bus Station",
    "Grindelwald Bus Terminal",
    "Lauterbrunnen Bahnhof",
    "Lucerne Bahnhofquai",
    "Chamonix-Mont-Blanc Sud (France, near Swiss border)",
    "Geneva Bus Station",
    "Bern PostAuto Terminal",
    "Gstaad Bus Station",
    "St. Moritz Bahnhof PostAuto",
    "Verbier Village",
    "Davos Platz Postautohaltestelle",
    "Andermatt Gotthardpass",
    "Täsch Bahnhof (Shuttle to Zermatt)",
    "Flims Dorf Post",
    // France
    "Chamonix Sud Bus Station",
    "Annecy Gare Routière",
    "Grenoble Gare Routière",
    "Nice Airport (Bus to Alps)",
    "Bourg-Saint-Maurice Gare Routière",
    "Morzine Gare Routière",
    "Les Gets Gare Routière",
    "Val d'Isère Centre",
    "Courchevel 1850",
    "Megève Place du Village",
    // Italy
    "Aosta Autostazione",
    "Bolzano Autostazione",
    "Trento Autostazione",
    "Cortina d'Ampezzo Autostazione",
    "Bormio Bus Station",
    "Livigno Centro",
    "Merano Autostazione",
    "Sestriere Bus Stop",
    "Ortisei (St. Ulrich) Autostazione",
    "Canazei Piazza Marconi",
    // Austria
    "Innsbruck Hauptbahnhof Bus Terminal",
    "Salzburg Süd Busbahnhof",
    "Mayrhofen Bahnhof",
    "Lech am Arlberg Postamt",
    "Kitzbühel Hahnenkammbahn",
    "Ischgl Seilbahn",
    "Zell am See Postplatz",
    "Bad Gastein Bahnhof",
    "St. Anton am Arlberg Bahnhof",
    "Sölden Postamt",
    // Germany
    "Garmisch-Partenkirchen Bahnhof (Bus Station)",
    "Berchtesgaden Busbahnhof",
    "Oberstdorf Busbahnhof",
    "Füssen Bahnhof (Bus Station)",
    "Mittenwald Bahnhof (Bus Station)",
    // Slovenia
    "Bled Bus Station",
    "Bohinj Jezero",
    "Kranjska Gora Avtobusna Postaja"
];

function setupAutocomplete(inputId, listId) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);

    input.addEventListener('input', function () {
        const query = input.value.trim().toLowerCase();
        list.innerHTML = '';

        if (query.length === 0) {
            list.style.display = 'none';
            return;
        }

        const filteredStations = Stations.filter(station =>
            station.toLowerCase().includes(query)
        );

        if (filteredStations.length === 0) {
            list.style.display = 'none';
            return;
        }

        filteredStations.forEach(station => {
            const li = document.createElement('li');
            li.textContent = station;
            li.addEventListener('click', function () {
                input.value = station;
                list.style.display = 'none';
            });
            list.appendChild(li);
        });

        list.style.display = 'block';
    });

    document.addEventListener('click', function (event) {
        if (!list.contains(event.target) && event.target !== input) {
            list.style.display = 'none';
        }
    });
}

setupAutocomplete('departure', 'departureList');
setupAutocomplete('arrival', 'arrivalList');