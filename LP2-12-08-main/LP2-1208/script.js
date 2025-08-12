const aluno ={
    nome: "João",
    nota: 10,
    matricula: 231,
}

if(aluno.nota>=6){
    alert("Aprovado");
}

else if(aluno.nota >= 4){
    alert("Recuperação Final");
}

else{
    alert("Reprovado");
}