// Génération de nombres dans le tableau

let numberRandom = () => {
  let number = Math.floor(Math.random() * 100);
  return number;
};

let numberOne = numberRandom();
let numberTwo = numberRandom();
let numberThree = numberRandom();
let numberFour = numberRandom();
let numberFive = numberRandom();
let numberSix = numberRandom();
let numberSeven = numberRandom();
let numberEight = numberRandom();
let numberNine = numberRandom();
let numberTen = numberRandom();

const numberArray = [
  numberOne,
  numberTwo,
  numberThree,
  numberFour,
  numberFive,
  numberSix,
  numberSeven,
  numberEight,
  numberNine,
  numberTen,
];

const numberBubble = [
  numberOne,
  numberTwo,
  numberThree,
  numberFour,
  numberFive,
  numberSix,
  numberSeven,
  numberEight,
  numberNine,
  numberTen,
];

for (let i = 0; i < numberArray.length; i++) {
  let num1 = document.querySelectorAll("#sortArray > td");
  let num2 = document.querySelectorAll("#sortBubble > td");
  num1.forEach((e) => {
    if (e.id == i) {
      e.textContent = numberArray[i];
    }
  });
  num2.forEach((e) => {
    if (e.id == i) {
      e.textContent = numberBubble[i];
    }
  });
}
