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
const delayMoveDown = 1000
const delayOthers = 1000

// rotating speed (in Miliseconds)
let RotatingSpeed = 5000
// Interval between columns (in Miliseconds)
let RotatingInterval = 100
// AnimationSpeed (For CSS)
let AnimationSpeed = RotatingSpeed / 1000
// AwaitSpeed (setting await function times)
let AwaitSpeed = RotatingSpeed + (RotatingInterval*5)

// create an array with each unique image
const symbols = [];

// lenght of 
let NumDivs = 20

// all column classes
const column1 = document.querySelectorAll('.column1');
const column2 = document.querySelectorAll('.column2');
const column3 = document.querySelectorAll('.column3');
const column4 = document.querySelectorAll('.column4');
const column5 = document.querySelectorAll('.column5');

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

// let Wild = 0
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
let WildStyle = window.getComputedStyle(p[9]);
let Wild = WildStyle.backgroundImage;

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
  console.log('betSize function executed')
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
randomNum1 = symbols[Math.floor(Math.random() * (symbols.length - 1))];
randomNum2 = symbols[Math.floor(Math.random() * symbols.length)];
randomNum3 = symbols[Math.floor(Math.random() * symbols.length)];
randomNum4 = symbols[Math.floor(Math.random() * symbols.length)];
randomNum5 = symbols[Math.floor(Math.random() * symbols.length)];
// console.log('randomArrNum function executed')
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
    // console.log('symbolPlacement function executed')
  }
}

// rotating images and switching invisible ones
let arrayNum = 1
async function RotatingImages() {
  await symbolPlacement();
  console.log('start code in RotatingImages')
  // Column 1
  VisibleArray1[2].style.backgroundImage = BatchArray1[arrayNum % 5]
  VisibleArray1[1].style.backgroundImage = BatchArray1[(arrayNum + 1) % 5]
  VisibleArray1[0].style.backgroundImage = BatchArray1[(arrayNum + 2) % 5]

  BatchArray1[arrayNum % 5] = symbols[Math.floor(Math.random() * symbols.length - 1)]

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

  addCloneBg();
  arrayNum += 1
  console.log('rotatingImages function finished')
}

// Check for win per Payline || uncluding wilds
// Check Payline 1 to 3
function Payline1to3() {
  // await RotatingImages();
  // await moveDown();
  for(let i = 0; i < 3; i++) {
    if(
      (VisibleArray1Url[i] === VisibleArray2Url[i] ||
        VisibleArray2Url[i] === Wild) &&
        (VisibleArray2Url[i] === VisibleArray3Url[i] ||
        VisibleArray3Url[i] === Wild) &&
        (VisibleArray3Url[i] === VisibleArray4Url[i] ||
        VisibleArray4Url[i] === Wild) &&
        (VisibleArray4Url[i] === VisibleArray5Url[i] ||
        VisibleArray5Url[i] === Wild)){
        columns = i
        winValueStorage = i
        valueX = 2
        drawline(i, i, i, i, i)
        checkSymbol()
        // console.log(winValue[i])
    } else if (
      (VisibleArray1Url[i] === VisibleArray2Url[i] ||
        VisibleArray2Url[i] === Wild) &&
        (VisibleArray2Url[i] === VisibleArray3Url[i] ||
        VisibleArray3Url[i] === Wild) &&
        (VisibleArray3Url[i] === VisibleArray4Url[i] ||
        VisibleArray4Url[i] === Wild)){
        columns = i
        winValueStorage = i
        valueX = 1
        drawline(i, i, i, i, i)
        checkSymbol()
        // console.log(winValue[i])
    } else if (
      (VisibleArray1Url[i] === VisibleArray2Url[i] ||
        VisibleArray2Url[i] === Wild) &&
        (VisibleArray2Url[i] === VisibleArray3Url[i] ||
        VisibleArray3Url[i] === Wild)){
        columns = i
        winValueStorage = i
        valueX = 0
        drawline(i, i, i, i, i)
        checkSymbol()
        // console.log(winValue[i])
    } else {
      winValue[i] = 0
      // console.log(winValue[i])
    }
  }
}

