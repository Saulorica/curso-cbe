// Escopo é uma região do código 
// onde podem existir variáveis, ex:

function hello(name) {
    //isso aqui é um Escopo
}

//________________________________________ 

const variavel = imutavel;
{
    let variavel = mutavel;
}
console.log(variavel);

// O que está dentro do escopo, pode acessar
// o conteúdo que está fora.
// O que esta fora, não pode acessar
// o conteúdo de dentro.
