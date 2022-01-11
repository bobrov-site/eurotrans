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