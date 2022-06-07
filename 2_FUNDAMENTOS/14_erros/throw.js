const x = '10'

//checar se x é um inteiro
if(!Number.isInteger(x)) {
    throw new Error ('O valor de x não é um número inteiro!')
}

console.log('COntinuando o código...')