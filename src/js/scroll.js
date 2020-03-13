import { CountUp } from 'countup.js';

function scrollSection() {
    let element = document.querySelector('.experience__number');

    window.addEventListener('scroll', function onScroll() {        
        if (pageYOffset > element.getBoundingClientRect().top) {
            let counter1 = new CountUp('target', 999);
            counter1.start();
            let counter2 = new CountUp('target-first', 30, 0);
            counter2.start();
            let counter3 = new CountUp('target-second', 30, 0);
            counter3.start();
            this.window.removeEventListener('scroll', onScroll);

        }           

    });
}

scrollSection();