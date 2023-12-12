//## Most used elements
const splashScreen = document.querySelector('#splashScreen')
const startButton  = document.querySelector('#startGame')

let justePrix = null
const minPrice = 0
const maxPrice = 2000

startButton.addEventListener('click', function() {

    justePrix = getRandomNumber()
    splashScreen.classList.add('closed')
    console.log(justePrix)

}, false)





function getRandomNumber() {

    min = Math.ceil(minPrice)
    max = Math.floor(maxPrice)

    return Math.floor(Math.random() * (max - min + 1)) + min

}