
function aviso() {
  window.alert("Posso te pedir umas coisas?");
}

function corfundo(cor) {
  document.getElementById("body").style.backgroundColor = cor
}

function atualizaRelogio() {
  document.getElementById("hora").innerHTML = new Date().toLocaleString()
}
setInterval(atualizaRelogio, 200);

