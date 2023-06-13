// concatenação é a junção ("soma") de textos em variáveis diferentes

let nome = "Saulo";
let sobrenome = "Ricardo";

let nomeCompleto = nome + " " + sobrenome;
// caso não tenha a adição do "espaço" a concatenação seria
// impressa com as duas variaveis coladas uma na outra, ex: SauloRicardo
console.log(nomeCompleto);


// exercicio: modificar o código abaixo, adicionando o texto
// " A soma de 10 e 2 é resultado"

let x = 10, y = 2;

let resultado = x + y;
console.log(`A soma de 10 e 2 é ${resultado}`); //12 

resultado = x - y;
console.log(`A subtração de 10 por 2 é ${resultado}`); //8

resultado = x * y;
console.log(`A multiplicação de 10 por 2 é ${resultado}`); //20

resultado = x / y;
console.log(`A divisão de 10 por 2 é ${resultado}`); //5
