//activated tooltips everywhere

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

//swiper button

var swiper = document.getElementById('swiper-inputs');

swiper.onclick = function () {
    var tmp = document.getElementById('dataListFrom').value;
     document.getElementById('dataListFrom').value = document.getElementById('dataListTo').value;
     document.getElementById('dataListTo').value = tmp ;
}

//count passengers

var oldMen = document.getElementById('old-men');
var adultMen = document.getElementById('adult-men');
var plusOldMen = document.getElementById('plus-button-old');
var minusOldMen = document.getElementById('minus-button-old');
var plusAdultMen = document.getElementById('plus-button-adult');
var minusAdultMen = document.getElementById('minus-button-adult');

//включение кнопки если больше 1

plusOldMen.onclick = function () {
    oldMen.value ++ ;
    if (oldMen.value > 1) {
        minusOldMen.classList.remove('disabled');
    }
}
//включение кнопки если больше 0
plusAdultMen.onclick = function () {
    adultMen.value ++ ;
    if (adultMen.value > 0) {
        minusAdultMen.classList.remove('disabled');
    }
}

//выключение кнопки если меньше 1
minusOldMen.onclick = function () {
    oldMen.value -- ;
    if (oldMen.value < 1) {
        oldMen.value = 1;
    }
    if (oldMen.value == 1) {
        minusOldMen.classList.add('disabled');
    }
}

//выключение кнопки если меньше 0

minusAdultMen.onclick = function () {
    adultMen.value -- ;
    if (adultMen.value < 0) {
        adultMen.value = 0;
    }
    if (adultMen.value == 0) {
        minusAdultMen.classList.add('disabled');
    }
}

//валидация если больше 25
oldMen.onblur = function () {
    if (oldMen.value > 25) {
        oldMen.value = 1 ;
    }
    if (oldMen.value < 1) {
        oldMen.value = 1 ;
    }
}
adultMen.onblur = function () {
    if (adultMen.value > 25) {
        adultMen.value = 1 ;
    }
    if (adultMen.value < 1) {
        adultMen.value = 1 ;
    }
}

