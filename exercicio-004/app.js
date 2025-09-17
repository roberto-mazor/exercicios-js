// Validar se um candidato pode ou não iniciar o processo de CNH

// function fnValidarCandidato() {
//     let nome = ""; idade = 0; podeIniciar = "";}
//     nome = document.getElementById("nome").value;
//     idade = parseInt(document.getElementById("idade").value);
//     if (idade >= 18) {
//         podeIniciar = "Sim, pode iniciar o processo para CNH.";
//     } else {
//         podeIniciar = "Não, não pode iniciar o processo para CNH.";
//     }   
//     document.getElementById("resultado_cnh").innerText = podeIniciar;
//     return false;


    // Validar se um candidato pode ou não iniciar o processo de CNH
function fnValidarCandidato() {
    const nome = document.getElementById('nome').value.trim();
    const idade = parseInt(document.getElementById('idade').value, 10);

    let mensagem = '';

    if (!nome) {
        mensagem = 'Por favor, informe o nome.';
    } else if (isNaN(idade)) {
        mensagem = 'Por favor, informe uma idade válida.';
    } else if (idade >= 18) {
        mensagem = `${nome}, você pode iniciar o processo de CNH.`;
    } else {
        mensagem = `${nome}, você NÃO pode iniciar o processo de CNH.`;
    }

    document.getElementById('resultado_cnh').textContent = mensagem;
}