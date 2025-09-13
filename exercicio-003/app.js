// 03 Calcular a média de venda à partir dos valores vendidos em cada um dos meses do 1º Trim de 2018 de um vendedor
// usar formulario HTML para entrada dos dados e exibir o resultado na tela


function fnCalcularMedia() {
    let vendedor = ""; janeiro = 0; fevereiro = 0; marco = 0; media = 0;

    vendedor = document.getElementById("vendedor").value;
    janeiro = parseFloat(document.getElementById("janeiro").value);
    fevereiro = parseFloat(document.getElementById("fevereiro").value);
    marco = parseFloat(document.getElementById("marco").value);

    media = (janeiro + fevereiro + marco) / 3;

    document.getElementById("resultado_media").innerText = media.toFixed(2);
    return false;
}


