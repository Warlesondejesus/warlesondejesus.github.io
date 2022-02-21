let txt = prompt('Digite um texto curto!')

let txtUp = txt.toUpperCase();

let txtLo = txt.toLowerCase();

document.write(`<p><strong>Texto Original:</strong> ${txt}</p>`);

document.write(`<p><strong>Texto em Maiusculas:</strong> ${txtUp}</p>`);

document.write(`<p><strong>Texto em minusculas:</strong> ${txtLo}</p>`);


let letras = txt.split("");
for (i of letras){
console.log(i);
}