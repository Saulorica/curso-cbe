const saldo = 10

const unidade = (saldo === 1 ? "real" : "reais")

console.log(`Você tem ${saldo} ${unidade}`)

// essa é a estrutura de um ternario, que é
// equivalente ao codigo abaixo.

// if (saldo === 1) {
//     console.log(`Seu saldo é ${saldo} real`)
// } else {
//     console.log(`Você tem ${saldo} reais`)
// }