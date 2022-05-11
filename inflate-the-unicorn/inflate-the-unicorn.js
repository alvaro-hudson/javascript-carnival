// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

//Variable for the images
let unicorns = document.getElementsByClassName('inflate-an-image')
let unicornArray = []

// let unicorn1 = unicorns[0]
// let unicorn2 = unicorns[1]
// let unicorn3 = unicorns[2]

let image1 = './images/unicorn-1.png'
let image2 = './images/unicorn-2.png'
let image3 = './images/unicorn-3.png'
// let imageArray = [image1, image2, image3]

//Function to change the images
function unicornClick(e) {
  let unicorn = e.target

  let currentUnicorn = unicornArray.find((element) => element.image === unicorn)

  currentUnicorn.total++

  if (currentUnicorn.total == 4) {
    alert(`Unicorn says thank you!`)
    //I couldn't find out how to make it say the specific unicorn
  }

  for (let i = 0; i < unicornArray.length; i++) {
    if (currentUnicorn.total == 1) {
      unicorn.src = image1
    } else if (currentUnicorn.total == 2) {
      unicorn.src = image2
    } else if (currentUnicorn.total == 3) {
      unicorn.src = image3
    }
  }
}

for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = unicornClick
  unicornArray.push({
    image: unicorns[i], //didn't end up using this line
    total: 0,
  })
}

console.log(unicornArray)

//Notes I had made

//alter the element.image t
//Use .find() to find the unicorn in the unicornArray that equals the unicorn that was clicked (e.target)
//Once found then add the total by 1 for it.
//Then loop through the imageArray and if the 'X.png' matches the total' or something something then that should be the new image

//Loop to allow all the unicorn images function to be accessed at anytime with a click
// for (let i = 0; i < unicorns.length; i++) {
//   unicorns[i].onclick = unicornClick

//Push into the unicorn array
//add a count.

//Psuedocode for step 5
//Create a variable for each unicorn?
//Create an object using the foor loop
//in the for loop
//push each item into a blank array
//when pushed in make the element an array
//One which takes into account the image
//another which takes into account the total
//In the main function
//
