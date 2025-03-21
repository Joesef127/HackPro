function animateCountUp(element, target, duration) {
  let start = 0;
  let stepTime = Math.abs(Math.floor(duration / target));
  
  let timer = setInterval(() => {
    start += 1;
    element.textContent = start;
    if (start >= target) {
      clearInterval(timer);
    }
  }, stepTime);
}

document.addEventListener("DOMContentLoaded", () => {
  animateCountUp(document.getElementById("years"), 12, 6000);
  animateCountUp(document.getElementById("clients"), 600, 6000);
  animateCountUp(document.getElementById("success"), 87, 6000);
});