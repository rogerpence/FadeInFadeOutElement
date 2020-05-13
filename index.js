class FadeInFadeOutElement {
    constructor(targetElementId,
                CSSClass = 'show-fade-away',
                secondsDurationShown = 10) {

        this.targetElementId = targetElementId;
        this.targetElement = document.getElementById(this.targetElementId);
        if (!this.targetElement) {
            throw `Target element ${targetElementId} for FadeInFadeOutElement not found.`;
        }

        this.CSSClass = CSSClass;
        this.secondsDurationShown= secondsDurationShown;

        this.targetElement.addEventListener('click', this.hide);
    }

    showWithDelay = (secondsBeforeShowing) => {
        setTimeout(() => {
            this.show()
        }, secondsBeforeShowing * 1000);
    }

    show = (duration = this.secondsDurationShown) => {
        if (this.targetElement.classList.contains(this.CSSClass)) {
            return;
        }

        this.targetElement.classList.add(this.CSSClass);

        if (duration > 0) {
            setTimeout(() => {
                this.targetElement.classList.remove(this.CSSClass);
            }, duration * 1000)
        }
    }

    hide = () => {
        this.targetElement.removeEventListener('click', this.hide);
        this.targetElement.classList.remove(this.CSSClass);
        document.body.classList.remove('dim');
    }
}

const clicker = document.getElementById('clicker');
clicker.addEventListener('click', (e) => {
    let x = new FadeInFadeOutElement('cookies-msg');
    x.show(-1);
    document.body.classList.add('dim');
    // (new FadeInFadeOutElement('purple-box')).show(16);
});

const btn = document.getElementById('my-button');
btn.addEventListener('click', (e) => {
    console.log('button clicked');
});

document.addEventListener('DOMContentLoaded', () => {
    //(new FadeInFadeOutElement('purple-box')).showWithDelay(5);
})
