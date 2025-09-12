// Esses são os operadores aritméticos mais comuns:

// + → adição
// - → subtração
// / → Divisão
// * → Multiplicação

// Além desses operadores temos mais alguns como:
// % → módulo (pega o resto da divisão e não o resultado)


// ** → exponenciação (um número elevado a outro)

let n1 = 10; n2 = 2;

console.log(n1 + n2); // + operação de adição
document.getElementById("resultado_soma").innerHTML = n1 + n2;

console.log(n1 - n2); // - operação de subtração
document.getElementById("resultado_subtracao").innerHTML = n1 - n2;

console.log(n1 * n2); // * operação de multiplicação
document.getElementById("resultado_multiplicacao").innerHTML = n1 * n2;

console.log(n1 / n2); // / operação de divisão
document.getElementById("resultado_divisao").innerHTML = n1 / n2;

console.log(n1 % n2); // % operação de módulo (resto da divisão)
document.getElementById("resultado_modulo").innerHTML = n1 % n2;

console.log(n1 ** n2); // ** operação de exponenciação (n1 elevado a n2)
document.getElementById("resultado_exponenciacao").innerHTML = n1 ** n2;
