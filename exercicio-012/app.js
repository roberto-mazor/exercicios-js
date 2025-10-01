document.getElementById("start").addEventListener("click", () => {
    const resultado = document.getElementById("resultado");
    const botao = document.getElementById("start");
    botao.disabled = true; // Desabilita o botão para evitar múltiplos cliques
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

    // Contagem regressiva de 10 a 0 após 7 segundos
    setTimeout(() => {
        for (let i = 10; i >= 0; i--) {
            setTimeout(() => {
                resultado.innerHTML = `${i}`;
                if (i === 0) {
                    document.getElementById("start").disabled = false; // Reabilita o botão ao final
                }
            }, (10 - i) * 700);
        }
    }, 7700);
}