// Check is payline 4 to 25 is true function \\ simplified + Wilds added
function PayLines4to25(a, b, c, d, e, g, l1, l2, l3, l4, l5) {
  // await RotatingImages();
  // await moveDown();
  if (
    (VisibleArray1Url[a] === VisibleArray2Url[b] ||
    VisibleArray2Url[b] === Wild) &&
    (VisibleArray2Url[b] === VisibleArray3Url[c] ||
    VisibleArray3Url[c] === Wild) &&
    (VisibleArray3Url[c] === VisibleArray4Url[d] ||
    VisibleArray4Url[d] === Wild) &&
    (VisibleArray4Url[d] === VisibleArray5Url[e] ||
    VisibleArray5Url[e] === Wild) ){
      columns = a
      winValueStorage = g
      valueX = 2
      drawline(l1, l2, l3, l4, l5)
      checkSymbol()
  } else if (
    (VisibleArray1Url[a] === VisibleArray2Url[b] ||
    VisibleArray2Url[b] === Wild) &&
    (VisibleArray2Url[b] === VisibleArray3Url[c] ||
    VisibleArray3Url[c] === Wild) &&
    (VisibleArray3Url[c] === VisibleArray4Url[d] ||
    VisibleArray4Url[d] === Wild)){
      columns = a
      winValueStorage = g
      valueX = 1
      drawline(l1, l2, l3, l4, l5)
      checkSymbol()
  } else if (
    (VisibleArray1Url[a] === VisibleArray2Url[b] ||
    VisibleArray2Url[b] === Wild) &&
    (VisibleArray2Url[b] === VisibleArray3Url[c] ||
    VisibleArray3Url[c] === Wild)){
      columns = a
      winValueStorage = g
      valueX = 0
      drawline(l1, l2, l3, l4, l5)
      checkSymbol()
    } else {
    winValue[g] = 0
  }
}

function ExcecutePaylineCheck() {
  // Payline 1 to 3
    Payline1to3()
  // Payline 4
    PayLines4to25(0, 1, 2, 1, 0, 3, 0, 1, 2, 1, 0);
  // Payline 5
    PayLines4to25(2, 1, 0, 1, 2, 4, 2, 1, 0, 1, 2);
  // Payline 6
    PayLines4to25(1, 0, 0, 0, 1, 5, 1, 0, 0, 0, 1);
  // Payline 7
    PayLines4to25(1, 2, 2, 2, 1, 6, 1, 2, 2, 2, 1);
  // Payline 8
    PayLines4to25(0, 0, 1, 2, 2, 7, 0, 0, 1, 2, 2);
  // Payline 9
    PayLines4to25(2, 2, 1, 0, 0, 8, 2, 2, 1, 0, 0);
  // Payline 10
    PayLines4to25(1, 2, 1, 0, 1, 9, 1, 2, 1, 0, 1);
  // Payline 11
    PayLines4to25(1, 0, 1, 2, 1, 10, 1, 0, 1, 2, 1);
  // Payline 12
    PayLines4to25(0, 1, 1, 1, 0, 11, 0, 1, 1, 1, 0);
  // Payline 13
    PayLines4to25(2, 1, 1, 1, 2, 12, 2, 1, 1, 1, 2);
  // Payline 14
    PayLines4to25(0, 1, 0, 1, 0, 13, 0, 1, 0, 1, 0);
  // Payline 15
    PayLines4to25(2, 1, 2, 1, 2, 14, 2, 1, 2, 1, 2);
  // Payline 16
    PayLines4to25(1, 1, 0, 1, 1, 15, 1, 1, 0, 1, 1);
  // Payline 17
    PayLines4to25(1, 1, 2, 1, 1, 16, 1, 1, 2, 1, 1);
  // Payline 18
    PayLines4to25(0, 0, 2, 0, 0, 17, 0, 0, 2, 0, 0);
  // Payline 19
    PayLines4to25(2, 2, 0, 2, 2, 18, 2, 2, 0, 2, 2);
  // Payline 20
    PayLines4to25(0, 2, 2, 2, 0, 19, 0, 2, 2, 2, 0);
  // Payline 21
    PayLines4to25(2, 0, 0, 0, 2, 20, 2, 0, 0, 0, 2);
  // Payline 22
    PayLines4to25(1, 2, 0, 2, 1, 21, 1, 2, 0, 2, 1);
  // Payline 23
    PayLines4to25(1, 0, 2, 0, 1, 22, 1, 0, 2, 0, 1);
  // Payline 24
    PayLines4to25(0, 2, 0, 2, 0, 23, 0, 2, 0, 2, 0);
  // Payline 25
    PayLines4to25(2, 0, 2, 0, 2, 24, 2, 0, 2, 0, 2);
    console.log('ExecutePaylineCheck function executed')
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
  console.log('checkSymbol function executed')
}

