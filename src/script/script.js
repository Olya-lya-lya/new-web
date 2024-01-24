const cardOut = document.querySelectorAll('.card-out');
const cardIn = document.querySelectorAll('.card');


for (let i = 0; i < cardIn.length; i++) {
    cardIn[i].addEventListener('mouseenter', () => {
        for (let j = 0; j < cardOut.length; j++) {
            cardOut[j].addEventListener('mouseleave', () => {

            });
        }
        if (cardOut[0].style.display == 'none') {
            cardOut[0].style.display = 'block';
        }
    });
}

