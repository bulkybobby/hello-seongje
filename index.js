
const scrollTrigger = 120;

window.onscroll = function (){
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add('on-Scroll');
    } else {
    document.getElementsByTagName("header")[0].classList.remove('on-Scroll');
    }
}