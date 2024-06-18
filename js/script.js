const bos = document.getElementById("open");
const ochil = document.getElementById("ochil");
const b = document.querySelectorAll("b");
bos.addEventListener("click", chik);
var yopil = document.getElementById("yopil");
yopil.addEventListener("click", did);

function chik() {
    ochil.classList.add("ishla");
    bos.style.display = "none";
}
function did() {
    ochil.classList.remove("ishla");
    bos.style.display = "flex";
}

