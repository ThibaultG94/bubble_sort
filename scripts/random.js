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
