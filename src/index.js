const keyboard = document.querySelector("#keyboard");
const rightPedal = document.querySelector("#right-pedal");

// pedal
let pedalPressed;
rightPedal.addEventListener("click", function (e) {
  if (pedalPressed) {
    rightPedal.style.transform = "";
    pedalPressed = false;
    return;
  }
  rightPedal.style.transform = "translateY(50%)";
  pedalPressed = true;
});

// keys
let pressedKey;
keyboard.addEventListener("mousedown", function (e) {
  const key = e.target;
  key.style.boxShadow = "inset 2px 0px 5px gray, inset -2px -3px 5px gray";
  if (!pedalPressed && pressedKey) pressedKey.pause();
  pressedKey = key.querySelector(".sound").cloneNode(true);
  pressedKey.play();
});

["mouseup", "mouseout"].forEach((event) => {
  keyboard.addEventListener(event, function (e) {
    e.target.style.boxShadow = "";
  });
});
