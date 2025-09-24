// 06 Calcular as horas extras de um funcionário a partir das horas semanais trabalhadas. Considerar a carga horária do funcionário de 44 horas por semana.

// Iremos calcular em quantas horas o funcionário excedeu de sua carga horária semanal, as horas excedidas são as horas extras. Exemplo: O funcionário Pedro tem uma carga horária semanal de 44 horas, mas ele trabalhou 50 horas nesta semana, logo, Pedro fez 6 horas extras.

// Para deixar mais completo nosso sistema, vamos verificar também se o funcionário está “devendo” horas. Por exemplo, se Pedro tem uma carga horária de 44 horas mas essa semana trabalhou 40, ele está com 4 horas negativas.

// Conforme realiza uma nova consulta vai adicionando os funcionários em uma lista usando id="lista_funcionarios

function fnCalcularHorasExtras() {
    const nome = document.getElementById('nome').value.trim();
    const horasTrabalhadas = parseFloat(document.getElementById('horas_trabalhadas').value);
    const cargaHoraria = 44;

    const horasExtras = horasTrabalhadas > cargaHoraria ? horasTrabalhadas - cargaHoraria : 0;
    const horasDevidas = horasTrabalhadas < cargaHoraria ? cargaHoraria - horasTrabalhadas : 0;

    let resultado = `Funcionário: ${nome}\n`;
    resultado += `Horas Trabalhadas: ${horasTrabalhadas}\n`;
    resultado += `Carga Horária: ${cargaHoraria}\n`;

    if (horasExtras > 0) {
        resultado += `😁 Horas Extras: ${horasExtras}\n`;
    }

    if (horasDevidas > 0) {
        resultado += `😞 Horas Devidas: ${horasDevidas}\n`;
    }

    document.getElementById('resultado').innerText = resultado;
    const lista = document.getElementById('lista_funcionarios');
    const item = document.createElement('li');
    item.textContent = resultado.replace(/\n/g, ' | ');
    lista.appendChild(item);
    return false;

}