// total win (Sum of an array)
let totalWin = 0

function TotalWin(winValue) {
  // await RotatingImages();
  // await moveDown();
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
console.log('TotalWin function executed')
}

let ctx = document.getElementById('canvas').getContext("2d");
let size = document.getElementById('reels1')

function SetCanvasSize() {
  ctx = document.getElementById('canvas').getContext("2d");
  size = document.getElementById('reels1')

  ctx.canvas.width = size.clientWidth;
  ctx.canvas.height = size.clientHeight;
  ctx.lineWidth = 10;

  ctx.lineJoin = "round"  // round, bevel, miter
  ctx.lineCap = "butt" // square, round, butt

  pToPxHor()
  pToPxVer()

  xdraw = [pToPxHor(0), pToPxHor(10), pToPxHor(30), pToPxHor(50), pToPxHor(70), pToPxHor(90), pToPxHor(100)]
  ydraw = [pToPxVer(16.66), pToPxVer(50), pToPxVer(83,3)]
  // console.log('SetCanvasSize function executed')


}

ctx.canvas.width = size.clientWidth;
ctx.canvas.height = size.clientHeight;
ctx.lineWidth = 10;
let positionX = 0
let positionY = 0
ctx.lineJoin = "round"  // round, bevel, miter
ctx.lineCap = "butt" // square, round, butt

function pToPxHor(positionX){
  return positionX * ctx.canvas.width / 100
}

function pToPxVer(positionY){
  return positionY * ctx.canvas.height / 100
}

let xdraw = [pToPxHor(0), pToPxHor(10), pToPxHor(30), pToPxHor(50), pToPxHor(70), pToPxHor(90), pToPxHor(100)]
let ydraw = [pToPxVer(16.66), pToPxVer(50), pToPxVer(83,3)]

function drawline(l1, l2, l3, l4, l5) {
  ctx.beginPath();
  ctx.strokeStyle="#FF0000";
  ctx.moveTo(xdraw[0], ydraw[l1]);
  ctx.lineTo(xdraw[1], ydraw[l1]);
  ctx.lineTo(xdraw[2], ydraw[l2]);
  ctx.lineTo(xdraw[3], ydraw[l3]);
  ctx.lineTo(xdraw[4], ydraw[l4]);
  ctx.lineTo(xdraw[5], ydraw[l5]);
  ctx.lineTo(xdraw[6], ydraw[l5]);

  ctx.stroke();
}



