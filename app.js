document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".gradient-text");

  elements.forEach((element) => {
    const text = element.innerText;
    element.innerHTML = "";

    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span");
      span.className = "gradient-letter";
      span.innerText = text[i];
      element.appendChild(span);
    }
  });
});
