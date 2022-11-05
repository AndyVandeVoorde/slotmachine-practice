const higherLevel = document.getElementById('higher-level')
const lowerLevel = document.getElementById('lower-level')
const higherValue = document.getElementById('higher-coin-value')
const lowerValue = document.getElementById('lower-coin-value')
const spinButton = document.getElementById('spin-button')

let currentLevel = parseInt(document.getElementById('level').innerHTML, 10)
let currentValue = document.getElementById('coin-value').innerHTML
let currentBetSize = document.getElementById('bet-size').innerHTML
let currentCoins = document.getElementById('total-coins').innerHTML

let currentBetSizeNumber = parseFloat(document.getElementById('bet-size').innerHTML.replace(/[,]/, "."))

// delay variable for delay at button click
const delay = 100

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
// symbols[9] = "url('images/icons/wild.png')";
// symbols[10] = "url('images/icons/scatter2.png')";
// symbols[11] = "url('images/icons/scatter.png')";

// create const Matrix for items (protect against changes)
const FemaleMatrix3 = 2
const FemaleMatrix4 = 5
const FemaleMatrix5 = 10

const MaleMatrix3 = 1.4
const MaleMatrix4 = 4 
const MaleMatrix5 = 8

const TrolleyMatrix3 = 1.2
const TrolleyMatrix4 = 3.6
const TrolleyMatrix5 = 7

const PileOfGoldMatrix3 = 1
const PileOfGoldMatrix4 = 3 
const PileOfGoldMatrix5 = 6

const DynamiteCrateMatrix3 = 0.8
const DynamiteCrateMatrix4 = 1.2
const DynamiteCrateMatrix5 = 5

const GasLampMatrix3 = 0.6
const GasLampMatrix4 = 1
const GasLampMatrix5 = 3

const SnakeMatrix3 = 0.4
const SnakeMatrix4 = 0.6
const SnakeMatrix5 = 2

const BarrelsMatrix3 = 0.2
const BarrelsMatrix4 = 0.4
const BarrelsMatrix5 = 1.8

const BootsMatrix3 = 0.2
const BootsMatrix4 = 0.4
const BootsMatrix5 = 1.4

// create variable values for items
let Femalex3 = 0
let Femalex4 = 0
let Femalex5 = 0

let Malex3 = 0
let Malex4 = 0 
let Malex5 = 0

let Trolleyx3 = 0
let Trolleyx4 = 0
let Trolleyx5 = 0

let PileOfGoldx3 = 0
let PileOfGoldx4 = 0
let PileOfGoldx5 = 0

let DynamiteCratex3 = 0
let DynamiteCratex4 = 0
let DynamiteCratex5 = 0

let GasLampx3 = 0
let GasLampx4 = 0
let GasLampx5 = 0

let Snakex3 = 0
let Snakex4 = 0
let Snakex5 = 0

let Barrelsx3 = 0
let Barrelsx4 = 0
let Barrelsx5 = 0

let Bootsx3 = 0
let Bootsx4 = 0
let Bootsx5 = 0

let Wild = 0
let BagOfGold = 0
let Scatter = 0

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

let FemaleStyle = window.getComputedStyle(p[0])
let Female = FemaleStyle.backgroundImage;
let MaleStyle = window.getComputedStyle(p[1]);
let Male = MaleStyle.backgroundImage;
let TrolleyStyle = window.getComputedStyle(p[2]);
let Trolley = TrolleyStyle.backgroundImage;
let PileOfGoldStyle = window.getComputedStyle(p[3]);
let PileOfGold = PileOfGoldStyle.backgroundImage;
let DynamiteCrateStyle = window.getComputedStyle(p[4]);
let DynamiteCrate = DynamiteCrateStyle.backgroundImage;
let GasLampStyle = window.getComputedStyle(p[5]);
let GasLamp = GasLampStyle.backgroundImage;
let SnakeStyle = window.getComputedStyle(p[6]);
let Snake = SnakeStyle.backgroundImage;
let BarrelsStyle = window.getComputedStyle(p[7]);
let Barrels = BarrelsStyle.backgroundImage;
let BootsStyle = window.getComputedStyle(p[8]);
let Boots = BootsStyle.backgroundImage;