async function moveDown() {
  const column1 = document.querySelectorAll('.column1');
  const column2 = document.querySelectorAll('.column2');
  const column3 = document.querySelectorAll('.column3');
  const column4 = document.querySelectorAll('.column4');
  const column5 = document.querySelectorAll('.column5');

  column1.forEach(column => {
    column.style.transition = "all "+ AnimationSpeed +"s"
    column.style.transform = "translate(0, "+ (NumDivs-1)*100 + "%)"
  })
 
  setTimeout(() => {
    column2.forEach(column => {
      column.style.transition = "all "+ AnimationSpeed +"s"
      column.style.transform = "translate(0, "+ (NumDivs-1)*100 + "%)"
    })
  }, RotatingInterval)

  setTimeout(() => {
    column3.forEach(column => {
      column.style.transition = "all "+ AnimationSpeed +"s"
      column.style.transform = "translate(0, "+ (NumDivs-1)*100 + "%)"
    })
  }, RotatingInterval*2)

  setTimeout(() => {
    column4.forEach(column => {
      column.style.transition = "all "+ AnimationSpeed +"s"
      column.style.transform = "translate(0, "+ (NumDivs-1)*100 + "%)"
    })
  }, RotatingInterval*3)

  setTimeout(() => {
    column5.forEach(column => {
      column.style.transition = "all "+ AnimationSpeed +"s"
      column.style.transform = "translate(0, "+ (NumDivs-1)*100 + "%)"
    })
  }, RotatingInterval*4)

  console.log('moveDown function completed');

  const result = await Reset1();
}

function Reset1() {
  return new Promise(resolve => {
    setTimeout(() => {
      const column1 = document.querySelectorAll('.column1');
      const column2 = document.querySelectorAll('.column2');
      const column3 = document.querySelectorAll('.column3');
      const column4 = document.querySelectorAll('.column4');
      const column5 = document.querySelectorAll('.column5');
    
      column1.forEach(column => {
        column.style.transition = "none"
        column.style.transform = "translate(0, 0)"
      })
     
      column2.forEach(column => {
        column.style.transition = "none"
        column.style.transform = "translate(0, 0)"
      })
  
      column3.forEach(column => {
        column.style.transition = "none"
        column.style.transform = "translate(0, 0)"
      })
  
      column4.forEach(column => {
        column.style.transition = "none"
        column.style.transform = "translate(0, 0)"
      })
  
      column5.forEach(column => {
        column.style.transition = "none"
        column.style.transform = "translate(0, 0)"
      })
    
      console.log('Reset1 function completed');
      resolve('resolved')

    }, AwaitSpeed);
  })
}

let start = 0;

// click spin second
spinButton.onclick = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  moveDown()
  Reset1()
  CoinsUpdate()

  setTimeout (() => {
    RotatingImages();
    // ResetPosition();
    }, 1000)

  setTimeout (() => {
    ExcecutePaylineCheck()
    // Payline1to3();
    TotalWin(winValue);
    }, AwaitSpeed)
  }

// translate positions
let posV = "translate(0, 0)"
let pos1 = "translate(0, -100%)"
let pos2 = "translate(0, -200%)"
let pos3 = "translate(0, -300%)"
let pos4 = "translate(0, -400%)"
let pos5 = "translate(0, -500%)"
let pos6 = "translate(0, -600%)"
let pos7 = "translate(0, -700%)"
let pos8 = "translate(0, -800%)"
let pos9 = "translate(0, -900%)"
let pos10 = "translate(0, -1000%)"

// Getting Varea
const Varea = document.getElementById('Varea');

