const ratioOneWay = document.getElementById('inlineRadio1');
const ratioTwoWays = document.getElementById('inlineRadio2');
const oneWaySection = document.getElementsByClassName('one-way-inputs');
const twoWaysSection = document.getElementsByClassName('two-ways-inputs');

form.onclick = function () {
    if (ratioOneWay.checked) {
        oneWaySection[0].classList.remove('d-none');
        twoWaysSection[0].classList.add('d-none');
    }
    else {
        oneWaySection[0].classList.add('d-none');
        twoWaysSection[0].classList.remove('d-none');
    }

    if (ratioTwoWays.checked) {
        twoWaysSection[0].classList.add('d-none');
        oneWaySection[0].classList.remove('d-none');
    }
    else {
        oneWaySection[0].classList.add('d-none');
        twoWaysSection[0].classList.remove('d-none');
    }
}