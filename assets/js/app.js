//## Most used elements
const splashScreen = document.querySelector('#splashScreen')
const startButton  = document.querySelector('#startGame')
const gameScreen   = document.querySelector('#playGame')
const playerGuess  = document.querySelector('#playerPrice')
const guessForm    = document.querySelector('#guessPrice')
const guessButton  = document.querySelector('#guessButton')
const mainCounter  = document.querySelector('#mainCounter')
const tooHighHint  = document.querySelector('#tooHigh')
const tooLowsHint  = document.querySelector('#tooLows')
const youWinrHint  = document.querySelector('#youWinr')
const playAgain    = document.querySelector('#playAgainBox')
const playAgainBtn = document.querySelector('#playAgain')
const totalTries   = document.querySelector('#totalTries')
const winrDetails  = document.querySelector('#winrDetails')
const commentTries = document.querySelector('#commentsTries')

//## Specific vars 
let rightPrice = null
let countTry = 0
const minPrice = 0
const maxPrice = 2000

//## Initialize the game values
initValues()

//## Settle limit from the vars defined above.
function initValues() {
    document.querySelector('#minPrice').textContent = minPrice
    document.querySelector('#maxPrice').textContent = maxPrice
}