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

// symbols old
// symbols[0] = "url('images/icons/female cut.png')";
// symbols[1] = "url('images/icons/male cut.png')";
// symbols[2] = "url('images/icons/trolley.png')";
// symbols[3] = "url('images/icons/pile of gold.png')";
// symbols[4] = "url('images/icons/dynamite crate.png')";
// symbols[5] = "url('images/icons/gas lamp.png')";
// symbols[6] = "url('images/icons/snake.png')";
// symbols[7] = "url('images/icons/barrels.png')";
// symbols[8] = "url('images/icons/boots.png')";
// symbols[9] = "url('images/icons/wild.png')";
// symbols[10] = "url('images/icons/scatter2.png')";
// symbols[11] = "url('images/icons/scatter.png')";

// symbols new
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

// reference to item
// let Female = "url('images/icons/female cut.png')";
// let Male = "url('images/icons/male cut.png')";
// let Trolley = "url('images/icons/trolley.png')";
// let PileOfGold = "url('images/icons/pile of gold.png')";
// let DynamiteCrate = "url('images/icons/dynamite crate.png')";
// let GasLamp = "url('images/icons/gas lamp.png')";
// let Snake = "url('images/icons/snake.png')";
// let Barrels = "url('images/icons/barrels.png')";
// let Boots = "url('images/icons/boots.png')";

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

// let winValueFemale = 0
// let winValueMale = 0
// let winValueTrolley = 0
// let winValuePileOfGold = 0
// let winValueDynamiteCrate = 0
// let winValueGasLamp = 0
// let winValueSnake = 0
// let winValueBarrels = 0
// let winValueBoots = 0

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

// creating a VisibleArray for each row
// let VisibleArray1 = [p[0],p[5],p[10]];
// let VisibleArray2 = [p[1],p[6],p[11]];
// let VisibleArray3 = [p[2],p[7],p[12]];
// let VisibleArray4 = [p[3],p[8],p[13]];
// let VisibleArray5 = [p[4],p[9],p[14]];

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

// making a function to create random images in each position
// function symbolPlacement () {
//   for (let i = 0; i < p.length; i++) {
//     randomArrNum()
//     p[i].style.backgroundImage = randomNum
//   }
//   for (let i = 0, j = 0; j < 3; j++, i += 5) {
//   BatchArray1[j] = p[i];
//   BatchArray2[j] = p[i+1];
//   BatchArray3[j] = p[i+2];
//   BatchArray4[j] = p[i+3];
//   BatchArray5[j] = p[i+4];
//   console.log(VisibleArray1)
//   }
// }

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

// fixed images for control testing
// let arrayNum = 0
// function RotatingImages() {
//   // Column 1
//   // VisibleArray1[2].style.backgroundImage = "url('images/icons/female cut.png')"
//   VisibleArray1[2].style.backgroundImage = "url('images/icons/male cut.png')"
//   // VisibleArray1[1].style.backgroundImage = "url('images/icons/dynamite crate.png')"
//   VisibleArray1[1].style.backgroundImage = "url('images/icons/male cut.png')"
//   VisibleArray1[0].style.backgroundImage = "url('images/icons/male cut.png')"
//   // VisibleArray1[0].style.backgroundImage = "url('images/icons/trolley.png')"

//   // BatchArray1[arrayNum % 5] = symbols[Math.floor(Math.random() * symbols.length)]

//   // Column 2
//   // VisibleArray2[2].style.backgroundImage = "url('images/icons/barrels.png')"
//   VisibleArray2[2].style.backgroundImage = "url('images/icons/male cut.png')"
//   // VisibleArray2[1].style.backgroundImage = "url('images/icons/boots.png')"
//   VisibleArray2[1].style.backgroundImage = "url('images/icons/male cut.png')"
//   VisibleArray2[0].style.backgroundImage = "url('images/icons/male cut.png')"
//   // VisibleArray2[0].style.backgroundImage = "url('images/icons/trolley cut.png')"

