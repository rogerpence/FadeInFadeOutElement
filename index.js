class FadeInFadeOutElement {
    constructor(targetElementId, 
                showCSSClass = 'show-fade-away',
                secondsDurationShown = 10) {        
        this.targetElementId = targetElementId;
        this.targetElement = document.getElementById(this.targetElementId);
        if (!this.targetElement) {
            throw `Target element ${targetElementId} for FadeInFadeOutElement not found.`
        }                     

        this.secondsDurationShown= secondsDurationShown;
        this.showCSSCLass = 'show-fade-away';
        
        this.targetElement.addEventListener('click', this.hide);
    }
    
    showWithDelay = (secondsBeforeShowing) => {
        setTimeout(() => {
            this.show()
        }, secondsBeforeShowing * 1000);        
    }

    show = (overrideDuration = this.secondsDurationShown) => {
        if (this.targetElement.classList.contains(this.showCSSCLass)) {
            return;
        }
        
        this.targetElement.classList.add(this.showCSSCLass);    
        
        if (overrideDuration > 0) {
            setTimeout(() => {
                this.targetElement.classList.remove(this.showCSSCLass);    
            }, overrideDuration * 1000)    
        }            
    }
    
    hide = () => {
        this.targetElement.removeEventListener('click', this.hide); 
        this.targetElement.classList.remove(this.showCSSCLass);    
    }          
}

const clicker = document.getElementById('clicker');
clicker.addEventListener('click', (e) => {
    let x = new FadeInFadeOutElement('cookies-msg');
    x.show(-1);
    // (new FadeInFadeOutElement('purple-box')).show(16);
});

document.addEventListener('DOMContentLoaded', () => {
    //(new FadeInFadeOutElement('purple-box')).showWithDelay(5);
})
