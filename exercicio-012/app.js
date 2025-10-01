document.getElementById("start").addEventListener("click", () => {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa o resultado anterior
    contar();
});

function contar() {
    const resultado = document.getElementById("resultado");

    // Contagem progressiva de 0 a 10
    for (let i = 0; i <= 10; i++) {
        setTimeout(() => {
            resultado.innerHTML = `${i}`;
        }, i * 700);
    }

    // Contagem regressiva de 10 a 0 após 11 segundos
    setTimeout(() => {
        for (let i = 10; i >= 0; i--) {
            setTimeout(() => {
                resultado.innerHTML = `${i}`;
            }, (10 - i) * 700);
        }
    }, 7700);
}