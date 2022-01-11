//= ../../../node_modules/js-datepicker/dist/datepicker.min.js

const pickerStart = datepicker('.dateStart',
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
const pickerEnd = datepicker('.dateEnd',
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

pickerStart.getRange();
pickerEnd.getRange();