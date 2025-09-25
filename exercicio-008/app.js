    const form = document.querySelector('form');
    const resultadoDiv = document.getElementById('resultado');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const valor1 = parseFloat(document.getElementById('valor1').value);
        const valor2 = parseFloat(document.getElementById('valor2').value);
        const operacao = document.getElementById('operacao').value;

        let resultado;

        switch (operacao) {
            case 'soma':
                resultado = valor1 + valor2;
                break;
            case 'subtracao':
                resultado = valor1 - valor2;
                break;
            case 'multiplicacao':
                resultado = valor1 * valor2;
                break;
            case 'divisao':
                resultado = valor1 / valor2;
                break;
            default:
                resultado = 'Operação inválida';
        }

        resultadoDiv.textContent = 'Resultado: ' + resultado;
    });