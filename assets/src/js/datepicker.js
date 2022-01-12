//= ../../../node_modules/js-datepicker/dist/datepicker.min.js

const today = document.getElementById('today-date-toggle');

const tomorrow = document.getElementById('tomorrow-date-toggle');

today.onclick = function () {
    const todayDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const valueInput = todayDate.toLocaleDateString('ru-RU', options);
    document.getElementById('datepickerinputStart').value = valueInput ;
    console.log(valueInput)
}

tomorrow.onclick = function () {
    const tomorrowDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const valueInput = tomorrowDate.toLocaleDateString('ru-RU', options);
    document.getElementById('datepickerinputStart').value = valueInput ;
    console.log(valueInput);
}

const pickerStartOneWay = datepicker('#datepickerinputStart',
    {
        id : 1,
        customDays : ['Вс', 'Пн' , 'Вт' , 'Ср' , 'Чт' , 'Пт' , 'Сб'],
        customMonths : ['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль', 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь', 'Декабрь'],
        customOverlayMonths: ['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль', 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь', 'Декабрь'],
        overlayButton : 'Выбрать',
        overlayPlaceholder : 'Введите год',
        formatter : (input, date, instance) => {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const value = date.toLocaleDateString('ru-RU', options);
            input.value = value
        }
    }
);
const pickerStartTwoWays = datepicker('#datepickerinputStart-twoWays',
    {
        id : 2,
        customDays : ['Вс', 'Пн' , 'Вт' , 'Ср' , 'Чт' , 'Пт' , 'Сб'],
        customMonths : ['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль', 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь', 'Декабрь'],
        customOverlayMonths: ['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль', 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь', 'Декабрь'],
        overlayButton : 'Выбрать',
        overlayPlaceholder : 'Введите год',
        formatter : (input, date, instance) => {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const value = date.toLocaleDateString('ru-RU', options);
            input.value = value
        }
    }
);

const pickerEndTwoWays = datepicker('#datepickerinputFinish-twoWays',
    {
        id : 2,
        customDays : ['Вс', 'Пн' , 'Вт' , 'Ср' , 'Чт' , 'Пт' , 'Сб'],
        customMonths : ['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль', 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь', 'Декабрь'],
        customOverlayMonths: ['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль', 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь', 'Декабрь'],
        overlayButton : 'Выбрать',
        overlayPlaceholder : 'Введите год',
        formatter : (input, date, instance) => {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const value = date.toLocaleDateString('ru-RU', options);
            input.value = value
        }
    }
);


pickerStartTwoWays.getRange();
pickerEndTwoWays.getRange();