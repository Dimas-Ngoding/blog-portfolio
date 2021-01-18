const spanTH = document.getElementById("spanTH");

spanTH.innerHTML = `@${new Date().getFullYear()} Dimas.Ngoding`;

var typed = new Typed(".type-target", {
  // Typed JS
  strings: ["Frontend Dev", "Web Designer"],
  startDelay: 300,
  typeSpeed: 50,
  loop: true,
  backDelay: 1000,
  backSpeed: 50,
});
