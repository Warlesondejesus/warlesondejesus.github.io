alert('Vamos transformar números binários em decimais')

do{ 
    var bin = prompt('Digite o número em binário:')

    var bin_valido = true;
    for (let i of bin){ 
        if ((bin.charCodeAt(i) != 49 ) && (bin.charCodeAt(i) != 48 )){ // aqui o valor passado em decimal é 
            //convertido pelo metodo charCodeAt 48=0 e 49=1, assim nenhum numero diferente de 0 e 1 são computados.
            bin_valido = false;
        }
    }

    if (bin_valido == false){
        alert('Insira um número binário válido :)')
    }
} while (bin_valido == false)

var dec = 0; //start no número na base 10.

var dig = bin.length; //armazenando o tamanho do número binário.

for (let i = (dig - 1); i >=0; i--){
    mult = parseInt(bin[i]);
    dec += mult * 2 ** (dig - 1 - i);
}

alert(`O número\n${bin} em binário \nEquivale ao número\n${dec} em decimais.`)

