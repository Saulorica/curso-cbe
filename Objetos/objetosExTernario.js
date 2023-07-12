const pessoa = {
    nome: "Saulo",
    idade: 38,
    altura: 1.71,
    temCNH: true,
    nick: ["saulorica"]
};

const textoCNH = pessoa.temCNH ? "possui CNH" : "Não possui CNH";

console.log(`nome: ${pessoa.nome}, tem ${pessoa.idade} anos, ${pessoa.altura}m, 
${textoCNH}, seu nickname é ${pessoa.nick}.`)