// creating 10 divs with for loop
function CreateDivs(){
  document.getElementById('reels1').style.transform  = "translate(0, -"+ (NumDivs-1)*100 + "%)";
  for(let i = NumDivs; i > 1; i--){
    const ReelPH = document.createElement('div');
    ReelPH.id = "reels"+i;
    ReelPH.className = "reels"+i;
    ReelPH.style.display = "grid";
    ReelPH.style.gridTemplateColumns = "7px auto 7px auto 7px auto 7px auto 7px auto 7px";
    ReelPH.style.alignSelf = "center";
    ReelPH.style.width = "100%";
    ReelPH.style.height = "100%";
    ReelPH.style.transform = "translate(0, -"+ (NumDivs-1)*100 + "%)";

    // creating filling divs (add to for loop)
    const F1 = document.createElement('div');
    const F2 = document.createElement('div');
    const F3 = document.createElement('div');
    const F4 = document.createElement('div');
    const F5 = document.createElement('div');
    const F6 = document.createElement('div');

    // setting filling class to filling divs
    F1.className = "filling"
    F2.className = "filling"
    F3.className = "filling"
    F4.className = "filling"
    F5.className = "filling"
    F6.className = "filling"

    // creating columns divs
    const C1 = document.createElement('div');
    const C2 = document.createElement('div');
    const C3 = document.createElement('div');
    const C4 = document.createElement('div');
    const C5 = document.createElement('div');

    // setting ID and Class for columns divs
    // C1.id = "R" + i + "column1";
    C1.id = "column1R"+i;
    C1.className = "column-container column1";
    C2.id = "column2R"+i;
    C2.className = "column-container column2";
    C3.id = "column3R"+i;
    C3.className = "column-container column3";
    C4.id = "column4R"+i;
    C4.className = "column-container column4";
    C5.id = "column5R"+i;
    C5.className = "column-container column5";

    // creating image contianers (3 per columns)
    const R2P1 = document.createElement("div");
    const R2P2 = document.createElement("div");
    const R2P3 = document.createElement("div");
    const R2P4 = document.createElement("div");
    const R2P5 = document.createElement("div");
    const R2P6 = document.createElement("div");
    const R2P7 = document.createElement("div");
    const R2P8 = document.createElement("div");
    const R2P9 = document.createElement("div");
    const R2P10 = document.createElement("div");
    const R2P11 = document.createElement("div");
    const R2P12 = document.createElement("div");
    const R2P13 = document.createElement("div");
    const R2P14 = document.createElement("div");
    const R2P15 = document.createElement("div");

    // setting Id's for image containers
    R2P1.id = "r"+i+"p1";
    R2P2.id = "r"+i+"p2";
    R2P3.id = "r"+i+"p3";
    R2P4.id = "r"+i+"p4";
    R2P5.id = "r"+i+"p5";
    R2P6.id = "r"+i+"p6";
    R2P7.id = "r"+i+"p7";
    R2P8.id = "r"+i+"p8";
    R2P9.id = "r"+i+"p9";
    R2P10.id = "r"+i+"p10";
    R2P11.id = "r"+i+"p11";
    R2P12.id = "r"+i+"p12";
    R2P13.id = "r"+i+"p13";
    R2P14.id = "r"+i+"p14";
    R2P15.id = "r"+i+"p15";

    Varea.insertBefore(ReelPH, reels1);
    ReelPH.appendChild(F1)
    ReelPH.appendChild(C1)
    ReelPH.appendChild(F2)
    ReelPH.appendChild(C2)
    ReelPH.appendChild(F3)
    ReelPH.appendChild(C3)
    ReelPH.appendChild(F4)
    ReelPH.appendChild(C4)
    ReelPH.appendChild(F5)
    ReelPH.appendChild(C5)
    ReelPH.appendChild(F6)
    C1.appendChild(R2P1)
    C1.appendChild(R2P6)
    C1.appendChild(R2P11)

    C2.appendChild(R2P2)
    C2.appendChild(R2P7)
    C2.appendChild(R2P12)

    C3.appendChild(R2P3)
    C3.appendChild(R2P8)
    C3.appendChild(R2P13)

    C4.appendChild(R2P4)
    C4.appendChild(R2P9)
    C4.appendChild(R2P14)

    C5.appendChild(R2P5)
    C5.appendChild(R2P10)
    C5.appendChild(R2P15)

    FillBg(i)
    // document.getElementById('reels1').style.transform = "translate(0, -"+ (NumDivs-1)*100 + "%)"
    setTimeout(addCloneBg, 11);
  }

  console.log('cloning done')
}

