let a = parseInt(prompt('Digite o 1º lado do triangulo:'))

let b = parseInt(prompt('Digite o 2º lado do triangulo:'))

let c = parseInt(prompt('Digite o 3º lado do triangulo:'))

if (a == b && b == c){
    alert('O triangulo é EQUILÁTERO!')
} else if ((a == b && a != c) || (a == c && a != b) || (b == c && b != a)) {
    alert('O triangulo é ISÓCELES!')
} else {
    alert('O triangulo é ESCALENO!')
}
alert('Fim da análise, obrigado!')