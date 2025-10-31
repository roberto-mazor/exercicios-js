document.addEventListener('DOMContentLoaded', () => {
  const btnSalvar = document.getElementById('btnSalvarFilme');
  const listaFilmes = document.getElementById('listaFilmes');
  const filmes = [];

  btnSalvar.addEventListener('click', salvarFilme);

  function salvarFilme() {
    // Coleta os dados
    const nome = document.getElementById('nome').value;
    const url = document.getElementById('url').value;
    const ano = document.getElementById('ano').value;
    const genero = document.getElementById('genero').value;
    const duracao = document.getElementById('duracao').value;
    const sinopse = document.getElementById('sinopse').value;
    const trailer = document.getElementById('trailer').value;
    const rating = document.querySelector('input[name="rating"]:checked')?.value || 0;

    // Validação simples
    if (!nome || !url || !ano || !genero || !duracao || !sinopse || !trailer) {
      alert('Por favor, preencha todos os campos antes de salvar.');
      return;
    }

    if (rating == 0) {
      alert('Por favor, selecione uma nota de 1 a 5 estrelas.');
      return;
    }

    // Cria objeto do filme
    const filme = { nome, url, ano, genero, duracao, sinopse, trailer, rating };

    filmes.push(filme);
    criarCard(filme);

    // Limpa o formulário
    document.getElementById('formFilme').reset();
  }

  function criarCard(filme) {
    const estrelas = '★'.repeat(filme.rating) + '☆'.repeat(5 - filme.rating);

    const cardHTML = `
      <div class="card filme-card shadow-sm mb-3">
        <div class="card-body">
          <div class="row">
            <div class="col-md-4 text-center">
              <img src="${filme.url}" alt="${filme.nome}" class="img-fluid rounded">
            </div>
            <div class="col-md-8">
              <h5 class="card-title">${filme.nome} <small class="text-muted">(${filme.ano.split('-')[0]})</small></h5>
              <p><strong>Gênero:</strong> ${filme.genero}</p>
              <p><strong>Duração:</strong> ${filme.duracao}</p>
              <p><strong>Sinopse:</strong> ${filme.sinopse}</p>
              <p><strong>Classificação:</strong> <span class="text-warning">${estrelas}</span></p>
              <a href="${filme.trailer}" target="_blank" class="btn btn-sm btn-danger">Ver Trailer</a>
              <button class="btn btn-danger w-100 btn-remove-contact" data-index="${index}">
                Remover Contato
            </button>
            </div>
          </div>
        </div>
      </div>
    `;

    listaFilmes.insertAdjacentHTML('beforeend', cardHTML);
  }
});