// create value array per item
let FemaleValue = [Femalex3, Femalex4, Femalex5]
let MaleValue = [Malex3, Malex4, Malex5]
let TrolleyValue = [Trolleyx3, Trolleyx4, Trolleyx5]
let PileOfGoldValue = [PileOfGoldx3, PileOfGoldx4, PileOfGoldx5]
let DynamiteCrateValue = [DynamiteCratex3, DynamiteCratex4, DynamiteCratex5]
let GasLampValue = [GasLampx3, GasLampx4, GasLampx5]
let SnakeValue = [Snakex3, Snakex4, Snakex5]
let BarrelsValue = [Barrelsx3, Barrelsx4, Barrelsx5]
let BootsValue = [Bootsx3, Bootsx4, Bootsx5]

// declarations for checkSymbol function
let valueX = 0
let columns = 0
let winValueStorage = 0
// let winValue = 0
let winValue = []

// coin values array + Paylines
const Values = ['0,01', '0,03', '0,05', '0,10', '0,20', '0,50']
const ValuesFloats = [0.01, 0.03, 0.05, 0.10, 0.20, 0.50]
const payLines = 25

let payline = []
payline

let i = 0

// BetSize formula
function betSize(){
  currentBetSize = currentLevel * ValuesFloats[i] * payLines
  currentBetSize = currentBetSize.toFixed(2)
  document.getElementById('bet-size').innerHTML = currentBetSize.toString().replace(/[.]/, ",")
  currentBetSizeNumber = parseFloat(currentBetSize);
  
  // updating item values
  Femalex3 = (currentBetSizeNumber * FemaleMatrix3).toFixed(2);
  Femalex4 = (currentBetSizeNumber * FemaleMatrix4).toFixed(2);
  Femalex5 = (currentBetSizeNumber * FemaleMatrix5).toFixed(2);

  Malex3 = (currentBetSizeNumber * MaleMatrix3).toFixed(2);
  Malex4 = (currentBetSizeNumber * MaleMatrix4).toFixed(2);
  Malex5 = (currentBetSizeNumber * MaleMatrix5).toFixed(2);

  Trolleyx3 = (currentBetSizeNumber * TrolleyMatrix3).toFixed(2);
  Trolleyx4 = (currentBetSizeNumber * TrolleyMatrix4).toFixed(2);
  Trolleyx5 = (currentBetSizeNumber * TrolleyMatrix5).toFixed(2);

  PileOfGoldx3 = (currentBetSizeNumber * PileOfGoldMatrix3).toFixed(2);
  PileOfGoldx4 = (currentBetSizeNumber * PileOfGoldMatrix4).toFixed(2);
  PileOfGoldx5 = (currentBetSizeNumber * PileOfGoldMatrix5).toFixed(2);

  DynamiteCratex3 = (currentBetSizeNumber * DynamiteCrateMatrix3).toFixed(2);
  DynamiteCratex4 = (currentBetSizeNumber * DynamiteCrateMatrix4).toFixed(2);
  DynamiteCratex5 = (currentBetSizeNumber * DynamiteCrateMatrix5).toFixed(2);

  GasLampx3 = (currentBetSizeNumber * GasLampMatrix3).toFixed(2);
  GasLampx4 = (currentBetSizeNumber * GasLampMatrix4).toFixed(2);
  GasLampx5 = (currentBetSizeNumber * GasLampMatrix5).toFixed(2);

  Snakex3 = (currentBetSizeNumber * SnakeMatrix3).toFixed(2);
  Snakex4 = (currentBetSizeNumber * SnakeMatrix4).toFixed(2);
  Snakex5 = (currentBetSizeNumber * SnakeMatrix5).toFixed(2);

  Barrelsx3 = (currentBetSizeNumber * BarrelsMatrix3).toFixed(2);
  Barrelsx4 = (currentBetSizeNumber * BarrelsMatrix4).toFixed(2);
  Barrelsx5 = (currentBetSizeNumber * BarrelsMatrix5).toFixed(2);

  Bootsx3 = (currentBetSizeNumber * BootsMatrix3).toFixed(2);
  Bootsx4 = (currentBetSizeNumber * BootsMatrix4).toFixed(2);
  Bootsx5 = (currentBetSizeNumber * BootsMatrix5).toFixed(2);

  // Update value array per item
  FemaleValue = [Femalex3, Femalex4, Femalex5]
  MaleValue = [Malex3, Malex4, Malex5]
  TrolleyValue = [Trolleyx3, Trolleyx4, Trolleyx5]
  PileOfGoldValue = [PileOfGoldx3, PileOfGoldx4, PileOfGoldx5]
  DynamiteCrateValue = [DynamiteCratex3, DynamiteCratex4, DynamiteCratex5]
  GasLampValue = [GasLampx3, GasLampx4, GasLampx5]
  SnakeValue = [Snakex3, Snakex4, Snakex5]
  BarrelsValue = [Barrelsx3, Barrelsx4, Barrelsx5]
  BootsValue = [Bootsx3, Bootsx4, Bootsx5]
}

