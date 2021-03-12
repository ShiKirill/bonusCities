'use strict';
const data = {
    "RU": [
        {
            "country": "Россия",
            "count": "144500000",
            "cities": [
                {
                    "name": "Рязань",
                    "count": "538962",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
                },
                {
                    "name": "Москва",
                    "count": "12615882",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
                },
                {
                    "name": "Санкт-Петербург",
                    "count": "5383968",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Краснодар",
                    "count": "918145",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
                },
                {
                    "name": "Екатеринбург",
                    "count": "1484456",
                    "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Ростов-на-Дону",
                    "count": "1130305",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
                },
                {
                    "name": "Воронеж",
                    "count": "1054537",
                    "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
                }
            ]

        },
        {
            "country": "Германия",
            "count": 82175684,
            "cities": [
                {
                    "name": "Берлин",
                    "count": "3613495",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
                },
                {
                    "name": "Мюнхен",
                    "count": "1456039",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
                },
                {
                    "name": "Франкфурт-на-Майне",
                    "count": "736414",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
                },
                {
                    "name": "Кёльн",
                    "count": "1080394",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
                }
            ]
        },
        {
            "country": "Англия",
            "count": 53012456,
            "cities": [
                {
                    "name": "Лондон",
                    "count": " 8869898",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
                },
                {
                    "name": "Манчестер",
                    "count": "545500",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
                },
                {
                    "name": "Эдинбург",
                    "count": "488100",
                    "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Бристоль",
                    "count": "567111",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
                }
            ]

        }
    ],
    "EN": [
        {
            "country": "Russia",
            "count": "144500000",
            "cities": [
                {
                    "name": "Ryazan",
                    "count": "538962",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
                },
                {
                    "name": "Moscow",
                    "count": "12615882",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
                },
                {
                    "name": "St Petersburg",
                    "count": "5383968",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Krasnodar",
                    "count": "918145",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
                },
                {
                    "name": "Yekaterinburg",
                    "count": "1484456",
                    "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Rostov-on-Don",
                    "count": "1130305",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
                },
                {
                    "name": "Voronezh",
                    "count": "1054537",
                    "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
                }
            ]

        },
        {
            "country": "Germany",
            "count": 82175684,
            "cities": [
                {
                    "name": "Berlin",
                    "count": "3613495",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
                },
                {
                    "name": "Munich",
                    "count": "1456039",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
                },
                {
                    "name": "frankfurt",
                    "count": "736414",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
                },
                {
                    "name": "Cologne",
                    "count": "1080394",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
                }
            ]
        },
        {
            "country": "United Kingdom",
            "count": 53012456,
            "cities": [
                {
                    "name": "London",
                    "count": " 8869898",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
                },
                {
                    "name": "Manchester",
                    "count": "545500",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
                },
                {
                    "name": "Edinburgh",
                    "count": "488100",
                    "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Bristol",
                    "count": "567111",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
                }
            ]

        }
    ],
    "DE": [
        {
            "country": "Russland",
            "count": "144500000",
            "cities": [
                {
                    "name": "Ryazan",
                    "count": "538962",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
                },
                {
                    "name": "Moskau",
                    "count": "12615882",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
                },
                {
                    "name": "Saint Petersburg",
                    "count": "5383968",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Krasnodar",
                    "count": "918145",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
                },
                {
                    "name": "Jekaterinburg",
                    "count": "1484456",
                    "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Rostow",
                    "count": "1130305",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
                },
                {
                    "name": "Woronesch",
                    "count": "1054537",
                    "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
                }
            ]

        },
        {
            "country": "Deutschland",
            "count": 82175684,
            "cities": [
                {
                    "name": "Berlin",
                    "count": "3613495",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
                },
                {
                    "name": "München",
                    "count": "1456039",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
                },
                {
                    "name": "Frankfurt",
                    "count": "736414",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
                },
                {
                    "name": "Köln",
                    "count": "1080394",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
                }
            ]
        },
        {
            "country": "England",
            "count": 53012456,
            "cities": [
                {
                    "name": "London",
                    "count": " 8869898",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
                },
                {
                    "name": "Manchester",
                    "count": "545500",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
                },
                {
                    "name": "Edinburgh",
                    "count": "488100",
                    "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Bristol",
                    "count": "567111",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
                }
            ]

        }
    ]
};

const input = document.getElementById('select-cities');
const dropdownDefault = document.querySelector('.dropdown-lists__list--default');
const dropdownSelect = document.querySelector('.dropdown-lists__list--select');
const dropdownAutocomplete = document.querySelector('.dropdown-lists__list--autocomplete');
let totalLine = document.querySelectorAll('.dropdown-lists__total-line');
const closeBtn = document.querySelector('.close-button');
const button = document.querySelector('.button');
const allDropdowns = document.querySelectorAll('.dropdown-lists__list');
const dropdownBlock = document.querySelector('.dropdown');
const label = document.querySelector('.label');

