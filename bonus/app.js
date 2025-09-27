function fnTocarSom(tecla) {
    if (tecla === "65") {
    document.getElementById("som-65").currentTime = 0;
    document.getElementById("som-65").play();
} else if (tecla === "83") {
    document.getElementById("som-83").currentTime = 0;
    document.getElementById("som-83").play();
} else if (tecla === "68") {
    document.getElementById("som-68").currentTime = 0;
    document.getElementById("som-68").play();
}   else if (tecla === "70") {
    document.getElementById("som-70").currentTime = 0;
    document.getElementById("som-70").play();
} else if (tecla === "71") {
    document.getElementById("som-71").currentTime = 0;
    document.getElementById("som-71").play();
} else if (tecla === "72") {
    document.getElementById("som-72").currentTime = 0;
    document.getElementById("som-72").play();
}   else if (tecla === "74") {
    document.getElementById("som-74").currentTime = 0;
    document.getElementById("som-74").play();
} else if (tecla === "75") {
    document.getElementById("som-75").currentTime = 0;
    document.getElementById("som-75").play();
} else if (tecla === "76") {
    document.getElementById("som-76").currentTime = 0;
    document.getElementById("som-76").play();
}
}

document.addEventListener("keydown", function(event) {
    fnTocarSom(event.keyCode.toString());
});
