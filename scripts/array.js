function bubble() {
  numberArray.sort((a, b) => a - b);
}
bubble();

for (let i = 0; i < numberArray.length; i++) {
  let num = document.querySelectorAll("#tri > td");
  num.forEach((e) => {
    if (e.classList.value == i) {
      e.textContent = numberArray[i];
    }
  });
}

btn.addEventListener("click", () => {
  let num = document.querySelectorAll("#sortArray > td");
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