document.querySelector('.input-cities').style.opacity = 0;

const style = document.createElement('style');
style.textContent = `
.sk-circle-bounce {
    width: 4em;
    height: 4em;
    position: relative;
    margin: auto;
}
.sk-circle-bounce .sk-child {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
.sk-circle-bounce .sk-child:before {
    content: "";
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: #337ab7;
    border-radius: 100%;
    -webkit-animation: sk-circle-bounce-delay 1.2s infinite ease-in-out both;
    animation: sk-circle-bounce-delay 1.2s infinite ease-in-out both;
}
.sk-circle-bounce .sk-circle-2 {
    transform: rotate(30deg);
}
.sk-circle-bounce .sk-circle-2:before {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
}
.sk-circle-bounce .sk-circle-3 {
    transform: rotate(60deg);
}
.sk-circle-bounce .sk-circle-3:before {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
}
.sk-circle-bounce .sk-circle-4 {
    transform: rotate(90deg);
}
.sk-circle-bounce .sk-circle-4:before {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
}
.sk-circle-bounce .sk-circle-5 {
    transform: rotate(120deg);
}
.sk-circle-bounce .sk-circle-5:before {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
}
.sk-circle-bounce .sk-circle-6 {
    transform: rotate(150deg);
}
.sk-circle-bounce .sk-circle-6:before {
    -webkit-animation-delay: -0.7s;
    animation-delay: -0.7s;
}
.sk-circle-bounce .sk-circle-7 {
    transform: rotate(180deg);
}
.sk-circle-bounce .sk-circle-7:before {
    -webkit-animation-delay: -0.6s;
    animation-delay: -0.6s;
}
.sk-circle-bounce .sk-circle-8 {
    transform: rotate(210deg);
}
.sk-circle-bounce .sk-circle-8:before {
    -webkit-animation-delay: -0.5s;
    animation-delay: -0.5s;
}
.sk-circle-bounce .sk-circle-9 {
    transform: rotate(240deg);
}
.sk-circle-bounce .sk-circle-9:before {
    -webkit-animation-delay: -0.4s;
    animation-delay: -0.4s;
}
.sk-circle-bounce .sk-circle-10 {
    transform: rotate(270deg);
}
.sk-circle-bounce .sk-circle-10:before {
    -webkit-animation-delay: -0.3s;
    animation-delay: -0.3s;
}
.sk-circle-bounce .sk-circle-11 {
    transform: rotate(300deg);
}
.sk-circle-bounce .sk-circle-11:before {
    -webkit-animation-delay: -0.2s;
    animation-delay: -0.2s;
}
.sk-circle-bounce .sk-circle-12 {
    transform: rotate(330deg);
}
.sk-circle-bounce .sk-circle-12:before {
    -webkit-animation-delay: -0.1s;
    animation-delay: -0.1s;
}
@keyframes sk-circle-bounce-delay {
    0%, 80%, 100% {
    transform: scale(0);
    }
    40% {
    transform: scale(1.0);
    }
}
    `;
document.querySelector('section').insertAdjacentHTML('afterbegin', `
<section class = 'loading' style='position:absolute;top: 50%;transform: translateY(-50%);'>
<div class="sk-circle-bounce">
    <div class="sk-child sk-circle-1"></div>
    <div class="sk-child sk-circle-2"></div>
    <div class="sk-child sk-circle-3"></div>
    <div class="sk-child sk-circle-4"></div>
    <div class="sk-child sk-circle-5"></div>
    <div class="sk-child sk-circle-6"></div>
    <div class="sk-child sk-circle-7"></div>
    <div class="sk-child sk-circle-8"></div>
    <div class="sk-child sk-circle-9"></div>
    <div class="sk-child sk-circle-10"></div>
    <div class="sk-child sk-circle-11"></div>
    <div class="sk-child sk-circle-12"></div>
</div>
</section>
`);


