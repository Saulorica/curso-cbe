// Calculadora IMC

// para calcular o IMC de alguem, 
// podemos utilizar a seguinte formula I = P/A² (*IMC *Peso *Altura)

const peso = 102;
const altura = 1.71;

const imc = peso / altura ** 2;

console.log(`Seu IMC é ${imc}`);
