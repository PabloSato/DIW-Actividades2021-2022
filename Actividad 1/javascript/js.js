//FUNCIONES APLICADAS

//funciones botones
function btn_mas() {
  displNone("1");
  displBlock("0");
  displNone("2");
}
function btn_menos() {
  displBlock("1");
  displNone("0");
  displBlock("2");
}
function btn_move(id) {
  moveBtn(id);
  setTimeout(function () {
    hideBtn(id);
  }, 2000);
  setTimeout(function () {
    removeMoveBtn(id);
  }, 3000);
}

//funcion slide aside
function slideAsideUp(id) {
  let y = document.getElementsByTagName("section")[0];
  let z = window.matchMedia("(max-width: 768px)");
  if (z.matches) {
    fadeOutSect("infTrab");
    showLargo(id);
  } else {
    y.style.gridTemplateColumns = "0.2fr 4fr";
    slideLfUp("infPerso");
    showBtn("btn");
    fadeOutSect("infTrab");
    showLargo(id);
    slideHideInteres("slHid");
  }
}
function slideAsideDown(id) {
  let y = document.getElementsByTagName("section")[0];
  let z = window.matchMedia("(max-width: 768px)");
  if (z.matches) {
    fadeInSect("infTrab");
    hideLargos();
  } else {
    btn_move("btn");
    slideLfDown("infPerso");
    fadeInSect("infTrab");
    y.style.gridTemplateColumns = "2fr 4fr";
    hideLargos();
    slideShowInteres("slHid");
  }
}

//funcion slide derecha
function fadeInSect(id) {
  fadeIn(id);
  setTimeout(function () {
    displBlock(id);
  }, 1000);
}
function fadeOutSect(id) {
  fadeOut(id);
  setTimeout(function () {
    displNone(id);
  }, 1000);
}
//FUNCIONES MISCELANEA

//desaparecen los intereses
function slideHideInteres(x) {
  let z = document.getElementsByClassName(x);
  Array.prototype.forEach.call(z, function (el) {
    el.style.transitionProperty = "opacity";
    el.style.transitionDuration = "1s";
    el.style.opacity = "0";
  });
}
//aparecen los interses
function slideShowInteres(x) {
  let z = document.getElementsByClassName(x);
  Array.prototype.forEach.call(z, function (el) {
    el.style.transitionProperty = "opacity";
    el.style.transitionDuration = "1s";
    el.style.opacity = "1";
  });
}

//aparece el botn aside
function showBtn(id) {
  displBlock(id);
}
function hideBtn(id) {
  displNone(id);
}

//btn animado
function moveBtn(id) {
  let y = document.getElementById(id);
  y.classList.toggle("change", true);
}
function removeMoveBtn(id) {
  let y = document.getElementById(id);
  y.classList.toggle("change", false);
}

//aparece el largo
function showLargo(id) {
  fadeIn(id);
  setTimeout(function () {
    displBlock(id);
  }, 1000);
}
//desaparecen todos los largos
function hideLargos() {
  fadeOut("postPro");
  setTimeout(function () {
    displNone("postPro");
  }, 1000);
  fadeOut("formula1");
  setTimeout(function () {
    displNone("formula1");
  }, 1000);
  fadeOut("mediaset");
  setTimeout(function () {
    displNone("mediaset");
  }, 1000);
  fadeOut("cadena100");
  setTimeout(function () {
    displNone("cadena100");
  }, 1000);
  fadeOut("radio");
  setTimeout(function () {
    displNone("radio");
  }, 1000);
}

//FUNCIONES DISPLAY
function displNone(id) {
  let y = document.getElementById(id);
  y.style.display = "none";
}
function displBlock(id) {
  let y = document.getElementById(id);
  y.style.display = "block";
}
//FUNCIONES OPACITY
function fadeIn(id) {
  let y = document.getElementById(id);
  y.style.animationName = "fade-in";
  y.style.animationDuration = "3s";
}
function fadeOut(id) {
  let y = document.getElementById(id);
  y.style.animationName = "fade-out";
  y.style.animationDuration = "2.5s";
}

//FUNCIONES SLIDE
function slideLfUp(id) {
  let y = document.getElementById(id);
  y.style.transitionProperty = "width";
  y.style.transitionDuration = "1s";
  y.style.width = "0.5em";
}
function slideLfDown(id) {
  let y = document.getElementById(id);
  y.style.transitionProperty = "width";
  y.style.transitionDuration = "1s";
  y.style.width = "100%";
}

//FUNCIONES MEDIAQUERYS
function menuDisplay(id) {
  let z = window.matchMedia("(max-width: 768px)");
  let y = document.getElementById(id);
  if (z) {
    if (window.getComputedStyle(y).display === "none") {
      y.style.display = "grid";
    } else {
      y.style.display = "none";
    }
  }
}