// increment and decrement level on click
higherLevel.onclick = function() {
  if(currentLevel != 10){
    document.getElementById('level').innerHTML = ++currentLevel
    betSize()
  } else {
    return
  }
}

lowerLevel.onclick = function() {
  if(currentLevel != 1) {
    document.getElementById('level').innerHTML = --currentLevel
    betSize()
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
  }
}

// take away the bet value from the total amount of coins each time spin button is clicked
let newCurrentCoins = parseFloat(currentCoins)
function CoinsUpdate() {
betSize()
newCurrentCoins = newCurrentCoins - currentBetSize
currentCoins = newCurrentCoins.toFixed(2)
document.getElementById('total-coins').innerHTML = currentCoins.toString().replace(/[.]/, ",")
currentBetSizeNumber = parseFloat(currentBetSize.replace(/[,]/, "."));
}

// Creating a ghost array for each row
let BatchArray1 = [];
let BatchArray2 = [];
let BatchArray5 = [];
let BatchArray3 = [];
let BatchArray4 = [];

// create VisibleArray1
let VisibleArray1 = [document.getElementById('p1'),document.getElementById('p6'),document.getElementById('p11')];
let VisibleArray2 = [document.getElementById('p2'),document.getElementById('p7'),document.getElementById('p12')];
let VisibleArray3 = [document.getElementById('p3'),document.getElementById('p8'),document.getElementById('p13')];
let VisibleArray4 = [document.getElementById('p4'),document.getElementById('p9'),document.getElementById('p14')];
let VisibleArray5 = [document.getElementById('p5'),document.getElementById('p10'),document.getElementById('p15')];

// get style
let VisibleArray1Style = [window.getComputedStyle(p[0]),window.getComputedStyle(p[5]),window.getComputedStyle(p[10])];
let VisibleArray2Style = [window.getComputedStyle(p[1]),window.getComputedStyle(p[6]),window.getComputedStyle(p[11])];
let VisibleArray3Style = [window.getComputedStyle(p[2]),window.getComputedStyle(p[7]),window.getComputedStyle(p[12])];
let VisibleArray4Style = [window.getComputedStyle(p[3]),window.getComputedStyle(p[8]),window.getComputedStyle(p[13])];
let VisibleArray5Style = [window.getComputedStyle(p[4]),window.getComputedStyle(p[9]),window.getComputedStyle(p[14])];

// get URL's
let VisibleArray1Url = [VisibleArray1Style[0].backgroundImage, VisibleArray1Style[1].backgroundImage, VisibleArray1Style[2].backgroundImage]
let VisibleArray2Url = [VisibleArray2Style[0].backgroundImage, VisibleArray2Style[1].backgroundImage, VisibleArray2Style[2].backgroundImage]
let VisibleArray3Url = [VisibleArray3Style[0].backgroundImage, VisibleArray3Style[1].backgroundImage, VisibleArray3Style[2].backgroundImage]
let VisibleArray4Url = [VisibleArray4Style[0].backgroundImage, VisibleArray4Style[1].backgroundImage, VisibleArray4Style[2].backgroundImage]
let VisibleArray5Url = [VisibleArray5Style[0].backgroundImage, VisibleArray5Style[1].backgroundImage, VisibleArray5Style[2].backgroundImage]

// randomizer (This works while declaration is commented out?)
let randomNum = 0
let randomNum1 = 0
let randomNum2 = 0
let randomNum3 = 0
let randomNum4 = 0
let randomNum5 = 0

