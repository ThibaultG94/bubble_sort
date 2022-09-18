// function quickSort(array) {
//   if (array.length === 1) {
//     return array;
//   }

//   const pivot = array[array.length - 1];
//   let arrLeft = [];
//   let arrRight = [];

//   for (let i = 0; i < array.length - 1; i++) {
//     array[i] < pivot ? arrLeft.push(array[i]) : arrRight.push(array[i]);
//   }

//   if (arrLeft.length > 0 && arrRight.length > 0) {
//     console.log(arrLeft, pivot, arrRight);
//     return [...quickSort(arrLeft), pivot, ...quickSort(arrRight)];
//   } else if (arrLeft.length > 0) {
//     console.log(arrLeft);
//     return [...quickSort(arrLeft), pivot];
//   } else {
//     console.log(arrRight);
//     return [pivot, ...quickSort(arrRight)];
//   }
// }
// console.log(quickSort(numberQuick));

btn.addEventListener("click", () => {
  let num4 = document.querySelectorAll("#sortQuick > td");
  let n = 0;

  if (btn.value == "Reset") {
    window.location.reload();
  } else {
    btn.style.transform = "translateY(500px)";
  }

  function quickSort(array) {
    setTimeout(() => {
      if (array.length === 1) {
        return array;
      }

      const pivot = array[array.length - 1];

      for (let i = 0; i < num4.length; i++) {
        if (num4[i].textContent == pivot) {
          num4[i].style.background = "#a9a9ff";
        }
      }

      let arrLeft = [];
      let arrRight = [];

      if (n < array.length - 1) {
        if (array[n] < pivot) {
          arrLeft.push(array[n]);
          console.log(arrLeft);
        } else {
          arrRight.push(array[n]);
          console.log(arrRight);
        }
      }
    }, 500);
  }
  quickSort(numberQuick);
});
