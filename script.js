// Add interactivity here
document.querySelectorAll(".menu-item").forEach((button) => {
  button.addEventListener("click", () => {
    alert(`You clicked on ${button.textContent.trim()}!`);
  });
});