function randomArrNum() {
randomNum1 = symbols[Math.floor(Math.random() * symbols.length)];
randomNum2 = symbols[Math.floor(Math.random() * symbols.length)];
randomNum3 = symbols[Math.floor(Math.random() * symbols.length)];
randomNum4 = symbols[Math.floor(Math.random() * symbols.length)];
randomNum5 = symbols[Math.floor(Math.random() * symbols.length)];
}

// making a function to create random images in each position (New)
function symbolPlacement () {
  for (let i = 0; i < 3; i++) {
    randomArrNum()
    VisibleArray1[i].style.backgroundImage = randomNum1
    VisibleArray2[i].style.backgroundImage = randomNum2
    VisibleArray3[i].style.backgroundImage = randomNum3
    VisibleArray4[i].style.backgroundImage = randomNum4
    VisibleArray5[i].style.backgroundImage = randomNum5
  }
  for (let i = 0; i < 3; ++i) {
    randomArrNum()
    BatchArray1[i] = VisibleArray1[i]
    BatchArray2[i] = VisibleArray2[i]
    BatchArray3[i] = VisibleArray3[i]
    BatchArray4[i] = VisibleArray4[i]
    BatchArray5[i] = VisibleArray5[i]
  }
  for (let i = 3; i < 5; ++i) {
    randomArrNum()
    BatchArray1[i] = randomNum1
    BatchArray2[i] = randomNum2
    BatchArray3[i] = randomNum3
    BatchArray4[i] = randomNum4
    BatchArray5[i] = randomNum5
  }
}

// rotating images and switching invisible ones
let arrayNum = 1
function RotatingImages() {
  // Column 1
  VisibleArray1[2].style.backgroundImage = BatchArray1[arrayNum % 5]
  VisibleArray1[1].style.backgroundImage = BatchArray1[(arrayNum + 1) % 5]
  VisibleArray1[0].style.backgroundImage = BatchArray1[(arrayNum + 2) % 5]

  BatchArray1[arrayNum % 5] = symbols[Math.floor(Math.random() * symbols.length)]

  // Column 2
  VisibleArray2[2].style.backgroundImage = BatchArray2[arrayNum % 5]
  VisibleArray2[1].style.backgroundImage = BatchArray2[(arrayNum + 1) % 5]
  VisibleArray2[0].style.backgroundImage = BatchArray2[(arrayNum + 2) % 5]

  BatchArray2[arrayNum % 5] = symbols[Math.floor(Math.random() * symbols.length)]
  // Column 3
  VisibleArray3[2].style.backgroundImage = BatchArray3[arrayNum % 5]
  VisibleArray3[1].style.backgroundImage = BatchArray3[(arrayNum + 1) % 5]
  VisibleArray3[0].style.backgroundImage = BatchArray3[(arrayNum + 2) % 5]

  BatchArray3[arrayNum % 5] = symbols[Math.floor(Math.random() * symbols.length)]
  // Column 4
  VisibleArray4[2].style.backgroundImage = BatchArray4[arrayNum % 5]
  VisibleArray4[1].style.backgroundImage = BatchArray4[(arrayNum + 1) % 5]
  VisibleArray4[0].style.backgroundImage = BatchArray4[(arrayNum + 2) % 5]

  BatchArray4[arrayNum % 5] = symbols[Math.floor(Math.random() * symbols.length)]
  // Column 5
  VisibleArray5[2].style.backgroundImage = BatchArray5[arrayNum % 5]
  VisibleArray5[1].style.backgroundImage = BatchArray5[(arrayNum + 1) % 5]
  VisibleArray5[0].style.backgroundImage = BatchArray5[(arrayNum + 2) % 5]

  BatchArray5[arrayNum % 5] = symbols[Math.floor(Math.random() * symbols.length)]

  // get style
  VisibleArray1Style = [window.getComputedStyle(p[0]),window.getComputedStyle(p[5]),window.getComputedStyle(p[10])];
  VisibleArray2Style = [window.getComputedStyle(p[1]),window.getComputedStyle(p[6]),window.getComputedStyle(p[11])];
  VisibleArray3Style = [window.getComputedStyle(p[2]),window.getComputedStyle(p[7]),window.getComputedStyle(p[12])];
  VisibleArray4Style = [window.getComputedStyle(p[3]),window.getComputedStyle(p[8]),window.getComputedStyle(p[13])];
  VisibleArray5Style = [window.getComputedStyle(p[4]),window.getComputedStyle(p[9]),window.getComputedStyle(p[14])];

  // get URL's
  VisibleArray1Url = [VisibleArray1Style[0].backgroundImage, VisibleArray1Style[1].backgroundImage, VisibleArray1Style[2].backgroundImage]
  VisibleArray2Url = [VisibleArray2Style[0].backgroundImage, VisibleArray2Style[1].backgroundImage, VisibleArray2Style[2].backgroundImage]
  VisibleArray3Url = [VisibleArray3Style[0].backgroundImage, VisibleArray3Style[1].backgroundImage, VisibleArray3Style[2].backgroundImage]
  VisibleArray4Url = [VisibleArray4Style[0].backgroundImage, VisibleArray4Style[1].backgroundImage, VisibleArray4Style[2].backgroundImage]
  VisibleArray5Url = [VisibleArray5Style[0].backgroundImage, VisibleArray5Style[1].backgroundImage, VisibleArray5Style[2].backgroundImage]

  arrayNum += 1
}


