const ham = () => {
  let a = document.getElementsByClassName("hamburger")[0];
  let clicked = document.getElementsByClassName("hamclicked")[0];
  if (clicked) {
    a.style.position = "absolute";
    a.style.transform = "translateX(-100%)";
    a.classList.remove("hamclicked");
  } else {
    a.style.position = "static";
    a.style.transform = "translateX(0%)";
    a.classList.add("hamclicked");
  }
};
