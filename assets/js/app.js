let justePrix = null
const minPrice = 0
const maxPrice = 2000

document.querySelector('#startGame').addEventListener('click', function() {

    min = Math.ceil(minPrice)
    max = Math.floor(maxPrice)

    justePrix = Math.floor(Math.random() * (max - min + 1)) + min

    console.log(justePrix)

}, false)