//button submit disabled action

//oneway
const from = document.getElementById('dataListFrom');
const to = document.getElementById('dataListTo');
const passenger = document.getElementById('old-men');
const date = document.getElementById('datepickerinputStart');
const submitButton = document.getElementById('submit-button');
const form = document.getElementById('hero-form');
//twoways
const fromTwoWays = document.getElementById('dataListFrom-twoWays');
const toTwoWays = document.getElementById('dataListTo-twoWays');
const passengerTwoWays = document.getElementById('old-men-twoWays');
const dateTwoWays = document.getElementById('datepickerinputStart-twoWays');
const dateFinishTwoWays = document.getElementById('datepickerinputFinish-twoWays');
const submitButtonTwoWays = document.getElementById('submit-button-twoWays');
const formTwoWays = document.getElementById('hero-form-twoWays');

const ratioOneWay = document.getElementById('inlineRadio1');
const ratioTwoWays = document.getElementById('inlineRadio2');
const oneWaySection = document.getElementsByClassName('one-way-inputs');
const twoWaysSection = document.getElementsByClassName('two-ways-inputs');


form.onclick = function (event) {
    console.log('click')

    if (from.value !== '' && to.value !== '' && passenger.value !== '' && date.value !== '' ) {
        // console.log(from.value)
        // console.log(to.value)
        // console.log(passenger.value)
        // console.log(date.value)
        submitButton.classList.remove('btn-disabled');
        submitButton.setAttribute('type', 'submit');
    }

    else {
        // console.log('else');
        submitButton.classList.add('btn-disabled');
        submitButton.setAttribute('type', 'button');
    }

    if (fromTwoWays.value !== '' && toTwoWays.value !== '' && passengerTwoWays.value !== '' && dateTwoWays.value !== '' && dateFinishTwoWays.value !== '' ) {
        submitButtonTwoWays.classList.remove('btn-disabled');
        submitButtonTwoWays.setAttribute('type', 'submit');
    }
    else {
        submitButtonTwoWays.classList.add('btn-disabled');
        submitButtonTwoWays.setAttribute('type', 'button');
    }

    //checkboxes

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