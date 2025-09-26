// const form = document.getElementById('form');
// const resultadoDiv = document.getElementById('resultado');

// form.addEventListener('submit', function (event) {
//     event.preventDefault();

//     const mensagem = document.getElementById('mensagem').value;
//     const quantidade = parseInt(document.getElementById('quantidade').value);

//     let resultado = '';
//     document.getElementById('resultado').innerHTML = '';
//     for (let i = 0; i < quantidade; i++) {
//         resultado += mensagem + '<br>';
//     }

//     resultadoDiv.innerHTML = resultado;
    
//     console.log(resultado);
// });

function fnRepetirMensagem() {
    let quantidade = 0, mensagem = '', resultado = 0;

    mensagem = document.getElementById('mensagem').value;
    quantidade = parseInt(document.getElementById('quantidade').value);
    document.getElementById('resultado').innerHTML = '';

    while (resultado < quantidade) {
        document.getElementById('resultado').innerHTML += '<li>' + mensagem + '</li>';
        resultado++;
    }
    console.log(resultado);
}