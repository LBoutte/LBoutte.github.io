/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  var speedX = 0
  var speedY = 0
  var positionX = 0
  var positionY = 0

  // Game Item Objects
  var KEY = {
    ENTER: 13,
    LEFT: 13,
    UP: 13,
    RIGHT: 13,
    DOWN: 13
  };

  var walker = {
    x: 0,
    y: 0,
    sx: 0,
    sy: 0,
  }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    respositionGameItem();
    redrawGameItem();
    walker.positionX = speedX
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      speedX = -5;

    } else if (event.which === KEY.UP) {
      speedY = 5;

    } else if (event.which === KEY.RIGHT) {
      speedX = 5;

    } else if (event.which === KEY.DOWN) {
      speedY = -5;
    }

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function respositionGameItem() {
    
  }

  function redrawGameItem() {
    $("#walker").css("left", positionX);
    $("#walker").css("right", positionX);
    $("#walker").css("up", positionY);
    $("#walker").css("down", positionY);
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}