import {
    fireSound, florestSound, rainSound, coffeSound, 
 } from "./elements.js";

export function Sound() {

    florestSound.loop = true
    rainSound.loop = true
    coffeSound.loop = true
    fireSound.loop = true



    function play(audioElement) {
        if (audioElement.paused) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    }

    function floresPlay() {
        play(florestSound)
        fireSound.pause()
        rainSound.pause()
        coffeSound.pause()
    
    }

    

    function rainPlay() {
        play(rainSound)
        florestSound.pause()
        fireSound.pause()
        coffeSound.pause()
    }

    

    function coffePlay() {
        play(coffeSound)
        florestSound.pause()
        rainSound.pause()
        fireSound.pause()
    }

    
    
    function firePlay() {
        play(fireSound)
        florestSound.pause()
        rainSound.pause()
        coffeSound.pause()
    }

    function setVolume(audio, input){
        audio.volume = input.value
    }

    return {
        floresPlay,
        rainPlay,
        coffePlay,
        firePlay,
        setVolume
    }
}