function FillBg(i){
  // setting last reel to VisibleArray images same.
  randomArrNum()
  document.getElementById('r'+i+"p1").style.backgroundImage = randomNum1
  document.getElementById('r'+i+"p2").style.backgroundImage = randomNum2
  document.getElementById('r'+i+"p3").style.backgroundImage = randomNum3
  document.getElementById('r'+i+"p4").style.backgroundImage = randomNum4
  document.getElementById('r'+i+"p5").style.backgroundImage = randomNum5
  randomArrNum()
  document.getElementById('r'+i+"p6").style.backgroundImage = randomNum1
  document.getElementById('r'+i+"p7").style.backgroundImage = randomNum2
  document.getElementById('r'+i+"p8").style.backgroundImage = randomNum3
  document.getElementById('r'+i+"p9").style.backgroundImage = randomNum4
  document.getElementById('r'+i+"p10").style.backgroundImage = randomNum5
  randomArrNum()
  document.getElementById('r'+i+"p11").style.backgroundImage = randomNum1
  document.getElementById('r'+i+"p12").style.backgroundImage = randomNum2
  document.getElementById('r'+i+"p13").style.backgroundImage = randomNum3
  document.getElementById('r'+i+"p14").style.backgroundImage = randomNum4
  document.getElementById('r'+i+"p15").style.backgroundImage = randomNum5
}

function addCloneBg(){
  // setting last reel to VisibleArray images same.
  document.getElementById('r'+NumDivs+"p1").style.backgroundImage = VisibleArray1Url[0];
  document.getElementById('r'+NumDivs+"p2").style.backgroundImage = VisibleArray2Url[0];
  document.getElementById('r'+NumDivs+"p3").style.backgroundImage = VisibleArray3Url[0];
  document.getElementById('r'+NumDivs+"p4").style.backgroundImage = VisibleArray4Url[0];
  document.getElementById('r'+NumDivs+"p5").style.backgroundImage = VisibleArray5Url[0];
  document.getElementById('r'+NumDivs+"p6").style.backgroundImage = VisibleArray1Url[1];
  document.getElementById('r'+NumDivs+"p7").style.backgroundImage = VisibleArray2Url[1];
  document.getElementById('r'+NumDivs+"p8").style.backgroundImage = VisibleArray3Url[1];
  document.getElementById('r'+NumDivs+"p9").style.backgroundImage = VisibleArray4Url[1];
  document.getElementById('r'+NumDivs+"p10").style.backgroundImage = VisibleArray5Url[1];
  document.getElementById('r'+NumDivs+"p11").style.backgroundImage = VisibleArray1Url[2];
  document.getElementById('r'+NumDivs+"p12").style.backgroundImage = VisibleArray2Url[2];
  document.getElementById('r'+NumDivs+"p13").style.backgroundImage = VisibleArray3Url[2];
  document.getElementById('r'+NumDivs+"p14").style.backgroundImage = VisibleArray4Url[2];
  document.getElementById('r'+NumDivs+"p15").style.backgroundImage = VisibleArray5Url[2];
}

// randomize pictures on loading of screen
window.onload = symbolPlacement();
window.onload = SetCanvasSize();
window.onload = CreateDivs();
onresize = SetCanvasSize;

addEventListener('resize', SetCanvasSize())

