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

for (let i = 0; i < numberArray.length; i++) {
  let num = document.querySelectorAll("#tri > td");
  num.forEach((e) => {
    if (e.classList.value == i) {
      e.textContent = numberArray[i];
    }
  });
}

btn.addEventListener("click", () => {
  let num = document.querySelectorAll("#sort > td");
  let sortNum = document.querySelectorAll("#tri > td");
  let i = 0;

  if (btn.value == "Reset") {
    window.location.reload();
  } else {
    btn.style.visibility = "hidden";
    function numberAppear() {
      let active = false;
      if (i < 10) {
        setTimeout(() => {
          num.forEach((e) => {
            if (
              e.textContent == sortNum[i].textContent &&
              active === false &&
              e.style.visibility !== "hidden"
            ) {
              e.style.visibility = "hidden";
              active = true;
            }
          });
          sortNum[i].style.visibility = "visible";
          i++;
          numberAppear();
        }, 1000);
      } else {
        setTimeout(() => {
          btn.style.visibility = "visible";
          btn.value = "Reset";
        }, 1000);
      }
    }
    numberAppear();
  }
});
