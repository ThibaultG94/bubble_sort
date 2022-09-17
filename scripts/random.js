// Génération de nombres dans le tableau

let numberRandom = () => {
  let number = Math.floor(Math.random() * 100);
  return number;
};

const numberArray = [
  numberRandom(),
  numberRandom(),
  numberRandom(),
  numberRandom(),
  numberRandom(),
  numberRandom(),
  numberRandom(),
  numberRandom(),
  numberRandom(),
  numberRandom(),
];

const numberBubble = numberArray;

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
      e.textContent = numberArray[i];
    }
  });
}
