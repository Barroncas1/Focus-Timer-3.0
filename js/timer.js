
export function Timer({
    minutesDisplay,
    secondsDisplay,
}){
    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)
    function countdown() {
        timerTimeOut = setTimeout(function() {
            let minutes = Number(minutesDisplay.textContent)
            let seconds = Number(secondsDisplay.textContent)
            updateDisplay(minutes, 0)

            if (minutes <= 0 && seconds <= 0) {
                updateDisplay()
                return
            }


            if ( seconds <= 0) {
                seconds = 60
                --minutes
            }
            
            updateDisplay(minutes, seconds - 1)
            
            countdown()
        }, 1000)
    }
    
    function updateDisplay(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function reset(){
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }
    
    function hold(){
        clearTimeout(timerTimeOut)
    }

    function plusTime(){
        let minutesNew = Number(minutesDisplay.textContent)
        minutesNew += 5
        updateDisplay(minutesNew, 0)
    }

    function minusTime(){
        let minutes = Number(minutesDisplay.textContent)
        if (minutes <= 0 ) {
            reset()
        } else {
            minutes -= 5
            updateDisplay(minutes, 0)
        }
        
    }
    
    
    return {
        updateDisplay,
        countdown,
        hold,
        reset,
        plusTime,
        minusTime,
    }

}