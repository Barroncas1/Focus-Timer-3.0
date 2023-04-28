import { minutesDisplay, secondsDisplay,
    florestButton, rainButton, coffeButton, fireButton, lightButton, darkButton, playButton, pauseButton} from "./elements.js";

import { Timer } from "./timer.js";
import Events from "./events.js"
import { Controls } from "./controls.js";

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
})

const controls = Controls({florestButton,
    rainButton,
    coffeButton,
    fireButton,
    lightButton,
    darkButton,
    playButton,
    pauseButton
})


Events({timer, controls})





