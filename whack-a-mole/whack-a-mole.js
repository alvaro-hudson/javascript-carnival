// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

//Cells Variable
let cellsArray = document.getElementsByTagName('td')
let mole = document.createElement('img')
mole.id = 'mole'
mole.src = 'mole.png'
let audio = new Audio('../whack-a-mole/whack-audio.wav')

//Random number function
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

//Function to make the mole show up randomly
function showMole() {
  let randomIndex = getRandomInt(0, cellsArray.length - 1)
  let randomCell = cellsArray[randomIndex]
  randomCell.appendChild(mole)
  console.log(randomCell)
}
showMole()

function whackedMole(e) {
  audio.play()
  showMole()
}

mole.onclick = whackedMole
