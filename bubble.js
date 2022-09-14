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

for (let i = 0; i < numberArray.length; i++) {
  let num = document.querySelectorAll("#sort > td");
  num.forEach((e) => {
    if (e.id == i) {
      e.textContent = numberArray[i];
    }
  });
}

console.log(numberArray);

// Bubble sort

for (let i = 0; i < numberArray.length - 1; i++) {
  for (let j = 0; j < numberArray.length - i; j++) {
    if (numberArray[j] > numberArray[j + 1]) {
      [numberArray[j], numberArray[j + 1]] = [
        numberArray[j + 1],
        numberArray[j],
      ];
    }
  }
}
console.log(numberArray);

for (let i = 0; i < numberArray.length; i++) {
  let num = document.querySelectorAll("#tri > td");
  num.forEach((e) => {
    if (e.classList.value == i) {
      e.textContent = numberArray[i];
    }
  });
}
