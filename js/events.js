import { playButton, stopButton, plusButton, minusButton, pauseButton,
florestButton, rainButton, coffeButton, fireButton, lightButton, darkButton, florestInput, rainInput, coffeInput, fireInput, florestSound, rainSound, coffeSound, fireSound} from "./elements.js";

import { Sound } from "./sound.js";

import { Dark } from "./dark.js";

export default function({
    timer,
    controls
}) {
    playButton.addEventListener('click', function(){
        timer.countdown()
        controls.changePausePlay()
    })

    pauseButton.addEventListener('click', () => {
        timer.hold()
        controls.changePausePlay()
    })

    stopButton.addEventListener("click", () => {
        timer.reset()
    })

    plusButton.addEventListener('click', () => {
        timer.plusTime()
    })

    minusButton.addEventListener('click', () => {
        timer.minusTime()
    })

    florestButton.addEventListener('click', () => {
        controls.florestPressButton()
        Sound().floresPlay()
    })

    rainButton.addEventListener('click', () => {
        controls.rainPressButton()
        Sound().rainPlay()
    })

    coffeButton.addEventListener('click', () => {
        controls.coffePressButton()
        Sound().coffePlay()
    })
    
    fireButton.addEventListener('click', () => {
        controls.firePressButton()
        Sound().firePlay()
    })

    florestButton.addEventListener('input', () => {
        Sound().setVolume(florestSound, florestInput)
    })
    
    rainButton.addEventListener('input', () => {
        Sound().setVolume(rainSound, rainInput)
    })
    
    coffeButton.addEventListener('input', () => {
        Sound().setVolume(coffeSound, coffeInput)
    })
    
    florestButton.addEventListener('input', () => {
        Sound().setVolume(fireSound, fireInput)
    })
    
    
    
    lightButton.addEventListener('click', () => {
        Dark().changemode()
        controls.change()
        Dark().bgDarkMode()
    })

    darkButton.addEventListener('click', () => {
        Dark().changemode()
        controls.change()
        Dark().bgLightMode()
    })



}
