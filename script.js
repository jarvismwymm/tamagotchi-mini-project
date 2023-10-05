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
            displayHunger();
            this.areYouDead()
        }, 2000)
        this.sleepinessInterval = setInterval(() => {
            this.sleepiness++
            displaySleepiness()
            this.areYouDead()
        }, 2000)
        this.boredomInterval = setInterval(() => {
            this.boredom++
            displayBoredom()
            this.areYouDead()
        }, 2000)
        this.ageInterval = setInterval(() => {
            this.age++
            displayAge()
            if (this.age == 3) {
                let element3 = document.getElementById("Tamagotchi")
            element3.src = "./download.png"
            }
            if (this.age == 5) {
                let element3 = document.getElementById("Tamagotchi")
            element3.src = "./mametchi.jpg"
            }
        }, 4000)
        
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
    areYouDead() {
        if (this.hunger == 10 || this.sleepiness == 10 || this.boredom == 10) {
            clearInterval(this.hungerInterval)
            clearInterval(this.sleepinessInterval)
            clearInterval(this.boredomInterval)
            clearInterval(this.ageInterval)
            displayDeath()
        }
    }
}





function start() {
   const response = prompt("What do you want your tamagotchi to be named?")
   alert("keep your Tamagotchi's Hunger, Sleepiness and Boredom below 10 or else your Tamagotchi will die. You will go to jail for neglecting your Tamagotchi which is a severe crime.")
     tamagotchi1 = new Tamagotchi()
     displayHunger();
     displaySleepiness();
     displayBoredom();
     displayAge();
     tamagotchi1.addName(response)
     let element = document.getElementById("death-message")
    element.innerHTML = ""
     let element1 = document.getElementById("display-name")
    element1.innerHTML = response
    let element3 = document.getElementById("Tamagotchi")
    element3.src = "./violetchi.jpg"
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
function displayAge() {
    let element = document.getElementById("age-display")
    element.innerHTML = tamagotchi1.age
}

function displayDeath() {
    let element = document.getElementById("death-message")
    element.innerHTML = `You neglected ${tamagotchi1.name}. ${tamagotchi1.name} has died`
}