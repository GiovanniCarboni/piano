import * as note from "./sounds.js";

const keyboard = document.querySelector("#keyboard");
const rightPedal = document.querySelector("#right-pedal");

let pedalPressed;
rightPedal.addEventListener("click", function (e) {
  if (pedalPressed) {
    Howler.stop();
    rightPedal.style.transform = "";
    pedalPressed = false;
    return;
  }
  rightPedal.style.transform = "translateY(50%)";
  pedalPressed = true;
});

keyboard.addEventListener("mousedown", function (e) {
  const key = e.target;
  if (!pedalPressed) {
    Howler.stop(), 100;
  }
  key.style.boxShadow = "none";
  note[key.id].play();
});

["mouseup", "mouseout"].forEach((event) => {
  keyboard.addEventListener(event, function (e) {
    e.target.style.boxShadow = "inset 0px -5px rgb(112, 112, 109)";
  });
});
