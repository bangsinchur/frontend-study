const myBtn = document.getElementById("myBtn");
const display = document.getElementById("display");

myBtn.addEventListener("click", function () {
  display.textContent = "버튼이 클릭되었습니다!";
});

const boxes = document.getElementsByClassName("box");

for (let box of boxes) {
  box.addEventListener("click", function () {
    this.style.bakgroundColor = "yellow";
  });
}


