function fnResultado() {
    document.getElementById("resultado").style.display = "block";
    document.getElementById("formMedia").style.display = "none";
}

function fnNovoCalculo() {
    // Limpa os campos
    document.getElementById("nome").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("nota4").value = "";

    // Exibe o formulário e oculta o resultado
    document.getElementById("formMedia").style.display = "block";
    document.getElementById("resultado").style.display = "none";
}

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
    resultadoDiv.innerHTML += '<button id="btnNovoCalculo" onclick="fnNovoCalculo()" style="margin-top: 10px;">Novo Cálculo</button>';

    fnResultado();
}

