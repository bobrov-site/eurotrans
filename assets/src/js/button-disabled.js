//button submit disabled action

const from = document.getElementById('dataListFrom');
const to = document.getElementById('dataListTo');
const passenger = document.getElementById('old-men');
const date = document.getElementById('datepickerinputStart');
const submitButton = document.getElementById('submit-button');
const form = document.getElementById('hero-form');
const inputs = document.querySelectorAll('.one-way-inputs-input');

form.onclick = function (event) {

    if (from.value !== '' && to.value !== '' && passenger.value !== '' && date.value !== '' ) {
        console.log(from.value)
        console.log(to.value)
        console.log(passenger.value)
        console.log(date.value)
        submitButton.classList.remove('btn-disabled');
        submitButton.setAttribute('type', 'submit');
    }

    else {
        console.log('else');
        submitButton.classList.add('btn-disabled');
        submitButton.setAttribute('type', 'button');
    }
}