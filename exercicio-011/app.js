let ListadeNumeros = [];

function fnLimpar() {
    document.getElementById('formMedia').reset();
}

function fnSalvarNumero(event) {
    event.preventDefault();
    const numero = parseFloat(document.getElementById('number').value);
    ListadeNumeros.push(numero);
    document.getElementById('number').value = '';
    document.getElementById('number').focus();
}
function fnCalcularMedia(event) {
    event.preventDefault();
    const quantidadeNumeros = ListadeNumeros.length;
    let somaDosNumeros = 0, i = 0;
    while (i < quantidadeNumeros) {
        somaDosNumeros += ListadeNumeros[i];
        i++;
    }
    const media = somaDosNumeros / quantidadeNumeros;
    document.getElementById('resultado').innerHTML = `<h3>Resultado</h3><p>A média dos números digitados é: ${media}</p>`;
    ListadeNumeros = []; // Reseta a lista para uma nova série de entradas
}
document.getElementById('start').addEventListener('click', fnSalvarNumero);
document.getElementById('finish').addEventListener('click', fnCalcularMedia);
document.getElementById('formMedia').addEventListener('reset', fnLimpar);
