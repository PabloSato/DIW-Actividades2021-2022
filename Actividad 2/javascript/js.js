function showUp(x) {
  let y = document.getElementById(x);
  y.style.zIndex = "999";
  switch (x) {
    case "postPro":
      hideJob("formula1");
      hideJob("mediaset");
      hideJob("cadena100");
      hideJob("radio");
      btn_show("btn1");
      break;
    case "formula1":
      hideJob("mediaset");
      hideJob("cadena100");
      hideJob("radio");
      btn_show("btn2");
      break;
    case "mediaset":
      hideJob("cadena100");
      hideJob("radio");
      btn_show("btn3");
      break;
    case "cadena100":
      hideJob("radio");
      btn_show("btn4");
      break;
    case "radio":
      y.style.zIndex = "5";
      break;
  }
}
function showDown(x) {
  let y = document.getElementById(x);
  switch (x) {
    case "postPro":
      y.style.zIndex = "1";
      showJob("formula1");
      showJob("mediaset");
      showJob("cadena100");
      showJob("radio");
      displNone("btn1");
      break;
    case "formula1":
      y.style.zIndex = "2";
      showJob("mediaset");
      showJob("cadena100");
      showJob("radio");
      displNone("btn2");
      break;
    case "mediaset":
      y.style.zIndex = "3";
      showJob("cadena100");
      showJob("radio");
      displNone("btn3");
      break;
    case "cadena100":
      y.style.zIndex = "4";
      showJob("radio");
      displNone("btn4");
      break;
    case "radio":
      y.style.zIndex = "5";
      break;
  }
}

function btn_show(x) {
  switch (x) {
    case "btn1":
      displBlock("btn1");
      displNone("btn2");
      displNone("btn3");
      displNone("btn4");
      break;
    case "btn2":
      displNone("btn1");
      displBlock("btn2");
      displNone("btn3");
      displNone("btn4");
      break;
    case "btn3":
      displNone("btn1");
      displNone("btn2");
      displBlock("btn3");
      displNone("btn4");
      break;
    case "btn4":
      displNone("btn1");
      displNone("btn2");
      displNone("btn3");
      displBlock("btn4");
      break;
  }
}

function hideJob(x) {
  let y = document.getElementById(x);
  y.style.display = "none";
}

function showJob(x) {
  let y = document.getElementById(x);
  y.style.display = "block";
}

function displBlock(id) {
  let y = document.getElementById(id);
  y.style.display = "block";
}

function displNone(id) {
  let y = document.getElementById(id);
  y.style.display = "none";
}

function pintBg(x) {
  let y = document.getElementById(x);
  let z = document.getElementById(x - 1);
  y.style.backgroundColor = "rgb(245, 216, 169)";
  z.style.backgroundColor = "rgb(245, 216, 169)";
}
function clearBg(x) {
  let y = document.getElementById(x);
  let z = document.getElementById(x - 1);
  y.style.backgroundColor = "#fff";
  z.style.backgroundColor = "#fff";
}
