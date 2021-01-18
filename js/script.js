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

window.onscroll = () => {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    document.getElementById("backToTop").style.display = "block";
  } else {
    document.getElementById("backToTop").style.display = "none";
  }
};

document.getElementById("backToTop").addEventListener("click", function () {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
});
