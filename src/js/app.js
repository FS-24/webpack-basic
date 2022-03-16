import { button, paragraph } from "./dom-loader";
let hidden = false;
toggle();
function toggle() {
  hidden = !hidden;
  updateButton();
  updateParagraph();
}

function updateButton() {
  if (hidden) {
    button.textContent = "Hide Paragraph";
  } else {
    button.textContent = "Show Paragraph";
  }
}

function updateParagraph() {
  if (hidden) {
    paragraph.style.display = "block";
  } else {
    paragraph.style.display = "none";
  }
}

button.addEventListener("click", toggle);
