const keyboard = document.querySelector("#keyboard");
const do1 = document.getElementById("do");

console.log(do1);

keyboard.addEventListener("mousedown", function (e) {
  const key = e.target;
  key.style.boxShadow = "inset 2px 0px 5px gray, inset -2px -2px 5px gray";
  key.querySelector(".sound").cloneNode(true).play();
});

["mouseup", "mouseout"].forEach((event) => {
  keyboard.addEventListener(event, function (e) {
    e.target.style.boxShadow = "";
  });
});
