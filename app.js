const higherLevel = document.getElementById('higher-level')
const lowerLevel = document.getElementById('lower-level')
const higherValue = document.getElementById('higher-coin-value')
const lowerValue = document.getElementById('lower-coin-value')
const spinButton = document.getElementById('spin-button')

let currentLevel = parseInt(document.getElementById('level').innerHTML, 10)
let currentValue = document.getElementById('coin-value').innerHTML
let currentBetSize = document.getElementById('bet-size').innerHTML
let currentCoins = document.getElementById('total-coins').innerHTML




// declaring all image positions
const p = []
p[0] = document.getElementById('p1')
p[1] = document.getElementById('p2')
p[2] = document.getElementById('p3')
p[3] = document.getElementById('p4')
p[4] = document.getElementById('p5')
p[5] = document.getElementById('p6')
p[6] = document.getElementById('p7')
p[7] = document.getElementById('p8')
p[8] = document.getElementById('p9')
p[9] = document.getElementById('p10')
p[10] = document.getElementById('p11')
p[11] = document.getElementById('p12')
p[12] = document.getElementById('p13')
p[13] = document.getElementById('p14')
p[14] = document.getElementById('p15')

// coin values array + Paylines
const Values = ['0,01', '0,03', '0,05', '0,10', '0,20', '0,50']
const ValuesFloats = [0.01, 0.03, 0.05, 0.10, 0.20, 0.50]
const payLines = 25
let i = 0

// BetSize formula
function betSize(){
  currentBetSize = currentLevel * ValuesFloats[i] * payLines
  currentBetSize = currentBetSize.toFixed(2)
  document.getElementById('bet-size').innerHTML = currentBetSize.toString().replace(/[.]/, ",")
}

// increment and decrement level on click
higherLevel.onclick = function() {
  if(currentLevel != 10){
    document.getElementById('level').innerHTML = ++currentLevel
    betSize()
    console.log(currentBetSize)
  } else {
    return
  }
}

lowerLevel.onclick = function() {
  if(currentLevel != 1) {
    document.getElementById('level').innerHTML = --currentLevel
    betSize()
    console.log(currentBetSize)
  } else {
    return
  }
}

// increment and decrement coin value on click (including FLoat values)
higherValue.onclick = function() {
  if(i === Values.length - 1) {
    return
  } else {
    Values[i++]
    ValuesFloats[i]
    document.getElementById('coin-value').innerHTML = Values[i]
    betSize()
    console.log(currentBetSize)
  }
}


lowerValue.onclick = function() {
  if(i === 0) {
    return
  } else {
    Values[i--]
    ValuesFloats[i]
    document.getElementById('coin-value').innerHTML = Values[i]
    betSize()
    console.log(currentBetSize)
  }
}

// take away the bet value from the total amount of coins each time spin button is clicked
let newCurrentCoins = parseFloat(currentCoins)
function CoinsUpdate() {
betSize()
newCurrentCoins = newCurrentCoins - currentBetSize
currentCoins = newCurrentCoins.toFixed(2)
document.getElementById('total-coins').innerHTML = currentCoins.toString().replace(/[.]/, ",")
}

// spin animation


// create an array with each unique image
const symbols = [];

// symbols
symbols[0] = "url('images/icons/female cut.png')";
symbols[1] = "url('images/icons/male cut.png')";
symbols[2] = "url('images/icons/trolley.png')";
symbols[3] = "url('images/icons/pile of gold.png')";
symbols[4] = "url('images/icons/dynamite crate.png')";
symbols[5] = "url('images/icons/gas lamp.png')";
symbols[6] = "url('images/icons/snake.png')";
symbols[7] = "url('images/icons/barrels.png')";
symbols[8] = "url('images/icons/boots.png')";
symbols[9] = "url('images/icons/wild.png')";
symbols[10] = "url('images/icons/scatter2.png')";
symbols[11] = "url('images/icons/scatter.png')";

// randomizer
let randomNum = 1

function randomArrNum() {
randomNum = symbols[Math.floor(Math.random() * symbols.length)];
}

// making a function to create random images in each position
function symbolPlacement () {
  for (let placeholder = 0; placeholder < p.length; placeholder++) {
    randomArrNum()
    p[placeholder].style.backgroundImage = randomNum
  }
}

// on click spin button
spinButton.onclick = function() {
  symbolPlacement()
  CoinsUpdate()
  console.log(newCurrentCoins)
}

// randomize pictures on loading of screen
window.onload = symbolPlacement();

