/**
 * Calcula o valor final aplicando acréscimo ou desconto percentual.
 * @param {number} valorTotal - O valor inicial.
 * @param {number} porcentagem - A porcentagem a ser aplicada.
 * @param {string} operacao - A operação ('acrescimo' ou 'desconto').
 * @returns {number} O valor final calculado.
 */
function calcularOperacao(valorTotal, porcentagem, operacao) {
    const valorPercentual = valorTotal * (porcentagem / 100);

    if (operacao === 'acrescimo') {
        return valorTotal + valorPercentual;
    } else if (operacao === 'desconto') {
        return valorTotal - valorPercentual;
    } else {
        // Retorna NaN se a operação for inválida para indicar um erro.
        return NaN;
    }
}

document.getElementById('calcForm').addEventListener('submit', function (event) {
    // Previne o comportamento padrão de submissão do formulário, que recarregaria a página.
    event.preventDefault();

    // Pega os valores dos campos do formulário
    const valorTotal = parseFloat(document.getElementById('valorTotal').value);
    const porcentagem = parseFloat(document.getElementById('porcentagem').value);
    const operacao = document.getElementById('operacao').value;

    // Valida se os valores são números válidos
    if (isNaN(valorTotal) || isNaN(porcentagem)) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores numéricos válidos.';
        return;
    }

    // Calcula o resultado usando a função
    const resultadoFinal = calcularOperacao(valorTotal, porcentagem, operacao);

    // Exibe o resultado formatado como moeda brasileira
    document.getElementById('resultado').innerHTML = `O resultado é: <strong>${resultadoFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>`;
});
