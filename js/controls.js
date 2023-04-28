

export function Controls({
    florestButton,
    rainButton,
    coffeButton,
    fireButton,
    lightButton,
    darkButton,
    playButton,
    pauseButton 
}) {
    function florestPressButton() {
        florestButton.classList.toggle('buttonPress')
        rainButton.classList.remove('buttonPress')
        fireButton.classList.remove('buttonPress')
        coffeButton.classList.remove('buttonPress')

    }
    function rainPressButton() {
        rainButton.classList.toggle('buttonPress')
        florestButton.classList.remove('buttonPress')
        fireButton.classList.remove('buttonPress')
        coffeButton.classList.remove('buttonPress')
    }
    function firePressButton() {
        fireButton.classList.toggle('buttonPress')
        rainButton.classList.remove('buttonPress')
        florestButton.classList.remove('buttonPress')
        coffeButton.classList.remove('buttonPress')
    }
    function coffePressButton() {
        coffeButton.classList.toggle('buttonPress')
        rainButton.classList.remove('buttonPress')
        fireButton.classList.remove('buttonPress')
        florestButton.classList.remove('buttonPress')
    }

    function change() {
        lightButton.classList.toggle('hide')
        darkButton.classList.toggle('hide')
    }

    function changePausePlay(){
        playButton.classList.toggle('hide')
        pauseButton.classList.toggle('hide')
    }

    return {
        florestPressButton,
        rainPressButton,
        firePressButton,
        coffePressButton,
        change,
        changePausePlay
    }
}

