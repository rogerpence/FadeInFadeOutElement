const clicker = document.getElementById('clicker');
const box = document.getElementById('purple-box');
const closer = box.querySelector('a');

clicker.addEventListener('click', e => {
    const DELAY = 3000;
    console.log('clicked');
    box.classList.add('show-contact-form');    

    setTimeout(() => {
        box.classList.remove('show-contact-form');    
    }, DELAY)    
});

box.addEventListener('click', e => {
    box.classList.remove('show-contact-form');    
});


export function documentReady(fn) {
    if (document.attachEvent ? document.readyState === "complete" :
                               document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

setTimeout(() => {
    box.classList.remove('show-contact-form');    
}, DELAY)    