//   // BatchArray2[arrayNum % 5] = symbols[Math.floor(Math.random() * symbols.length)]
//   // Column 3
//   // VisibleArray3[2].style.backgroundImage = "url('images/icons/gas lamp.png')"
//   VisibleArray3[2].style.backgroundImage = "url('images/icons/male cut.png')"
//   // VisibleArray3[1].style.backgroundImage = "url('images/icons/dynamite crate.png')"
//   VisibleArray3[1].style.backgroundImage = "url('images/icons/male cut.png')"
//   VisibleArray3[0].style.backgroundImage = "url('images/icons/male cut.png')"
//   // VisibleArray3[0].style.backgroundImage = "url('images/icons/female cut.png')"

//   // BatchArray3[arrayNum % 5] = symbols[Math.floor(Math.random() * symbols.length)]
//   // Column 4
//   VisibleArray4[2].style.backgroundImage = "url('images/icons/male cut.png')"
//   // VisibleArray4[2].style.backgroundImage = "url('images/icons/female cut.png')"
//   // VisibleArray4[1].style.backgroundImage = "url('images/icons/barrels.png')"
//   VisibleArray4[1].style.backgroundImage = "url('images/icons/male cut.png')"
//   VisibleArray4[0].style.backgroundImage = "url('images/icons/male cut.png')"
//   // VisibleArray4[0].style.backgroundImage = "url('images/icons/female cut.png')"

//   // BatchArray4[arrayNum % 5] = symbols[Math.floor(Math.random() * symbols.length)]
//   // Column 5
//   VisibleArray5[2].style.backgroundImage = "url('images/icons/male cut.png')"
//   // VisibleArray5[2].style.backgroundImage = "url('images/icons/female cut.png')"
//   // VisibleArray5[1].style.backgroundImage = "url('images/icons/snake.png')"
//   VisibleArray5[1].style.backgroundImage = "url('images/icons/male cut.png')"
//   VisibleArray5[0].style.backgroundImage = "url('images/icons/male cut.png')"
//   // VisibleArray5[0].style.backgroundImage = "url('images/icons/female cut.png')"

//   // BatchArray5[arrayNum % 5] = symbols[Math.floor(Math.random() * symbols.length)]

//   // get style
//   VisibleArray1Style = [window.getComputedStyle(p[0]),window.getComputedStyle(p[5]),window.getComputedStyle(p[10])];
//   VisibleArray2Style = [window.getComputedStyle(p[1]),window.getComputedStyle(p[6]),window.getComputedStyle(p[11])];
//   VisibleArray3Style = [window.getComputedStyle(p[2]),window.getComputedStyle(p[7]),window.getComputedStyle(p[12])];
//   VisibleArray4Style = [window.getComputedStyle(p[3]),window.getComputedStyle(p[8]),window.getComputedStyle(p[13])];
//   VisibleArray5Style = [window.getComputedStyle(p[4]),window.getComputedStyle(p[9]),window.getComputedStyle(p[14])];
  
//   // get URL's
//   VisibleArray1Url = [VisibleArray1Style[0].backgroundImage, VisibleArray1Style[1].backgroundImage, VisibleArray1Style[2].backgroundImage]
//   VisibleArray2Url = [VisibleArray2Style[0].backgroundImage, VisibleArray2Style[1].backgroundImage, VisibleArray2Style[2].backgroundImage]
//   VisibleArray3Url = [VisibleArray3Style[0].backgroundImage, VisibleArray3Style[1].backgroundImage, VisibleArray3Style[2].backgroundImage]
//   VisibleArray4Url = [VisibleArray4Style[0].backgroundImage, VisibleArray4Style[1].backgroundImage, VisibleArray4Style[2].backgroundImage]
//   VisibleArray5Url = [VisibleArray5Style[0].backgroundImage, VisibleArray5Style[1].backgroundImage, VisibleArray5Style[2].backgroundImage]

//   arrayNum += 1
// }

// Rotating images
// function RotatingImages() {
//   let i = 0;
//   for(i; i < 10; i++) {
//     VisibleArray1[
//       BatchArray1[i % 5],
//       BatchArray1[(i + 1) % 5],
//       BatchArray1[(i + 2) % 5]
//     ]
//     BatchArray1[i % 5] = randomArrNum()
//   };
// }


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

