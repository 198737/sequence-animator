document.addEventListener("DOMContentLoaded", () => {

  const shapes = document.querySelectorAll(".shape");

  window.play = function () {
    shapes.forEach(s => s.classList.remove("active"));

    const pattern = document.getElementById("pattern").value;
    let order = [];

    if (pattern === "linear") order = [0,1,2,3];
    if (pattern === "center") order = [1,2,0,3];
    if (pattern === "random") order = [0,1,2,3].sort(() => Math.random() - 0.5);
    if (pattern === "wave") order = [0,1,2,3,2,1];

    order.forEach((i, step) => {
      setTimeout(() => {
        shapes.forEach(s => s.classList.remove("active"));
        shapes[i].classList.add("active");
      }, step * 350);
    });
  };

});