// console.log('Made by Andy Vande Voorde')
// console.log(`
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&#BGP5555555YJ?YP@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&BPYY5PB#&&@@@&G5J?JYG#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&GYJ5B&@@@@@@@&GYJ5B&@@@@@@@@@@@7?J@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@&P?YB@@@@@@@@@&P?YB@@@@@@@@@@@@@@&#~5P~#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@B?J#@@@@@@@@@@B?J#@@@@@@&&&@@@@@@@&.PG!7#^P@@@#J~:.!#@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@P75@@@@@@@@@@@P75@@@@@#?:  .G@@@@@@@@PJ5&&P@^P@^    ?@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@G!P@@@@@@@@@@@G!P@@@@@@?    ~@@@@@@@@@@@@&J!#@@:Y^!^?&@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@&!J@@@@@@@@@@@&!J@@@@@&&@~7~!#@@@!JY@@@@GJB@@&^P@?!@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@B^#@@@@@@@@@@@G^#@@@@@&^G~P#5J&@@77@^B&@@G   .P@.#G~@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@5 &@@@@@@@@@@@Y~@@@@@@@@.&GPP&@@@&.@G7Y:?@@&~.. Y5^B^@&#BB&@@@@@@@&@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@5 Y@@@@@@@@@@@Y~@@@@@@@@5~G?&@@@@@??@BJ?&@@@@@@&&&J^G.GBBGY.B@@@&! ^@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@G  @@@@@@@@@@@P^@@@@@@@@?!B!@@@@@@@^G@!?@@B@@@@@@@@^Y@JPYYPB&@@@&.  ~@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@&  :@@@@@@@@@@&.&@@@@@@@P:@~&@@.?@@@^G&.@@B  J@@@@@P.@P7#@@@@@@@@G: .#@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@7  :@@@@@@@@@@!Y@@@@@@@@^Y@:&@#  .&@J7&.@@#   7@@@Y:&&:&@@@@@@G7YB!J@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@&   .@@@@@@@@@&.@@@&#&&@@7!@J?@Y   !@@.&^Y@@5 .!@G^J@&J5BP7B@@@&~G^BB~@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@P    P@@@@@@@@5~@@Y.   ^Y#.#@!Y&~^ G@@#^B^Y@@@P?!?@@BYPP5P?G@@@@&?#B~&@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@7    .@@@@@@@@!J@@@@P~::^5Y.#@Y7#J@@@@@&!Y?!B#!?&&5JP#&@@@@@@#:JG7@5!@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@!     ^@@@@@@@YB@@@@@@@@#JY5PG#B77#@@@@@@P?YYJ&&?J&@@&.B@@@@@@G~5~@7?@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@7      ^@@@@@@@@@@@@@@@@P^JPBBG5?!7?5#@@@@@:Y@P~&@@@7  ^@@@@@@@Y7@#.&@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@P       .G@@@@@@@@@@@@@@@@@@@@@@@#!7PY?5&@?7@5~@@@@:   J@@@@@@#^#@^P@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@&         :G@@@@@@@@@@@@@@@@@@@@Y?YYG##P?7.@@.@@@@@~:.J@@@&#GJJ&#!P@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@!          .!G&@@@@@@@@@@@@@@@@JJPGBGGPY^:@G^@#GPY~7YPYJJJYG#GJ7J:  .~G@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@&              .^!?5GB&@@@@@@@@@@@@@@@@@^5@G.555PB@@GPGGGGGY~J?&@7:    :&@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@G                      .^?G&@@@@@@@@@&!J@@@.!5GBP?JP5G@@@@@#~~5@@@@&&&B#@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@Y                          .!P#&&#PJ?#@@@@G:@@@@@&J7^#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@Y                   .~5B#&&#BBGGB#@@@@@@@@B^B@@@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@G                !B@@@@@@&##&@@@@@@@@@@@@@@J7B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@&~      ~YGBGB&@@@@@@&.     #@@@&B#@@@@@@@@@GJJ5B&@@@@@@&#57&@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@G.  ?@@#G#@@B5?:~@@#    :B@@@B   .~5&@@@@@@@@B?^::...   ^#@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@P#@Y.  .@@    P@@~  ~#@@@#!        !@@@Y!7JB@@&##   ^B@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@&^    #@. ?@@G:  5@@&?.           J@@&~   &@?:@P7&@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@&5^!@5 B@J.    @@&               .?B@@P ^@G~&@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&!7@7      J@@.                  !@&?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#J~:    P@G              .:!5#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&#G#@@?!~~~!!7?YPB#&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// `)