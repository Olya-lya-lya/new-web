const cardOut = document.querySelectorAll('.card-out');
const cardIn = document.querySelectorAll('.card');


for (let i = 0; i < cardIn.length; i++) {
    cardIn[i].addEventListener('mouseenter', () => {
       if(cardOut[i].style.display == 'none') {
        cardOut[i].style.display == 'block';
       }
    });
}