let val = 0;
let inputBox = document.querySelector(".input-box");
let content = document.querySelector(".content");

inputBox.addEventListener("input", (e) => {
  val = parseInt(e.target.value);
});

content.addEventListener("click", (e) => {
  let finalVal = document.querySelector(".final-count");
  let final = parseInt(finalVal.innerText);
  console.log(finalVal);

  if (e.target.classList.contains("incr")) {
    final += val;
    finalVal.innerText = final;
  } else if (e.target.classList.contains("decr")) {
    final -= val;
    finalVal.innerText = final;
  } else if (e.target.classList.contains("reset")) {
    finalVal.innerText = 0;
  }
});
