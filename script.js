
//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

document.addEventListener("DOMContentLoaded", (e) => {
  inputs[0].focus();
});

inputs.forEach((input, index) => {
  input.addEventListener("input", (event) => {
    /^\d+$/.test(event.target.value) &&
      index < inputs.length - 1 &&
      inputs[index + 1].focus();
  });

  input.addEventListener("keydown", (event) => {
    event.key === "Backspace" &&
      event.target.value == "" &&
      index > 0 &&
      inputs[index - 1].focus();
  });
});
