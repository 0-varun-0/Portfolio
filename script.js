// Typing animation for subtitle
const subtitle = document.querySelector(".subtitle");
const text = "AI | Robotics | Systems Engineering";
let index = 0;

function type() {
  subtitle.textContent = text.slice(0, index);
  index++;
  if (index <= text.length) {
    setTimeout(type, 100);
  }
}
type();
