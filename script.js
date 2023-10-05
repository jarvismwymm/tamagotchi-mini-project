console.log("Hello World")

let tamagotchi1

class Tamagotchi {
    constructor() {
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 1;
        this.age = 0;
        this.hungerInterval = setInterval(() => {
            this.hunger++
            displayHunger()
        }, 2000)
        this.sleepinessInterval = setInterval(() => {
            this.sleepiness++
            displaySleepiness()
        }, 2000)
        this.boredomInterval = setInterval(() => {
            this.boredom++
            displayBoredom()
        }, 2000)
        
    }
    addName(name) {
        this.name = name 
    }
    feedMe() {
        this.hunger -= 1
    }
    goToSleep() {
        this.sleepiness -= 1
    }
    play() {
        this.boredom -= 1
    }
}





function start() {
   const response = prompt("What do you want your tamagotchi to be named?")
     tamagotchi1 = new Tamagotchi()
     displayHunger();
     displaySleepiness();
     displayBoredom();
     tamagotchi1.addName(response)
     console.log(tamagotchi1)
}

function feed() {
    tamagotchi1.feedMe() 
    displayHunger()
}
function sleep() {
    tamagotchi1.goToSleep() 
    displaySleepiness()
}
function play() {
    tamagotchi1.play() 
    displayBoredom()
}


function displayHunger() {
    let element = document.getElementById("hunger-display")
    element.innerHTML = tamagotchi1.hunger
}

function displaySleepiness() {
    let element = document.getElementById("sleepiness-display")
    element.innerHTML = tamagotchi1.sleepiness
}
function displayBoredom() {
    let element = document.getElementById("boredom-display")
    element.innerHTML = tamagotchi1.boredom
}