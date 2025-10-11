const colorVars = [
  '--cinza-escuro',
  '--grafite',
  '--cinza-fosco',
  '--preto-intenso',
  '--bege-escuro',
  '--azul-profundo',
  '--verde-musgo',
  '--laranja-queimado',
  '--amarelo-escuro',
  '--roxo-escuro',
  '--rosa-antigo',
  '--azul-fumê',
  '--verde-musgo-claro',
  '--lilas-escuro',
  '--pessego-escuro',
  '--terracota-escura',
  '--verde-oliva-escuro',
  '--marrom-profundo',
  '--azul-petroleo-escuro',
  '--verde-floresta-escuro'
];


const randomColorVar = () => colorVars[Math.floor(Math.random() * colorVars.length)];

const corCards = document.querySelectorAll('.corCard');

corCards.forEach(card => {
  const rootStyles = getComputedStyle(document.documentElement);
  const colorVar = randomColorVar();
  const bgColor = rootStyles.getPropertyValue(colorVar);
  card.style.backgroundColor = bgColor;
});
