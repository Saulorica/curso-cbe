// crie uma lista com 5 países

const países = ['brasil', 'eua', 'portugal', 'canada', 'japao']
console.log(países)

// remova um país do fim da lista
países.pop()
console.log(países)

// adicionar um país ao inicio da lista
países.unshift('japao')
console.log(países)

//remover um país do inicio da lista
países.shift()
console.log(países)

//imprima o ultimo país da lista na tela
const ultimo = países[países.length - 1]
console.log(ultimo)

// imprima o segundo país da lista
console.log(países[1])

//imprima o país de indice 2
console.log(países[2])