// Long version
// Check Payline 4
// function Payline4() {
//   if (
//     VisibleArray1Url[0] === VisibleArray2Url[1] &&
//     VisibleArray2Url[1] === VisibleArray3Url[2] &&
//     VisibleArray3Url[2] === VisibleArray4Url[1] &&
//     VisibleArray4Url[1] === VisibleArray5Url[0] ){
//       columns = 0
//       winValueStorage = 3
//       valueX = 2
//       checkSymbol()
//   } else if (
//     VisibleArray1Url[0] === VisibleArray2Url[1] &&
//     VisibleArray2Url[1] === VisibleArray3Url[2] &&
//     VisibleArray3Url[2] === VisibleArray4Url[1] ){
//       columns = 0
//       winValueStorage = 3
//       valueX = 1
//       checkSymbol()
//   } else if (
//     VisibleArray1Url[0] === VisibleArray2Url[1] &&
//     VisibleArray2Url[1] === VisibleArray3Url[2] ){
//       columns = 0
//       winValueStorage = 3
//       valueX = 0
//       checkSymbol()
//     } else {
//     winValue[3] = 0
//   }
// }

// function Payline5() {
//   if(
//     VisibleArray1Url[2] === VisibleArray2Url[1] &&
//     VisibleArray2Url[1] === VisibleArray3Url[0] &&
//     VisibleArray3Url[0] === VisibleArray4Url[1] &&
//     VisibleArray4Url[1] === VisibleArray5Url[2] ){
//       columns = 2
//       winValueStorage = 4
//       valueX = 2
//       checkSymbol()
//   } else if(
//     VisibleArray1Url[2] === VisibleArray2Url[1] &&
//     VisibleArray2Url[1] === VisibleArray3Url[0] &&
//     VisibleArray3Url[0] === VisibleArray4Url[1] ){
//       columns = 2
//       winValueStorage = 4
//       valueX = 1
//       checkSymbol()
//   } else if (
//     VisibleArray1Url[2] === VisibleArray2Url[1] &&
//     VisibleArray2Url[1] === VisibleArray3Url[0] ){
//       columns = 2
//       winValueStorage = 4
//       valueX = 0
//       checkSymbol()
//   } else {
//     winValue[4] = 0
//   }
// }

// function Payline6() {
//   if(
//     VisibleArray1Url[1] === VisibleArray2Url[0] &&
//     VisibleArray2Url[0] === VisibleArray3Url[0] &&
//     VisibleArray3Url[0] === VisibleArray4Url[0] &&
//     VisibleArray4Url[0] === VisibleArray5Url[1] ){
//       columns = 1
//       winValueStorage = 5
//       valueX = 2
//       checkSymbol()
//   } else if(
//     VisibleArray1Url[1] === VisibleArray2Url[0] &&
//     VisibleArray2Url[0] === VisibleArray3Url[0] &&
//     VisibleArray3Url[0] === VisibleArray4Url[0] ){
//       columns = 1
//       winValueStorage = 5
//       valueX = 1
//       checkSymbol()
//   } else if (
//     VisibleArray1Url[1] === VisibleArray2Url[0] &&
//     VisibleArray2Url[0] === VisibleArray3Url[0] ){
//       columns = 1
//       winValueStorage = 5
//       valueX = 0
//       checkSymbol()
//   } else {
//     winValue[5] = 0
//   }
// }

// function Payline7() {
//   if(
//     VisibleArray1Url[1] === VisibleArray2Url[2] &&
//     VisibleArray2Url[2] === VisibleArray3Url[2] &&
//     VisibleArray3Url[2] === VisibleArray4Url[2] &&
//     VisibleArray4Url[2] === VisibleArray5Url[1] ){
//       columns = 1
//       winValueStorage = 6
//       valueX = 2
//       checkSymbol()
//   } else if(
//     VisibleArray1Url[1] === VisibleArray2Url[2] &&
//     VisibleArray2Url[2] === VisibleArray3Url[2] &&
//     VisibleArray3Url[2] === VisibleArray4Url[2] ){
//       columns = 1
//       winValueStorage = 6
//       valueX = 1
//       checkSymbol()
//   } else if (
//     VisibleArray1Url[1] === VisibleArray2Url[2] &&
//     VisibleArray2Url[2] === VisibleArray3Url[2] ){
//       columns = 1
//       winValueStorage = 6
//       valueX = 0
//       checkSymbol()
//   } else {
//     winValue[6] = 0
//   }
// }

