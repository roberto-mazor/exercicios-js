//Nossa missão é verificar qual dia é hoje(da semana) e escrever por extenso. Exemplo: Hoje é segunda-feira.

// Primeiro vamos criar variáveis para para armazenar a o objeto date, o dia da semana em número e o dia da semana por extenso.

const data = new Date();
const diaSemana = data.getDay();

function diaDaSemana(dia) {
    switch (dia) {
        case 0:
            document.getElementById("resposta").innerText = "Domingo";
            break;
        case 1:
            document.getElementById("resposta").innerText = "Segunda-feira";
            break;
        case 2:
            document.getElementById("resposta").innerText = "Terça-feira";
            break;
        case 3:
            document.getElementById("resposta").innerText = "Quarta-feira";
            break;
        case 4:
            document.getElementById("resposta").innerText = "Quinta-feira";
            break;
        case 5:
            document.getElementById("resposta").innerText = "Sexta-feira";
            break;
        case 6:
            document.getElementById("resposta").innerText = "Sábado";
            break;
        case 7:
            document.getElementById("resposta").innerText = "Domingo";
            break;
        default:
            document.getElementById("resposta").innerText = "Dia inválido";
    }
}
