let filme1={
    nome:" ",
    nota:" ",

}

let filme2={
    nome:" ",
    nota:" ",

}

let nome=prompt("Digite o nome do primeiro filme: ");
nome=String(nome)
filme1.nome=nome;
let nota=prompt("Digite a nota do  primeiro filme: ");
filme1.nota=nota;

let nome2=prompt("Digite o nome do segundo filme: ");
nome2=String(nome2)
filme2.nome=nome2;
let nota2=prompt("Digite a nota do segundo filme: ");
filme2.nota=nota2;

console.log("Nome do Filme: ", nome)
console.log("Nota do Filme: ", + nota)
console.log("Nome do Segundo Filme: ", nome2)
console.log("Nome do Segundo Filme: ", + nota2)

if(nota>nota2){
    console.log("Filme com melhor nota: ", nome)
}
else{
    console.log("Filme com melhor nota: ", nome2)
}