// add class for slide-down animation on button click
function slideDown() {
  for(let a = 0; a < p.length; a++) {
  p[a].classList.add('slideDown');
  }
}

function resetSlideDown() {
  for(let a = 0; a < p.length; a++) {
    p[a].classList.remove('slideDown');
    }
}

// Check for win per Payline
// Check Payline 1 to 3
async function Payline1to3() {
  await RotatingImages();
  for(let i = 0; i < 3; i++) {
    if(
      VisibleArray1Url[i] === VisibleArray2Url[i] && 
      VisibleArray2Url[i] === VisibleArray3Url[i] &&
      VisibleArray3Url[i] === VisibleArray4Url[i] && 
      VisibleArray4Url[i] === VisibleArray5Url[i]){
        columns = i
        winValueStorage = i
        valueX = 2
        checkSymbol()
        // console.log(winValue[i])
    } else if (
      VisibleArray1Url[i] === VisibleArray2Url[i] && 
      VisibleArray2Url[i] === VisibleArray3Url[i] &&
      VisibleArray3Url[i] === VisibleArray4Url[i]){
        columns = i
        winValueStorage = i
        valueX = 1
        checkSymbol()
        // console.log(winValue[i])
    } else if (
      VisibleArray1Url[i] === VisibleArray2Url[i] && 
      VisibleArray2Url[i] === VisibleArray3Url[i]){
        columns = i
        winValueStorage = i
        valueX = 0
        checkSymbol()
        // console.log(winValue[i])
    } else {
      winValue[i] = 0
      // console.log(winValue[i])
    }
  }
}

// function to simplify (INCOMPLETE)
async function PayLines4to25(a, b, c, d, e, g) {
  await RotatingImages();
  if (
    VisibleArray1Url[a] === VisibleArray2Url[b] &&
    VisibleArray2Url[b] === VisibleArray3Url[c] &&
    VisibleArray3Url[c] === VisibleArray4Url[d] &&
    VisibleArray4Url[d] === VisibleArray5Url[e] ){
      columns = a
      winValueStorage = g
      valueX = 2
      checkSymbol()
  } else if (
    VisibleArray1Url[a] === VisibleArray2Url[b] &&
    VisibleArray2Url[b] === VisibleArray3Url[c] &&
    VisibleArray3Url[c] === VisibleArray4Url[d] ){
      columns = a
      winValueStorage = g
      valueX = 1
      checkSymbol()
  } else if (
    VisibleArray1Url[a] === VisibleArray2Url[b] &&
    VisibleArray2Url[b] === VisibleArray3Url[c] ){
      columns = a
      winValueStorage = g
      valueX = 0
      checkSymbol()
    } else {
    winValue[g] = 0
  }
}

