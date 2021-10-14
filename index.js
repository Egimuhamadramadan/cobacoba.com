var jengkol    = document.querySelector("#laguA");
var peuteuy    = document.querySelector("#laguB");

var sentuhAye = document.querySelector("#sentuh");
var ColekGue  = document.querySelector("#colek");

sentuhAye.addEventListener("click",sora1);
function sora1() {
    jengkol.play();
}

ColekGue.addEventListener("click",sora2);
function sora2() {
    peuteuy.play();
}
