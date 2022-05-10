// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

//Variable for the images
let unicorn = document.getElementsByClassName('inflate-an-image')

function unicornClick() {
  console.log('Hello')
}

//Loop to allow all the unicorn images variable to be accessed at anytime with a click
for (let i = 0; i < unicorn.length; i++) {
  unicorn[i].onclick = unicornClick
}
