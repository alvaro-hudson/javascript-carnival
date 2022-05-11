// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

//Cells Variable
let cellsArray = document.getElementsByTagName('td')
let cellsArrayAlt = document.getElementById('table')
console.log(cellsArrayAlt.rows[1].cells)

//Random number function
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let randomIndex = getRandomInt(0, cellsArray.length - 1)
let randomCell = cellsArray[randomIndex]

function showMole() {
  let img = document.createElement('img')
  img.id = 'mole'
  img.src = 'mole.png'
  randomCell.appendChild(img)
}
showMole()
