var score = 0
var ding = new Audio('ding.mp3')
var backgroundMusic = new Audio("backgroundMusic.mp3")
var buttonTimes = 0
var goBackUp = true
function loopBackgroundMusic() {
  if(Math.floor(backgroundMusic.currentTime)===148) {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0
    backgroundMusic.play
  }
}
function pressButton() {
  document.getElementById("buttonImage").src = "pushedButton.png"
  setTimeout(unpressButton,1000)
}
function unpressButton() {
  if(this.goBackUp) {
    document.getElementById("buttonImage").src = "button.png"
  }
}
function goBackUpChange(value) {
  this.goBackUp = value
}
function buttonPress() {
  goBackUpChange(false)
  setTimeout(goBackUpChange,true,1000)
  if(buttonTimes===0) {
    backgroundMusic.play();
    var done = false
    backgroundMusic.addEventListener('loadeddata',function() {
      if(this.currentTime===this.duration) {
        done = true
      }
    })
  }
  if(done) {
    backgroundMusic.play();
  }
  setInterval(loopBackgroundMusic,0)
  score += 1
  ding.pause();
  ding.currentTime = 0
  ding.play();
  document.getElementById("pointDisplay").innerHTML = `Your score is ${score}`
  buttonTimes += 1
  pressButton()
}