// We use the Objects below to control toggling like / unlike status

const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

const colorStates = {
  "red" : "",
  "": "red"
};

// STEP 1: The line of code below is what lets JavaScript find the elements that
// we want to make clickable. Without JavaScript, clicking on these heart shapes
// does nothing. Uncomment the code and refresh the demo page. 

const articleHearts = document.querySelectorAll(".like-glyph");


// Callback function for when a heart is clicked
function likeCallback(e) {
  const heart = e.target; // Get the clicked heart element
  // Simulate a server call
  mimicServerCall()
    .then(function(serverMessage){
      // STEP 2: If server call succeeds, update the heart's appearance
      alert("You notified the server!"); // Notify user
      alert(serverMessage);              // Show server message
      heart.innerText = glyphStates[heart.innerText]; // Toggle heart glyph
      heart.style.color = colorStates[heart.style.color]; // Toggle heart color
    })
    .catch(function(error) {
      // If server call fails, alert the user
      alert("Something went wrong!");
    });
}

// STEP 3: In order for the call to the server and the update of the screen to
// work, we need to add a click event listener to the elements we identified in
// STEP 1. That's Pillar 2, event handling. Uncomment this code:

// Loop through each element in the NodeList 'articleHearts'
for (const glyph of articleHearts) {
  // Add a click event listener to the current heart element
  // When the heart is clicked, the likeCallback function will run
  glyph.addEventListener("click", likeCallback);
}

// STEP 4: 

// When all the STEPs' code changes have been complete, you'll be able to see a
// working demonstration of our reference example. Sure, it's maybe not as
// pretty as a professional site, but they're only different from our site in
// style, not substance.

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall() {
  // Returns a new Promise object
  return new Promise(function(resolve, reject) {
    // Waits 300 milliseconds before running the function inside setTimeout
    setTimeout(function() {
      // After 300ms, the Promise is resolved with a message string
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}

