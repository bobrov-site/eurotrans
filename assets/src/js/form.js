//button submit disabled action

const from = document.getElementById('dataListFrom');
const to = document.getElementById('dataListTo');
const passenger = document.getElementById('old-men');
const date = document.getElementById('datepickerinputStart');
const submitButton = document.getElementById('submit-button');
const form = document.getElementById('hero-form');
const inputs = document.querySelectorAll('.one-way-inputs-input');

const ratioOneWay = document.getElementById('inlineRadio1');
const ratioTwoWays = document.getElementById('inlineRadio2');
const oneWaySection = document.getElementsByClassName('one-way-inputs');
const twoWaysSection = document.getElementsByClassName('two-ways-inputs');


form.onclick = function (event) {
    console.log('click')

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

    if (ratioOneWay.checked) {
        oneWaySection[0].classList.add('d-none');
        twoWaysSection[0].classList.remove('d-none');
    }
    else {
        ratioOneWay.removeAttribute('checked');
        oneWaySection[0].classList.remove('d-none');
        twoWaysSection[0].classList.add('d-none');
    }

    if (ratioTwoWays.checked) {
        oneWaySection[0].classList.add('d-none');
        twoWaysSection[0].classList.remove('d-none');
    }
    else {
        twoWaysSection[0].classList.add('d-none');
        oneWaySection[0].classList.remove('d-none');
    }
}