let pokemon1 = {
    id: 7,
    nome: 'Charmander',
    tipo: 'Fogo',
    nivel: 5
};

let pokemon2 = {
    id: 25,
    nome: 'Pikachu',
    tipo: 'Elétrico',
    nivel: 5
};

let pokemon3 = {
    id: 4,
    nome: 'Squirtle',
    tipo: 'Água',
    nivel: 5
};

// exemplificando o uso de Object.assign
let pokemon4 = Object.assign({}, pokemon1);
pokemon4.nome = 'Charmeleon';
pokemon4.nivel = 16;
console.log(pokemon1);
console.log(pokemon4);