// function Payline8() {
//   if(
//     VisibleArray1Url[0] === VisibleArray2Url[0] &&
//     VisibleArray2Url[0] === VisibleArray3Url[1] &&
//     VisibleArray3Url[1] === VisibleArray4Url[2] &&
//     VisibleArray4Url[2] === VisibleArray5Url[2] ){
//       columns = 0
//       winValueStorage = 7
//       valueX = 2
//       checkSymbol()
//   } else if(
//     VisibleArray1Url[0] === VisibleArray2Url[0] &&
//     VisibleArray2Url[0] === VisibleArray3Url[1] &&
//     VisibleArray3Url[1] === VisibleArray4Url[2] ){
//       columns = 0
//       winValueStorage = 7
//       valueX = 1
//       checkSymbol()
//   } else if (
//     VisibleArray1Url[0] === VisibleArray2Url[0] &&
//     VisibleArray2Url[0] === VisibleArray3Url[1] ){
//       columns = 0
//       winValueStorage = 7
//       valueX = 0
//       checkSymbol()
//   } else {
//     winValue[7] = 0
//   }
// }

// function Payline9() {
//   if(
//     VisibleArray1Url[2] === VisibleArray2Url[2] &&
//     VisibleArray2Url[2] === VisibleArray3Url[1] &&
//     VisibleArray3Url[1] === VisibleArray4Url[0] &&
//     VisibleArray4Url[0] === VisibleArray5Url[0] ){
//       columns = 2
//       winValueStorage = 8
//       valueX = 2
//       checkSymbol()
//   } else if(
//     VisibleArray1Url[2] === VisibleArray2Url[2] &&
//     VisibleArray2Url[2] === VisibleArray3Url[1] &&
//     VisibleArray3Url[1] === VisibleArray4Url[0] ){
//       columns = 2
//       winValueStorage = 8
//       valueX = 1
//       checkSymbol()
//   } else if (
//     VisibleArray1Url[2] === VisibleArray2Url[2] &&
//     VisibleArray2Url[2] === VisibleArray3Url[1] ){
//       columns = 2
//       winValueStorage = 8
//       valueX = 0
//       checkSymbol()
//   } else {
//     winValue[8] = 0
//   }
// }

// function Payline10() {
//   if(
//     VisibleArray1Url[1] === VisibleArray2Url[2] &&
//     VisibleArray2Url[2] === VisibleArray3Url[1] &&
//     VisibleArray3Url[1] === VisibleArray4Url[0] &&
//     VisibleArray4Url[0] === VisibleArray5Url[1] ){
//       columns = 1
//       winValueStorage = 9
//       valueX = 2
//       checkSymbol()
//   } else if(
//     VisibleArray1Url[1] === VisibleArray2Url[2] &&
//     VisibleArray2Url[2] === VisibleArray3Url[1] &&
//     VisibleArray3Url[1] === VisibleArray4Url[0] ){
//       columns = 1
//       winValueStorage = 9
//       valueX = 1
//       checkSymbol()
//   } else if (
//     VisibleArray1Url[1] === VisibleArray2Url[2] &&
//     VisibleArray2Url[2] === VisibleArray3Url[1] ){
//       columns = 1
//       winValueStorage = 9
//       valueX = 0
//       checkSymbol()
//   } else {
//     winValue[9] = 0
//   }
// }

// function Payline11() {
//   if(
//     VisibleArray1Url[1] === VisibleArray2Url[0] &&
//     VisibleArray2Url[0] === VisibleArray3Url[1] &&
//     VisibleArray3Url[1] === VisibleArray4Url[2] &&
//     VisibleArray4Url[2] === VisibleArray5Url[1] ){
//       columns = 1
//       winValueStorage = 10
//       valueX = 2
//       checkSymbol()
//   } else if(
//     VisibleArray1Url[1] === VisibleArray2Url[0] &&
//     VisibleArray2Url[0] === VisibleArray3Url[1] &&
//     VisibleArray3Url[1] === VisibleArray4Url[2] ){
//       columns = 1
//       winValueStorage = 10
//       valueX = 1
//       checkSymbol()
//   } else if (
//     VisibleArray1Url[1] === VisibleArray2Url[0] &&
//     VisibleArray2Url[0] === VisibleArray3Url[1] ){
//       columns = 1
//       winValueStorage = 10
//       valueX = 0
//       checkSymbol()
//   } else {
//     winValue[10] = 0
//   }
// }

