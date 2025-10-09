const timesBrasileirao2025= [
  "Atlético-MG",
  "Bahia",
  "Botafogo",
  "Ceará",
  "Corinthians",
  "Cruzeiro",
  "Flamengo",
  "Fluminense",
  "Fortaleza",
  "Grêmio",
  "Internacional",
  "Juventude",
  "Mirassol",
  "Palmeiras",
  "Red Bull Bragantino",
  "Santos",
  "São Paulo",
  "Sport",
  "Vasco da Gama",
  "Vitória"
];

console.dir("Times do Brasileirão 2025:");
// Exemplo de como usar:
// console.log(timesBrasileirao2025.length); // 20
// console.log(timesBrasileirao2025[0]);     // "Atlético-MG"

const cidadesBrasileirao2025 = [
  "Belo Horizonte",         // Atlético-MG
  "Salvador",               // Bahia
  "Rio de Janeiro",         // Botafogo
  "Fortaleza",              // Ceará
  "São Paulo",              // Corinthians
  "Belo Horizonte",         // Cruzeiro
  "Rio de Janeiro",         // Flamengo
  "Rio de Janeiro",         // Fluminense
  "Fortaleza",              // Fortaleza
  "Porto Alegre",           // Grêmio
  "Porto Alegre",           // Internacional
  "Caxias do Sul",          // Juventude
  "Mirassol",               // Mirassol
  "São Paulo",              // Palmeiras
  "Bragança Paulista",      // Red Bull Bragantino
  "Santos",                 // Santos
  "São Paulo",              // São Paulo
  "Recife",                 // Sport
  "Rio de Janeiro",         // Vasco da Gama
  "Salvador"                // Vitória
];

console.dir("Cidades dos times do Brasileirão 2025:");

// O array está na mesma ordem do 'timesBrasileirao2025'.
// Você pode usar os dois arrays juntos, pois os índices correspondem.
// Exemplo: console.log(timesBrasileirao2025[0] + " é de " + cidadesBrasileirao2025[0]);

function fnlistaTimes() {
    document.getElementById("lista_times").innerHTML = `
    <div class="col-6 border text-center">${timesBrasileirao2025[0]}</div>
    `    
}

fnlistaTimes();

