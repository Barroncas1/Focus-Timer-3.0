import {
    divButtons, time,
    florestButton, rainButton, coffeButton, fireButton, body,
} from "./elements.js";

export function Dark() {

 

    function changemode() {
        divButtons.classList.toggle('dark')
        time.classList.toggle('dark')

        florestButton.classList.toggle('dark')
        rainButton.classList.toggle('dark')
        coffeButton.classList.toggle('dark')
        fireButton.classList.toggle('dark')

       
    }
    
    function bgLightMode() {
        body.style.backgroundColor = '#FFFFFF'
        
    }
    
    function bgDarkMode(){
        body.style.backgroundColor = '#121214'
    }

    return {changemode, bgDarkMode, bgLightMode}
}