// function Payline12() {
//   if(
//     VisibleArray1Url[0] === VisibleArray2Url[1] &&
//     VisibleArray2Url[1] === VisibleArray3Url[1] &&
//     VisibleArray3Url[1] === VisibleArray4Url[1] &&
//     VisibleArray4Url[1] === VisibleArray5Url[0] ){
//       columns = 0
//       winValueStorage = 11
//       valueX = 2
//       checkSymbol()
//   } else if(
//     VisibleArray1Url[0] === VisibleArray2Url[1] &&
//     VisibleArray2Url[1] === VisibleArray3Url[1] &&
//     VisibleArray3Url[1] === VisibleArray4Url[1] ){
//       columns = 0
//       winValueStorage = 11
//       valueX = 1
//       checkSymbol()
//   } else if (
//     VisibleArray1Url[0] === VisibleArray2Url[1] &&
//     VisibleArray2Url[1] === VisibleArray3Url[1] ){
//       columns = 0
//       winValueStorage = 11
//       valueX = 0
//       checkSymbol()
//   } else {
//     winValue[11] = 0
//   }
// }

// function Payline13() {
//   if(
//     VisibleArray1Url[2] === VisibleArray2Url[1] &&
//     VisibleArray2Url[1] === VisibleArray3Url[1] &&
//     VisibleArray3Url[1] === VisibleArray4Url[1] &&
//     VisibleArray4Url[1] === VisibleArray5Url[2] ){
//       columns = 2
//       winValueStorage = 12
//       valueX = 2
//       checkSymbol()
//   } else if(
//     VisibleArray1Url[2] === VisibleArray2Url[2] &&
//     VisibleArray2Url[1] === VisibleArray3Url[1] &&
//     VisibleArray3Url[1] === VisibleArray4Url[1] ){
//       columns = 2
//       winValueStorage = 12
//       valueX = 1
//       checkSymbol()
//   } else if (
//     VisibleArray1Url[2] === VisibleArray2Url[2] &&
//     VisibleArray2Url[1] === VisibleArray3Url[1] ){
//       columns = 2
//       winValueStorage = 12
//       valueX = 0
//       checkSymbol()
//   } else {
//     winValue[12] = 0
//   }
// }

// function Payline14() {
//   if(
//     VisibleArray1Url[0] === VisibleArray2Url[1] &&
//     VisibleArray2Url[1] === VisibleArray3Url[0] &&
//     VisibleArray3Url[0] === VisibleArray4Url[1] &&
//     VisibleArray4Url[1] === VisibleArray5Url[0] ){
//       columns = 0
//       winValueStorage = 13
//       valueX = 2
//       checkSymbol()
//   } else if(
//     VisibleArray1Url[0] === VisibleArray2Url[1] &&
//     VisibleArray2Url[1] === VisibleArray3Url[0] &&
//     VisibleArray3Url[0] === VisibleArray4Url[1] ){
//       columns = 0
//       winValueStorage = 13
//       valueX = 1
//       checkSymbol()
//   } else if (
//     VisibleArray1Url[0] === VisibleArray2Url[1] &&
//     VisibleArray2Url[1] === VisibleArray3Url[0] ){
//       columns = 0
//       winValueStorage = 13
//       valueX = 0
//       checkSymbol()
//   } else {
//     winValue[13] = 0
//   }
// }

