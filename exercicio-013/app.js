let numeroDeVagas = []
let veiculos = []

function fnSalvarVeiculo() {
    numeroDeVagas.push(document.getElementById("numero_vaga").value)
    veiculos.push(document.getElementById("veiculos").value)

}


function fnListarVeiculos() {
    console.dir(numeroDeVagas)
    console.dir(veiculos)
    let tabela = document.getElementById("tabela_veiculos")
    tabela.innerHTML = ""
    for (let i = 0; i < numeroDeVagas.length; i++) {
        tabela.innerHTML += `<tr><td>${numeroDeVagas[i]}</td><td>${veiculos[i]}</td></tr>`   
    }
}

function fnLimpar() {
    document.getElementById("formMedia").reset()
    numeroDeVagas = []
    veiculos = []
    fnListarVeiculos()
 }
