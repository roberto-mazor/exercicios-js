// Função que oculta o formulário e exibe o resultado
function fnResultado() {
    document.getElementById("resultado").style.display = "block";
    document.getElementById("formMedia").style.display = "none";
}

// Função principal para calcular a média
function fnCalcularMedia() {
    let nome = document.getElementById("nome").value;
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let nota4 = parseFloat(document.getElementById("nota4").value);
    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h2>Resultado</h2>";
    resultadoDiv.innerHTML += "<p>👤 Nome: " + nome + "</p>";
    resultadoDiv.innerHTML += "<p>📝 Média: " + media.toFixed(2) + "</p>";

    fnResultado();

    // Pergunta se deseja calcular novamente
    if (confirm("Gostaria de calcular a média de outro aluno?")) {
        // Limpa os campos
        document.getElementById("nome").value = "";
        document.getElementById("nota1").value = "";
        document.getElementById("nota2").value = "";
        document.getElementById("nota3").value = "";
        document.getElementById("nota4").value = "";

        // Exibe o formulário novamente e oculta o resultado
        document.getElementById("formMedia").style.display = "block";
        resultadoDiv.innerHTML = "";
        resultadoDiv.style.display = "none";
    }
}
