// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const error = document.querySelector('#modal')
error.setAttribute("class", "hidden")

function addLikeFunctionality(){
  document.body.addEventListener("click", function(event){   // listen for click
    if (event.target.className === 'like-glyph') {       // if click was on 'like-glyph'
        mimicServerCall()
        .then(function(resp) {
            event.target.innerText = FULL_HEART
            event.target.setAttribute("class", "activated-heart")
        })
        .catch(function(err) {
          error.removeAttribute("class")
          document.querySelector("#modal-message").innerText = err
          setTimeout(function(){error.setAttribute("class", "hidden")}, 5000)
        })
      } else if (event.target.className === "activated-heart") {  // kinda cheated here, didn't call mimicServer again
        event.target.innerText = EMPTY_HEART
        event.target.setAttribute("class", "like-glyph")
      }
  })
}

function main(){
  addLikeFunctionality()
}

main()
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