const disableButton = (event) => {
    event.preventDefault();
};
const disableDropdowns = () => {
    let start = 0;
    let step;
    if (Math.random()>0.5){
        step = window.innerWidth*0.08;
    } else {
        step = -window.innerWidth*0.08;
    }
    allDropdowns.forEach(item => {
        ;
        if (item.style.display === 'block') {
            item.style.cssText = `
            max-height: 300px;
            overflow: auto;
            position: absolute;
            background: white;
            display: block`;
            function moveDropdowns() {
                let a = requestAnimationFrame(moveDropdowns);
                item.style.left = start + 'px';
                start += +step;
                if (Math.abs(start) > window.innerWidth * 3 / 5) {
                    cancelAnimationFrame(a);
                    item.style.cssText = `display: none`;
                }
            };
            moveDropdowns();
        }
    })

};
const createList = (countryName, countryCount, cities) => {
    let citiesList = '';
    cities.forEach(item => {
        citiesList += `
            <div class="dropdown-lists__line">
            <div class="dropdown-lists__city">${item.name}</div>
            <div class="dropdown-lists__count">${item.count}</div>
            </div>
            `;
    });

    const list = `
        <div class="dropdown-lists__countryBlock">
        <div class="dropdown-lists__total-line">
        <div class="dropdown-lists__country">${countryName}</div>
        <div class="dropdown-lists__count">${countryCount}</div>
        </div>
            ${citiesList}
        </div>
        `;
    return list;
};
const createDefaultList = (data) => {
    data["RU"].forEach(item => {
        dropdownDefault.querySelector('.dropdown-lists__col').innerHTML += createList(item.country, item.count, item.cities);
        totalLine = document.querySelectorAll('.dropdown-lists__total-line');
    });
}
const eventListeners = (data) => {
    button.href = '#';
    button.style.cssText = 'cursor:context-menu;background: #00416A;';
    button.addEventListener('click', disableButton);

    input.addEventListener('focus', () => {
        if (dropdownDefault.style.display !== 'block') {
            disableDropdowns();
        }
        dropdownDefault.style.display = 'block';
    });


    input.addEventListener('input', () => {
        disableDropdowns();

        if (input.value.trim() === '') {
            button.href = '#';
            button.style.cssText = 'cursor:context-menu;background: #00416A;';
            button.addEventListener('click', disableButton);
            label.style.opacity = 1;
            dropdownDefault.style.display = 'block';
        } else {
            dropdownAutocomplete.style.display = 'block';
            let overlaps = ``;
            data["RU"].forEach(item => {
                item.cities.forEach(item => {
                    if (item.name.toLowerCase().startsWith(input.value.toLowerCase().trim())) {
                        overlaps += `
                    <div class="dropdown-lists__line">
                    <div class="dropdown-lists__city"><b>${item.name.substr(0, input.value.trim().length)}</b>${item.name.substr(input.value.trim().length)}</div>
                    <div class="dropdown-lists__count">${item.count}</div>
                    </div>
                    `;
                    }
                });
            });
            if (overlaps === '') {
                dropdownAutocomplete.innerHTML = `<div class="dropdown-lists__countryBlock" style="text-align:center;color:red;">Ничего не найдено!</div>`;
            } else {
                dropdownAutocomplete.innerHTML = `<div class="dropdown-lists__countryBlock"></div>`;
                dropdownAutocomplete.querySelector('.dropdown-lists__countryBlock').innerHTML = overlaps;
            }
        }
    });


    const lineListeners = (event) => {
        if (event.target.closest('.dropdown-lists__list--default')) {
            dropdownSelect.innerHTML = '';
            const clone = event.target.parentNode.closest('.dropdown-lists__countryBlock').cloneNode(true);
            dropdownSelect.append(clone);
            disableDropdowns();
            dropdownSelect.style.display = 'block';
            totalLine = document.querySelectorAll('.dropdown-lists__total-line');
            foo();
        } else if (event.target.closest('.dropdown-lists__list--select')) {
            disableDropdowns();
            dropdownDefault.style.display = 'block';
        }
    };
    function foo() {
        totalLine.forEach(item => {
            item.removeEventListener('click', lineListeners);
            item.addEventListener('click', lineListeners);
        });

    };
    foo();

    document.addEventListener('click', event => {
        const target = event.target;
        if (target.classList.contains('dropdown-lists__country') || target.classList.contains('dropdown-lists__city')) {
            label.style.opacity = 0;

            if (target.classList.contains('dropdown-lists__city')) {
                data["RU"].forEach(item => {
                    item.cities.forEach(item => {
                        if (item.name === target.textContent) {
                            button.style.cssText = '';
                            button.removeEventListener('click', disableButton);
                            button.href = item.link;
                        }
                    });
                });
            }
            closeBtn.style.display = 'block';
            input.value = target.textContent;
        }
    });

    closeBtn.addEventListener('click', () => {
        disableDropdowns();
        button.href = '#';
        button.style.cssText = 'cursor:context-menu;background: #00416A;';
        button.addEventListener('click', disableButton);
        input.value = '';
        label.style.opacity = 1;
        closeBtn.style.display = 'none';
    });
}




const getData = () => {
    fetch('db_cities.json').then((response) => {
        if (response.status !== 200) {
            throw new Error('Status is not 200!');
        }
        document.head.appendChild(style);
        return (response.json());
        ;
    }).then((response) => {
        setTimeout(() => {
            document.head.removeChild(style);
            document.querySelector('.loading').parentNode.removeChild(document.querySelector('.loading'));
            document.querySelector('.input-cities').style.opacity = 1;
            createDefaultList(response);
            eventListeners(response);
        }, 2000);
    }).catch(error => console.error(error));
}
getData();