// function Payline15() {
//   if(
//     VisibleArray1Url[2] === VisibleArray2Url[1] &&
//     VisibleArray2Url[1] === VisibleArray3Url[2] &&
//     VisibleArray3Url[2] === VisibleArray4Url[1] &&
//     VisibleArray4Url[1] === VisibleArray5Url[2] ){
//       columns = 2
//       winValueStorage = 14
//       valueX = 2
//       checkSymbol()
//   } else if(
//     VisibleArray1Url[2] === VisibleArray2Url[1] &&
//     VisibleArray2Url[1] === VisibleArray3Url[2] &&
//     VisibleArray3Url[2] === VisibleArray4Url[1] ){
//       columns = 2
//       winValueStorage = 14
//       valueX = 1
//       checkSymbol()
//   } else if (
//     VisibleArray1Url[2] === VisibleArray2Url[1] &&
//     VisibleArray2Url[1] === VisibleArray3Url[2] ){
//       columns = 2
//       winValueStorage = 14
//       valueX = 0
//       checkSymbol()
//   } else {
//     winValue[14] = 0
//   }
// }

// function Payline16() {
//   if(
//     VisibleArray1Url[1] === VisibleArray2Url[1] &&
//     VisibleArray2Url[1] === VisibleArray3Url[0] &&
//     VisibleArray3Url[0] === VisibleArray4Url[1] &&
//     VisibleArray4Url[1] === VisibleArray5Url[1] ){
//       columns = 1
//       winValueStorage = 15
//       valueX = 2
//       checkSymbol()
//   } else if(
//     VisibleArray1Url[1] === VisibleArray2Url[1] &&
//     VisibleArray2Url[1] === VisibleArray3Url[0] &&
//     VisibleArray3Url[0] === VisibleArray4Url[1] ){
//       columns = 1
//       winValueStorage = 15
//       valueX = 1
//       checkSymbol()
//   } else if (
//     VisibleArray1Url[1] === VisibleArray2Url[1] &&
//     VisibleArray2Url[1] === VisibleArray3Url[0] ){
//       columns = 1
//       winValueStorage = 15
//       valueX = 0
//       checkSymbol()
//   } else {
//     winValue[15] = 0
//   }
// }

// function Payline17() {
//   if(
//     VisibleArray1Url[1] === VisibleArray2Url[1] &&
//     VisibleArray2Url[1] === VisibleArray3Url[2] &&
//     VisibleArray3Url[2] === VisibleArray4Url[1] &&
//     VisibleArray4Url[1] === VisibleArray5Url[1] ){
//       columns = 1
//       winValueStorage = 16
//       valueX = 2
//       checkSymbol()
//   } else if(
//     VisibleArray1Url[1] === VisibleArray2Url[1] &&
//     VisibleArray2Url[1] === VisibleArray3Url[2] &&
//     VisibleArray3Url[2] === VisibleArray4Url[1] ){
//       columns = 1
//       winValueStorage = 16
//       valueX = 1
//       checkSymbol()
//   } else if (
//     VisibleArray1Url[1] === VisibleArray2Url[1] &&
//     VisibleArray2Url[1] === VisibleArray3Url[2] ){
//       columns = 1
//       winValueStorage = 16
//       valueX = 0
//       checkSymbol()
//   } else {
//     winValue[16] = 0
//   }
// }

// function Payline18() {
//   if(
//     VisibleArray1Url[0] === VisibleArray2Url[0] &&
//     VisibleArray2Url[0] === VisibleArray3Url[2] &&
//     VisibleArray3Url[2] === VisibleArray4Url[0] &&
//     VisibleArray4Url[0] === VisibleArray5Url[0] ){
//       columns = 0
//       winValueStorage = 17
//       valueX = 2
//       checkSymbol()
//   } else if(
//     VisibleArray1Url[0] === VisibleArray2Url[0] &&
//     VisibleArray2Url[0] === VisibleArray3Url[2] &&
//     VisibleArray3Url[2] === VisibleArray4Url[0] ){
//       columns = 0
//       winValueStorage = 17
//       valueX = 1
//       checkSymbol()
//   } else if (
//     VisibleArray1Url[0] === VisibleArray2Url[0] &&
//     VisibleArray2Url[0] === VisibleArray3Url[2] ){
//       columns = 0
//       winValueStorage = 17
//       valueX = 0
//       checkSymbol()
//   } else {
//     winValue[17] = 0
//   }
// }

