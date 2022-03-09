window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
function productFirst() {
  var a = document.getElementById("myfirstprod");
  var x = document.getElementById("mysecondprod");
  var y = document.getElementById("mythirdprod");
  var all = document.getElementById("allpro");
  if (a.style.display == "none") {
    a.style.display = "block";
    y.style.display = "none";
    x.style.display = "none";
    all.style.display = "none";
  }
}
function productSecond() {
  var a = document.getElementById("myfirstprod");
  var x = document.getElementById("mysecondprod");
  var y = document.getElementById("mythirdprod");
  var all = document.getElementById("allpro");
  if (x.style.display == "none") {
    x.style.display = "block";
    a.style.display = "none";
    y.style.display = "none";
    all.style.display = "none";
  }
}
function productThird() {
  var a = document.getElementById("myfirstprod");
  var x = document.getElementById("mysecondprod");
  var y = document.getElementById("mythirdprod");
  var all = document.getElementById("allpro");
  if (y.style.display == "none") {
    y.style.display = "block";
    a.style.display = "none";
    x.style.display = "none";
    all.style.display = "none";
  }
}
var header = document.getElementById("myBtnp");
var btns = header.getElementsByClassName("btnp");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("actives");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" actives", "");
    }
    this.className += " actives";
  });
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.9)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}
