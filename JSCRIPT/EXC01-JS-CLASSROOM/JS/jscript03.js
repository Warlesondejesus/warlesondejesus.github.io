var x = parseInt(prompt('Digite o valor da variável X'))
var y = parseInt(prompt('Digite o valor da variável Y'))

alert(`O valor de X é = ${x} e de Y é = ${y}`)

var aux = x
x = y
y = aux

alert(`O novo valor de X é = ${x} e de Y é = ${y}`)
alert('Fim da análise, obrigado!')