// function Payline19() {
//   if(
//     VisibleArray1Url[2] === VisibleArray2Url[2] &&
//     VisibleArray2Url[2] === VisibleArray3Url[0] &&
//     VisibleArray3Url[0] === VisibleArray4Url[2] &&
//     VisibleArray4Url[2] === VisibleArray5Url[2] ){
//       columns = 2
//       winValueStorage = 18
//       valueX = 2
//       checkSymbol()
//   } else if(
//     VisibleArray1Url[2] === VisibleArray2Url[2] &&
//     VisibleArray2Url[2] === VisibleArray3Url[0] &&
//     VisibleArray3Url[0] === VisibleArray4Url[2] ){
//       columns = 2
//       winValueStorage = 18
//       valueX = 1
//       checkSymbol()
//   } else if (
//     VisibleArray1Url[2] === VisibleArray2Url[2] &&
//     VisibleArray2Url[2] === VisibleArray3Url[0] ){
//       columns = 2
//       winValueStorage = 18
//       valueX = 0
//       checkSymbol()
//   } else {
//     winValue[18] = 0
//   }
// }

// function Payline20() {
//   if(
//     VisibleArray1Url[0] === VisibleArray2Url[2] &&
//     VisibleArray2Url[2] === VisibleArray3Url[2] &&
//     VisibleArray3Url[2] === VisibleArray4Url[2] &&
//     VisibleArray4Url[2] === VisibleArray5Url[0] ){
//       columns = 0
//       winValueStorage = 19
//       valueX = 2
//       checkSymbol()
//   } else if(
//     VisibleArray1Url[0] === VisibleArray2Url[2] &&
//     VisibleArray2Url[2] === VisibleArray3Url[2] &&
//     VisibleArray3Url[2] === VisibleArray4Url[2] ){
//       columns = 0
//       winValueStorage = 19
//       valueX = 1
//       checkSymbol()
//   } else if (
//     VisibleArray1Url[0] === VisibleArray2Url[2] &&
//     VisibleArray2Url[2] === VisibleArray3Url[2] ){
//       columns = 0
//       winValueStorage = 19
//       valueX = 0
//       checkSymbol()
//   } else {
//     winValue[19] = 0
//   }
// }

// function Payline21() {
//   if(
//     VisibleArray1Url[2] === VisibleArray2Url[0] &&
//     VisibleArray2Url[0] === VisibleArray3Url[0] &&
//     VisibleArray3Url[0] === VisibleArray4Url[0] &&
//     VisibleArray4Url[0] === VisibleArray5Url[2] ){
//       columns = 2
//       winValueStorage = 20
//       valueX = 2
//       checkSymbol()
//   } else if(
//     VisibleArray1Url[2] === VisibleArray2Url[0] &&
//     VisibleArray2Url[0] === VisibleArray3Url[0] &&
//     VisibleArray3Url[0] === VisibleArray4Url[0] ){
//       columns = 2
//       winValueStorage = 20
//       valueX = 1
//       checkSymbol()
//   } else if (
//     VisibleArray1Url[2] === VisibleArray2Url[0] &&
//     VisibleArray2Url[0] === VisibleArray3Url[0] ){
//       columns = 2
//       winValueStorage = 20
//       valueX = 0
//       checkSymbol()
//   } else {
//     winValue[20] = 0
//   }
// }

// function Payline22() {
//   if(
//     VisibleArray1Url[1] === VisibleArray2Url[2] &&
//     VisibleArray2Url[2] === VisibleArray3Url[0] &&
//     VisibleArray3Url[0] === VisibleArray4Url[2] &&
//     VisibleArray4Url[2] === VisibleArray5Url[1] ){
//       columns = 1
//       winValueStorage = 21
//       valueX = 2
//       checkSymbol()
//   } else if(
//     VisibleArray1Url[1] === VisibleArray2Url[2] &&
//     VisibleArray2Url[2] === VisibleArray3Url[0] &&
//     VisibleArray3Url[0] === VisibleArray4Url[2] ){
//       columns = 1
//       winValueStorage = 21
//       valueX = 1
//       checkSymbol()
//   } else if (
//     VisibleArray1Url[1] === VisibleArray2Url[2] &&
//     VisibleArray2Url[2] === VisibleArray3Url[0] ){
//       columns = 1
//       winValueStorage = 21
//       valueX = 0
//       checkSymbol()
//   } else {
//     winValue[21] = 0
//   }
// }

