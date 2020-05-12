class ContactForm {
    constructor() {        
        this.contactBox = document.getElementById('purple-box');
        
        this.contactBox.addEventListener('click', (e) => {
            this.hide();
        });        
    }
    
    show = () => {
        const DELAY = 3000;
        if (this.contactBox.classList.contains('show-contact-form')) {
            return;
        }
        
        this.contactBox.classList.add('show-contact-form');    
        
        setTimeout(() => {
            this.contactBox.classList.remove('show-contact-form');    
        }, DELAY)    
    }
    
    hide = () => {
        const contactBox = document.getElementById('purple-box');
        contactBox.classList.remove('show-contact-form');    
    }          
}

const clicker = document.getElementById('clicker');
clicker.addEventListener('click', (e) => {
    (new ContactForm()).show();
});

documentReady = (fn) => {
    if (document.attachEvent ? document.readyState === "complete" :
                               document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

documentReady(() => {
    setTimeout(() => {
        (new ContactForm()).show();
    }, 5000);    
})
