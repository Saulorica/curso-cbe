const temIngresso = true
const censura = 16
const idade = 18

// ter ingresso e ter maior ou igual a censura

if (temIngresso === true) {
    if (idade >= censura) {
        console.log(" Pode entrar")
    } else {
        console.log("Barrado pela censura")
    }
} else {
    console, log("barradepor falta de ingresso")
}