function ExcecutePaylineCheck() {
  // Payline 4
    PayLines4to25(a = 0, b = 1, c = 2, d = 1, e = 0, g = 3);
  // Payline 5
    PayLines4to25(a = 2, b = 1, c = 0, d = 1, e = 2, g = 4);
  // Payline 6
    PayLines4to25(a = 1, b = 0, c = 0, d = 0, e = 1, g = 5);
  // Payline 7
    PayLines4to25(a = 1, b = 2, c = 2, d = 2, e = 1, g = 6);
  // Payline 8
    PayLines4to25(a = 0, b = 0, c = 1, d = 2, e = 2, g = 7);
  // Payline 9
    PayLines4to25(a = 2, b = 2, c = 1, d = 0, e = 0, g = 8);
  // Payline 10
    PayLines4to25(a = 1, b = 2, c = 1, d = 0, e = 1, g = 9);
  // Payline 11
    PayLines4to25(a = 1, b = 0, c = 1, d = 2, e = 1, g = 10);
  // Payline 12
    PayLines4to25(a = 0, b = 1, c = 1, d = 1, e = 0, g = 11);
  // Payline 13
    PayLines4to25(a = 2, b = 1, c = 1, d = 1, e = 2, g = 12);
  // Payline 14
    PayLines4to25(a = 0, b = 1, c = 0, d = 1, e = 0, g = 13);
  // Payline 15
    PayLines4to25(a = 2, b = 1, c = 2, d = 1, e = 2, g = 14);
  // Payline 16
    PayLines4to25(a = 1, b = 1, c = 0, d = 1, e = 1, g = 15);
  // Payline 17
    PayLines4to25(a = 1, b = 1, c = 2, d = 1, e = 1, g = 16);
  // Payline 18
    PayLines4to25(a = 0, b = 0, c = 2, d = 0, e = 0, g = 17);
  // Payline 19
    PayLines4to25(a = 2, b = 2, c = 0, d = 2, e = 2, g = 18);
  // Payline 20
    PayLines4to25(a = 0, b = 2, c = 2, d = 2, e = 0, g = 19);
  // Payline 21
    PayLines4to25(a = 2, b = 0, c = 0, d = 0, e = 2, g = 20);
  // Payline 22
    PayLines4to25(a = 1, b = 2, c = 0, d = 2, e = 1, g = 21);
  // Payline 23
    PayLines4to25(a = 1, b = 0, c = 2, d = 0, e = 1, g = 22);
  // Payline 24
    PayLines4to25(a = 0, b = 2, c = 0, d = 2, e = 0, g = 23);
  // Payline 25
    PayLines4to25(a = 2, b = 0, c = 2, d = 0, e = 2, g = 24);
  }

// function to check for which symbol is aligned
function checkSymbol() {
  switch(VisibleArray1Url[columns]) {
    case Female:
      winValue[winValueStorage] = FemaleValue[valueX];
      break;
    case Male:
      winValue[winValueStorage] = MaleValue[valueX];
      break;
    case Trolley:
      winValue[winValueStorage] = TrolleyValue[valueX];
      break;
    case PileOfGold:
      winValue[winValueStorage] = PileOfGoldValue[valueX];
      break;
    case DynamiteCrate:
      winValue[winValueStorage] = DynamiteCrateValue[valueX];
      break;
    case GasLamp:
      winValue[winValueStorage] = GasLampValue[valueX];
      break;
    case Snake:
      winValue[winValueStorage] = SnakeValue[valueX];
      break;
    case Barrels:
      winValue[winValueStorage] = BarrelsValue[valueX];
      break;
    case Boots:
      winValue[winValueStorage] = BootsValue[valueX];
      break;
  }
}




// on click spin button
spinButton.onclick = function() {
  for (let i = 0; i < 10; i++) {
    // setTimeout(function() {
      RotatingImages();
    // }, delay * i);
  }

  ExcecutePaylineCheck()
  Payline1to3();
  // ExcecutePaylineCheck()
  // Payline1to3();
  CoinsUpdate()
  TotalWin(winValue);  

}

// total win (Sum of an array)
let totalWin = 0

async function TotalWin(winValue) {
  await RotatingImages();
  // clear the value from last win.
  totalWin = 0;
for(let i = 0; i < winValue.length; i++) {
  // change all the array values to floats.
  winValue[i] = parseFloat(winValue[i]);
  // sum of all array items.
  totalWin += winValue[i]
}
document.getElementById('win-amount').innerHTML = "You win: " + totalWin.toFixed(2).toString().replace(/[.]/, ",")
console.log("Amount won: " + totalWin.toFixed(2))
}

// randomize pictures on loading of screen
window.onload = symbolPlacement();