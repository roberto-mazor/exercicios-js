// ===============================
//  Dados iniciais (4 filmes exemplo)
// ===============================
const filmesExemplo = [
  {
    nome: "The Witcher",
    url: "https://image.tmdb.org/t/p/w500/ueu6FzGg1Y5TDehPEx0r3EXtL7F.jpg",
    ano: "2019-12-20",
    trailer: "https://www.youtube.com/watch?v=tjujvMkqWe4",
    genero: "Fantasia, Ação, Aventura",
    duracao: "60 min",
    sinopse:
      "Geralt de Rívia, um caçador de monstros, luta para encontrar seu lugar em um mundo onde as pessoas muitas vezes são mais perversas que as bestas.",
    rating: 4
  },
  {
    nome: "Breaking Bad",
    url: "https://image.tmdb.org/t/p/w500/eSzpy96DwBujGFj0xMbXBcGcfxX.jpg",
    ano: "2008-01-20",
    trailer: "https://www.youtube.com/watch?v=HhesaQXLuRY",
    genero: "Drama, Crime, Thriller",
    duracao: "47 min",
    sinopse:
      "Um professor de química descobre que tem câncer terminal e começa a fabricar metanfetamina com um ex-aluno para garantir o futuro da família.",
    rating: 5
  },
  {
    nome: "Stranger Things",
    url: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
    ano: "2016-07-15",
    trailer: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
    genero: "Ficção Científica, Terror, Mistério",
    duracao: "55 min",
    sinopse:
      "Quando um garoto desaparece, uma pequena cidade descobre um mistério envolvendo experimentos secretos e forças sobrenaturais.",
    rating: 5
  },
  {
    nome: "Peaky Blinders",
    url: "https://image.tmdb.org/t/p/w500/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg",
    ano: "2013-09-12",
    trailer: "https://www.youtube.com/watch?v=oVzVdvGIC7U",
    genero: "Drama, Crime, Histórico",
    duracao: "60 min",
    sinopse:
      "Uma notória gangue britânica do pós-guerra é liderada pelo ambicioso Tommy Shelby, que busca poder e respeito em Birmingham.",
    rating: 4
  }
];

// ===============================
//  Carregar filmes do localStorage
// ===============================
let filmes = JSON.parse(localStorage.getItem("filmes")) || [];

// Se não houver nada salvo, adiciona os exemplos
if (!localStorage.getItem("filmes") || filmes.length === 0) {
  filmes = filmesExemplo;
  localStorage.setItem("filmes", JSON.stringify(filmes));
}


// ===============================
//  Funções principais
// ===============================
function salvarFilme() {
  const nome = document.getElementById("nome").value.trim();
  const url = document.getElementById("url").value.trim();
  const ano = document.getElementById("ano").value.trim();
  const trailer = document.getElementById("trailer").value.trim();
  const genero = document.getElementById("genero").value.trim();
  const duracao = document.getElementById("duracao").value.trim();
  const sinopse = document.getElementById("sinopse").value.trim();
  const rating = document.querySelector('input[name="rating"]:checked')?.value;

  if (!nome || !url || !ano || !trailer || !genero || !duracao || !sinopse || !rating) {
    alert("Preencha todos os campos e selecione uma classificação!");
    return;
  }

  const novoFilme = { nome, url, ano, trailer, genero, duracao, sinopse, rating };

  filmes.push(novoFilme);
  localStorage.setItem("filmes", JSON.stringify(filmes));

  adicionarFilmeNaTela(novoFilme);
  limparFormulario();
}

function adicionarFilmeNaTela(filme) {
  const lista = document.getElementById("listaFilmes");

  const card = document.createElement("div");
  card.classList.add("card", "filme-card", "p-0");
  card.innerHTML = `
    <button class="remove-btn" onclick="removerFilme('${filme.nome}')">×</button>
    <img src="${filme.url}" class="card-img-top" alt="${filme.nome}">
    <div class="card-body">
      <h5 class="card-title">${filme.nome} <small class="text-muted">(${new Date(filme.ano).getFullYear()})</small></h5>
      <p><strong>Gênero:</strong> ${filme.genero}</p>
      <p><strong>Duração:</strong> ${filme.duracao}</p>
      <p><strong>Sinopse:</strong> ${filme.sinopse}</p>
      <p><strong>Classificação:</strong> ${"★".repeat(filme.rating)}${"☆".repeat(5 - filme.rating)}</p>
      <a href="${filme.trailer}" target="_blank" class="btn btn-danger btn-sm">Ver Trailer</a>
    </div>
  `;

  lista.appendChild(card);
}

function removerFilme(nome) {
  filmes = filmes.filter(f => f.nome !== nome);
  localStorage.setItem("filmes", JSON.stringify(filmes));
  renderizarFilmes();
}

function limparFormulario() {
  document.querySelector("form").reset();
}

function renderizarFilmes() {
  const lista = document.getElementById("listaFilmes");
  lista.innerHTML = "";
  filmes.forEach(adicionarFilmeNaTela);
}

window.onload = renderizarFilmes;
