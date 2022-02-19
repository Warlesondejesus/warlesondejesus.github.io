var quantidadeDeUsuarios = parseInt(prompt('Quantos usuários serão salvos?'))

let entrada = [];

for (let i = 1; i <= quantidadeDeUsuarios; i++) {
    let valor = {
        Nome:'',
        Idade:'',
        Nacionalidade: '',
    }
    
    valor.Nome = prompt('Digite o Nome:') 
    valor.Idade = parseInt(prompt('Digite a Idade:'))
    valor.Nacionalidade = prompt("Digite a Nacionalidade:")

    entrada.push(valor)
}

for ( let a of entrada ) {
    document.write(`Nome: ${a.Nome}, <br> <br> Idade: ${a.Idade}, <br><br> Nacionalidade: ${a.Nacionalidade}. <br><br>`)

}
