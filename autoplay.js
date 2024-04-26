async function playLoop() {
    setInterval(function() {
      //  Doing the same thing that would happen if you press "+" button near "Happiness" parameter  
      play = true
    }, 15000);  // Replace with any desired value (cooldown in ms)
}
playLoop();
