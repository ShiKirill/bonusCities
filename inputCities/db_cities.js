'use strict';

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
let language = '';

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
    if (Math.random() > 0.5) {
        step = window.innerWidth * 0.08;
    } else {
        step = -window.innerWidth * 0.08;
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
const createList = (countryName, countryCount, cities, lang) => {
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
const createDefaultList = (data, lang) => {
    let firstItem = '';
    let otherItems = '';
    data[lang].forEach((item, index) => {
        console.log();
        if (lang === "RU") {
            if (+item.count === 144500000) {
                firstItem = createList(item.country, item.count, item.cities, lang);
            } else {
                otherItems += createList(item.country, item.count, item.cities, lang);
            }
            if (index === data[lang].length - 1) {
                dropdownDefault.querySelector('.dropdown-lists__col').innerHTML = firstItem + otherItems;
            }
        } else if (lang === "EN") {
            console.log(item.count);
            if (+item.count === 53012456) {
                console.log(12345);
                firstItem = createList(item.country, item.count, item.cities, lang);
            } else {
                otherItems += createList(item.country, item.count, item.cities, lang);
            }
            if (index === data[lang].length - 1) {
                dropdownDefault.querySelector('.dropdown-lists__col').innerHTML = firstItem + otherItems;
            }
        } else {
            if (+item.count === 82175684) {
                firstItem = createList(item.country, item.count, item.cities, lang);
            } else {
                otherItems += createList(item.country, item.count, item.cities, lang);
            }
            if (index === data[lang].length - 1) {
                console.log(firstItem);
                dropdownDefault.querySelector('.dropdown-lists__col').innerHTML = firstItem + otherItems;
            }
        }
        
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
            data[lang].forEach(item => {
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
                data[language].forEach(item => {
                    item.cities.forEach(item => {
                        if (item.name === target.textContent) {
                            button.style.cssText = '';
                            button.removeEventListener('click', disableButton);
                            button.href = item.link;
                        }
                    });
                });
            } else if (target.classList.contains('dropdown-lists__country')) {
                button.addEventListener('click', disableButton);
                button.href = '#';
                button.style.cssText = 'cursor:context-menu; background: #00416A;';
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

const setLanguage = () => {
    if (getCookie('language') !== undefined) {
        language = getCookie('language');
        if (language === 'EN') {
            label.textContent = 'Country or city';
        } else if (language === 'DE') {
            label.textContent = 'Land oder stadt';
        } else {
            label.textContent = 'Страна или город';
        }
    } else {
        let check = true;
        do {
            language = prompt('Выбериите язык (ru, en, de):').trim().toUpperCase();
            if (language === 'RU' || language === 'EN' || language === 'DE') {
                if (language === 'EN') {
                    label.textContent = 'Country or city';
                } else if (language === 'DE') {
                    label.textContent = 'Land oder stadt';
                } else {
                    label.textContent = 'Страна или город';
                }
                check = false;
                document.cookie = `language = ${language}`;
            }
        } while (check);
    }

};


const uploadStorage = (data) => {
    const json = JSON.stringify(data);
    localStorage.data = json;
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
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
        document.head.removeChild(style);
        document.querySelector('.loading').parentNode.removeChild(document.querySelector('.loading'));
        document.querySelector('.input-cities').style.opacity = 1;
        setLanguage();
        uploadStorage(response);
        createDefaultList(response, language);
        eventListeners(response);
    }).catch(error => console.error(error));
}


if (localStorage.data !== undefined) {
    document.head.appendChild(style);
    const data = JSON.parse(localStorage.data);
    setTimeout(() => {
        setLanguage();
        document.head.removeChild(style);
        document.querySelector('.loading').parentNode.removeChild(document.querySelector('.loading'));
        document.querySelector('.input-cities').style.opacity = 1;
        createDefaultList(data, language);
        eventListeners(data);
    }, 2000);
} else {
    getData();
}