// function Payline23() {
//   if(
//     VisibleArray1Url[1] === VisibleArray2Url[0] &&
//     VisibleArray2Url[0] === VisibleArray3Url[2] &&
//     VisibleArray3Url[2] === VisibleArray4Url[0] &&
//     VisibleArray4Url[0] === VisibleArray5Url[1] ){
//       columns = 1
//       winValueStorage = 22
//       valueX = 2
//       checkSymbol()
//   } else if(
//     VisibleArray1Url[1] === VisibleArray2Url[0] &&
//     VisibleArray2Url[0] === VisibleArray3Url[2] &&
//     VisibleArray3Url[2] === VisibleArray4Url[0] ){
//       columns = 1
//       winValueStorage = 22
//       valueX = 1
//       checkSymbol()
//   } else if (
//     VisibleArray1Url[1] === VisibleArray2Url[0] &&
//     VisibleArray2Url[0] === VisibleArray3Url[2] ){
//       columns = 1
//       winValueStorage = 22
//       valueX = 0
//       checkSymbol()
//   } else {
//     winValue[22] = 0
//   }
// }

// function Payline24() {
//   if(
//     VisibleArray1Url[0] === VisibleArray2Url[2] &&
//     VisibleArray2Url[2] === VisibleArray3Url[0] &&
//     VisibleArray3Url[0] === VisibleArray4Url[2] &&
//     VisibleArray4Url[2] === VisibleArray5Url[0] ){
//       columns = 0
//       winValueStorage = 23
//       valueX = 2
//       checkSymbol()
//   } else if(
//     VisibleArray1Url[0] === VisibleArray2Url[2] &&
//     VisibleArray2Url[2] === VisibleArray3Url[0] &&
//     VisibleArray3Url[0] === VisibleArray4Url[2] ){
//       columns = 0
//       winValueStorage = 23
//       valueX = 1
//       checkSymbol()
//   } else if (
//     VisibleArray1Url[0] === VisibleArray2Url[2] &&
//     VisibleArray2Url[2] === VisibleArray3Url[0] ){
//       columns = 0
//       winValueStorage = 23
//       valueX = 0
//       checkSymbol()
//   } else {
//     winValue[23] = 0
//   }
// }

// function Payline25() {
//   if(
//     VisibleArray1Url[2] === VisibleArray2Url[0] &&
//     VisibleArray2Url[0] === VisibleArray3Url[2] &&
//     VisibleArray3Url[2] === VisibleArray4Url[0] &&
//     VisibleArray4Url[0] === VisibleArray5Url[2] ){
//       columns = 2
//       winValueStorage = 24
//       valueX = 2
//       checkSymbol()
//   } else if(
//     VisibleArray1Url[2] === VisibleArray2Url[0] &&
//     VisibleArray2Url[0] === VisibleArray3Url[2] &&
//     VisibleArray3Url[2] === VisibleArray4Url[0] ){
//       columns = 2
//       winValueStorage = 24
//       valueX = 1
//       checkSymbol()
//   } else if (
//     VisibleArray1Url[2] === VisibleArray2Url[0] &&
//     VisibleArray2Url[0] === VisibleArray3Url[2] ){
//       columns = 2
//       winValueStorage = 24
//       valueX = 0
//       checkSymbol()
//   } else {
//     winValue[24] = 0
//   }
// }






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

  // setTimeout(function() {

    // Payline4();
    // Payline5();
    // Payline6();
    // Payline7();
    // Payline8();
    // Payline9();
    // Payline10();
    // Payline11();
    // Payline12();
    // Payline13();
    // Payline14();
    // Payline15();
    // Payline16();
    // Payline17();
    // Payline18();
    // Payline19();
    // Payline20();
    // Payline21();
    // Payline22();
    // Payline23();
    // Payline24();
    // Payline25();

  
  // }, delay * i * 10);
  
  // slideDown()

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