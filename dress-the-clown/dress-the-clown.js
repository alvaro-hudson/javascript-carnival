// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

let head = document.getElementById('head')
let body = document.getElementById('body')
let feet = document.getElementById('feet')

let headIndex = 0
let bodyIndex = 0
let feetIndex = 0
let clothingIndex = 0

function changeClothes() {
  if (headIndex > 5) {
    headIndex = 0
  } else if (headIndex < 0) {
    headIndex = 5
  } else if (bodyIndex > 5) {
    bodyIndex = 0
  } else if (bodyIndex < 0) {
    bodyIndex = 5
  } else if (feetIndex > 5) {
    feetIndex = 0
  } else if (feetIndex < 0) {
    feetIndex = 5
  } else if (clothingIndex > 2) {
    clothingIndex = 0
  } else if (clothingIndex < 0) {
    clothingIndex = 2
  }
  head.src = `./images/head${headIndex}.png`
  body.src = `./images/body${bodyIndex}.png`
  feet.src = `./images/shoes${feetIndex}.png`
}

function changeIndexUp() {
  if (clothingIndex == 0) {
    headIndex++
  } else if (clothingIndex == 1) {
    bodyIndex++
  } else if (clothingIndex == 2) {
    feetIndex++
  }
}

function changeIndexDown() {
  if (clothingIndex == 0) {
    headIndex--
  } else if (clothingIndex == 1) {
    bodyIndex--
  } else if (clothingIndex == 2) {
    feetIndex--
  }
}

//Function Idea from Gerard to not repeat myself by calling the changeClothes() function 4 times in my original .addEventListener() code
function updateIndexes(key) {
  switch (key) {
    case 'ArrowRight':
      changeIndexUp()
      break
    case 'ArrowLeft':
      changeIndexDown()
      break
    case 'ArrowUp':
      clothingIndex--
      break
    case 'ArrowDown':
      clothingIndex++
      break
  }
}

//Refactored addEventListener from Gerards advice
document.addEventListener('keydown', function (e) {
  updateIndexes(e.key)
  changeClothes()
})

//ORIGINAL .ADDEVENTLISTENER I CAME UP WITH:

// document.addEventListener('keydown', function (e) {
//   switch (e.key) {
//     case 'ArrowRight':
//       changeIndexUp()
//       changeClothes()
//       break
//     case 'ArrowLeft':
//       changeIndexDown()
//       changeClothes()
//       break
//     case 'ArrowUp':
//       clothingIndex--
//       changeClothes()
//       break
//     case 'ArrowDown':
//       clothingIndex++
//       changeClothes()
//       break
//   }
// })
