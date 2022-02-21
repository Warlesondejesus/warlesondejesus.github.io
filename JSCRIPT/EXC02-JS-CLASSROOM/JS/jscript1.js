do {
    var quantNumeros = parseInt(prompt('Quantos Números você quer digitar??'));
    if (Number.isNaN(quantNumeros) && quantNumeros < 0) {
        alert('Digite um número positivo e inteiro!')
    }
    console.log(Number.isNaN(quantNumeros))
} while (Number.isNaN(quantNumeros) && (quantNumeros < 0));

var numeros = new Array();

for (let i = 0; i < quantNumeros; i++) {
    do {
        numeros[i] = parseFloat(prompt(`Digite o ${i + 1}º Número `));
        if (Number.isNaN(numeros[i])) {
            alert('Digite um número positivo inteiro ou decimal separado por ponto!')
        }
    } while (Number.isNaN(numeros[i]))

}

var soma = numeros.reduce((soma, elemento) => soma + elemento);
console.log(soma);

var media = soma / quantNumeros;
media = media.toFixed(2)

var qdrd = new Array(quantNumeros);

for (let q in numeros){
    qdrd[q] = numeros[q] * numeros[q];
}
console.log(qdrd);

var rz2 = new Array(quantNumeros);

for (let r in numeros){
    rz2[r] = (Math.sqrt(numeros[r])).toFixed(2);
}
console.log(rz2);

var rz3 = new Array(quantNumeros);

for (let cub in numeros){
    rz3[cub] = (Math.cbrt(numeros[cub])).toFixed(2);
}

console.log(rz3);

document.write('<h1>Resultados</h1>')

document.write('<h2>Você digitou</h2>')
    for (let i of numeros){
        document.write(` / ${i} `)
    }
    document.write(` / <br>`)

document.write('<h2>Soma</h2>')
    document.write(`${soma} `)

document.write('<h2>Média</h2>')
    document.write(`${media} `)

document.write('<h2>Elementos ao quadrado</h2>')
    for (let i of qdrd){
        document.write(`/ ${i} `)
    }
    document.write(`/<br>`)

document.write('<h2>Raiz quadrada dos elementos</h2>')
    for (let i of rz2){
        document.write(`/ ${i} `)
    }
    document.write(`/<br>`)

document.write('<h2>Raiz cúbica dos elementos</h2>')
    for (let i of rz3){
        document.write(`/ ${i} `)
    }
    document.write(`/ `)

    document.write('<h2>Obrigado por chegar até aqui!</h2>')