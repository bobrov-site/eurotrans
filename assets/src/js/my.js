//activated tooltips everywhere

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

//swiper button

const swiper = document.getElementById('swiper-inputs');
const swiperTwoWays = document.getElementById('swiper-inputs-twoWays');

//oneway

swiper.onclick = function () {
    const tmp = document.getElementById('dataListFrom').value;
     document.getElementById('dataListFrom').value = document.getElementById('dataListTo').value;
     document.getElementById('dataListTo').value = tmp ;
}

//twoways

swiperTwoWays.onclick = function () {
    const tmpTwoWays = document.getElementById('dataListFrom-twoWays').value;
    document.getElementById('dataListFrom-twoWays').value = document.getElementById('dataListTo-twoWays').value;
    document.getElementById('dataListTo-twoWays').value = tmpTwoWays ;
}

//city button

const cityFrom = document.getElementById('city-example-from');
const cityTo = document.getElementById('city-example-to');

const cityFromTwoWays = document.getElementById('city-example-from-twoWays');
const cityToTwoWays = document.getElementById('city-example-to-twoWays');

cityFrom.onclick = function () {
    document.getElementById('dataListFrom').value = cityFrom.textContent;
}
cityTo.onclick = function () {
    document.getElementById('dataListTo').value = cityTo.textContent;
}

cityFromTwoWays.onclick = function () {
    document.getElementById('dataListFrom-twoWays').value = cityFromTwoWays.textContent;
}
cityToTwoWays.onclick = function () {
    document.getElementById('dataListTo-twoWays').value = cityToTwoWays.textContent;
}

//count passengers

const oldMen = document.getElementById('old-men');
const adultMen = document.getElementById('adult-men');
const plusOldMen = document.getElementById('plus-button-old');
const minusOldMen = document.getElementById('minus-button-old');
const plusAdultMen = document.getElementById('plus-button-adult');
const minusAdultMen = document.getElementById('minus-button-adult');

const oldMenTwoWays = document.getElementById('old-men-twoWays');
const adultMenTwoWays = document.getElementById('adult-men-twoWays');
const plusOldMenTwoWays = document.getElementById('plus-button-old-twoWays');
const minusOldMenTwoWays = document.getElementById('minus-button-old-twoWays');
const plusAdultMenTwoWays = document.getElementById('plus-button-adult-twoWays');
const minusAdultMenTwoWays = document.getElementById('minus-button-adult-twoWays');

//включение кнопки если больше 1

//oneway

plusOldMen.onclick = function () {
    oldMen.value ++ ;
    if (oldMen.value > 1) {
        minusOldMen.classList.remove('disabled');
    }
}

//twoways

plusOldMenTwoWays.onclick = function () {
    oldMenTwoWays.value ++ ;
    if (oldMenTwoWays.value > 1) {
        minusOldMenTwoWays.classList.remove('disabled');
    }
}

//включение кнопки если больше 0

//oneway
plusAdultMen.onclick = function () {
    adultMen.value ++ ;
    if (adultMen.value > 0) {
        minusAdultMen.classList.remove('disabled');
    }
}

//twoways

plusAdultMenTwoWays.onclick = function () {
    adultMenTwoWays.value ++ ;
    if (adultMenTwoWays.value > 0) {
        minusAdultMenTwoWays.classList.remove('disabled');
    }
}

//выключение кнопки если меньше 1

//oneway
minusOldMen.onclick = function () {
    oldMen.value -- ;
    if (oldMen.value < 1) {
        oldMen.value = 1;
    }
    if (oldMen.value == 1) {
        minusOldMen.classList.add('disabled');
    }
}

//twoways

minusOldMenTwoWays.onclick = function () {
    oldMenTwoWays.value -- ;
    if (oldMenTwoWays.value < 1) {
        oldMenTwoWays.value = 1;
    }
    if (oldMen.value == 1) {
        minusOldMenTwoWays.classList.add('disabled');
    }
}

//выключение кнопки если меньше 0

//oneway

minusAdultMen.onclick = function () {
    adultMen.value -- ;
    if (adultMen.value < 0) {
        adultMen.value = 0;
    }
    if (adultMen.value == 0) {
        minusAdultMen.classList.add('disabled');
    }
}

//twoways

minusAdultMenTwoWays.onclick = function () {
    adultMenTwoWays.value -- ;
    if (adultMenTwoWays.value < 0) {
        adultMenTwoWays.value = 0;
    }
    if (adultMenTwoWays.value == 0) {
        minusAdultMenTwoWays.classList.add('disabled');
    }
}

//валидация если больше 25
//one way
oldMen.onblur = function () {
    if (oldMen.value > 25) {
        oldMen.value = 1 ;
    }
    if (oldMen.value < 1) {
        oldMen.value = 1 ;
    }
}
//twoways
oldMenTwoWays.onblur = function () {
    if (oldMenTwoWays.value > 25) {
        oldMenTwoWays.value = 1 ;
    }
    if (oldMenTwoWays.value < 1) {
        oldMenTwoWays.value = 1 ;
    }
}
//oneways
adultMen.onblur = function () {
    if (adultMen.value > 25) {
        adultMen.value = 1 ;
    }
    if (adultMen.value < 1) {
        adultMen.value = 1 ;
    }
}

adultMenTwoWays.onblur = function () {
    if (adultMenTwoWays.value > 25) {
        adultMenTwoWays.value = 1 ;
    }
    if (adultMenTwoWays.value < 1) {
        adultMenTwoWays.value = 1 ;
    }
}

