//## Most used elements
const splashScreen = document.querySelector('#splashScreen')
const startButton  = document.querySelector('#startGame')
const gameScreen   = document.querySelector('#playGame')
const playerGuess  = document.querySelector('#playerPrice')
const guessButton  = document.querySelector('#guessPrice')

//## Specific vars 
let justePrix = null
const minPrice = 0
const maxPrice = 2000

//## Initialize the game values
initValues()

//## Settle limit from the vars defined above.
function initValues() {
    document.querySelector('#minPrice').textContent = minPrice
    document.querySelector('#maxPrice').textContent = maxPrice
}