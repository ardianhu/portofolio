function showhide() {
  var x = document.getElementById("satu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
var utama = document.getElementById("main");

function main() {
    var satu = document.getElementById("section1");
    var dua = document.getElementById("section2");
    var tiga = document.getElementById("section3");
    var main = document.getElementById("main");
    if (main.style.display === "none") {
        main.style.display = "block";
        satu.style.display = "none";
        dua.style.display = "none";
        tiga.style.display = "none";
    }
}

function satu() {
    var satu = document.getElementById("section1");
    var dua = document.getElementById("section2");
    var tiga = document.getElementById("section3");
    if (satu.style.display === "none") {
        satu.style.display = "block";
        dua.style.display = "none";
        tiga.style.display = "none";
        utama.style.display = "none";
    }
}
function dua() {
    var dua = document.getElementById("section2");
    var satu = document.getElementById("section1");
    var tiga = document.getElementById("section3");
    if (dua.style.display === "none") {
        dua.style.display = "block";
        satu.style.display = "none";
        tiga.style.display = "none";
        utama.style.display = "none";
    }
}
function tiga() {
    var tiga = document.getElementById("section3");
    var dua = document.getElementById("section2");
    var satu = document.getElementById("section1");
    if (tiga.style.display === "none") {
        tiga.style.display = "block";
        dua.style.display = "none";
        satu.style.display = "none";
        utama.style.display = "none";
    }
}
