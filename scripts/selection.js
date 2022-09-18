// function selectionSort() {
//   for (let i = 0; i < numberSelection.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < numberSelection.length; j++) {
//       if (numberSelection[j] < numberSelection[minIndex]) {
//         minIndex = j;
//       }
//     }
//     [numberSelection[i], numberSelection[minIndex]] = [
//       numberSelection[minIndex],
//       numberSelection[i],
//     ];
//     console.log(numberSelection);
//   }
//   console.log(numberSelection);
// }

// selectionSort();

btn.addEventListener("click", () => {
  let num3 = document.querySelectorAll("#sortSelection > td");
  let l = 0;
  let m = 0;

  if (btn.value == "Reset") {
    window.location.reload();
  } else {
    console.log(num3, l, m);
  }
});
