// Bubble sort

// for (let i = 0; i < numberBubble.length - 1; i++) {
//   for (let j = 0; j < numberBubble.length - i; j++) {
//     if (numberBubble[j] > numberBubble[j + 1]) {
//       [numberBubble[j], numberBubble[j + 1]] = [
//         numberBubble[j + 1],
//         numberBubble[j],
//       ];
//     }
//   }
// }

btn.addEventListener("click", () => {
  let num2 = document.querySelectorAll("#sortBubble > td");
  let j = 0;
  let k = 0;

  if (btn.value == "Reset") {
    window.location.reload();
  } else {
    btn.style.visibility = "hidden";
    function numberAppearBubble() {
      if (j < numberBubble.length - 1) {
        btn.style.visibility = "hidden";
        setTimeout(() => {
          if (k < numberBubble.length - j) {
            if (numberBubble[k] > numberBubble[k + 1]) {
              [numberBubble[k], numberBubble[k + 1]] = [
                numberBubble[k + 1],
                numberBubble[k],
              ];
              for (let i = 0; i < numberBubble.length; i++) {
                let num2 = document.querySelectorAll("#sortBubble > td");
                num2.forEach((e) => {
                  if (e.id == i) {
                    e.textContent = numberBubble[i];
                  } else {
                  }
                });
              }
              k++;
              numberAppearBubble();
            } else {
              k++;
              numberAppearBubble();
            }
          } else {
            j++;
            k = 0;
            numberAppearBubble();
          }
        }, 500);
      } else {
        setTimeout(() => {
          btn.style.visibility = "visible";
          btn.value = "Reset";
        }, 500);
      }
    }
    numberAppearBubble();
  }
});
