const spanTH = document.getElementById("spanTH");

spanTH.innerHTML = `@${new Date().getFullYear()} Dimas.Ngoding`;

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

document.body.onload = function () {
  let rtClock = new Date();
  let jam = rtClock.getHours();
  let menit = rtClock.getMinutes();
  let detik = rtClock.getSeconds();

  jam = ("0" + jam).slice(-2);
  menit = ("0" + menit).slice(-2);
  detik = ("0" + detik).slice(-2);

  document.getElementById("spanJAMbr").innerHTML =
    jam + "  :  " + menit + "  :  " + detik;
  let t = setTimeout(document.body.onload, 500);
};