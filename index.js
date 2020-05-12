class FadeInFadeoutElement {
    constructor(targetElementId, 
                showCSSClass = 'show-fade-away',
                secondsDurationShown = 10) {        
        this.targetElementId = targetElementId;
        this.contactBox = document.getElementById(this.targetElementId);
        this.secondsDurationShown= secondsDurationShown;
        this.showCSSCLass = 'show-fade-away';
        
        this.contactBox.addEventListener('click', (e) => {
            this.hide();
        });        
    }
    
    showWithDelay = (secondsBeforeShowing) => {
        setTimeout(() => {
            this.show()
        }, secondsBeforeShowing * 1000);        
    }

    show = (overrideDuration = this.secondsDurationShown) => {
        if (this.contactBox.classList.contains(this.showCSSCLass)) {
            return;
        }
        
        this.contactBox.classList.add(this.showCSSCLass);            
        setTimeout(() => {
            this.contactBox.classList.remove(this.showCSSCLass);    
        }, overrideDuration * 1000)    
    }
    
    hide = () => {
        const contactBox = document.getElementById(this.targetElementId);
        contactBox.classList.remove(this.showCSSCLass);    
    }          
}

const clicker = document.getElementById('clicker');
clicker.addEventListener('click', (e) => {
    (new FadeInFadeoutElement('purple-box')).show(10);
});

document.addEventListener('DOMContentLoaded', () => {
    //(new FadeInFadeoutElement('purple-box')).showWithDelay(5);
})
