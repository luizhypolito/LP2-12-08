let cont=prompt("Qual a operação deseja realizar: 1- adição  2- subtração  3- Divisão 4- Multiplicação")
cont= Number(cont)

let n1=prompt("Digite o primeiro número: ")
n1 = Number(n1)

let n2=prompt("Digite o segundo número: ")
n2 = Number(n2)

if( cont == 1 ){

    let soma = n1 + n2
    console.log(" O resultado é " + soma)
}

if( cont == 2 ){

    let sub = n1 - n2
    console.log(" O resultado é " + sub)
}

if( cont == 3 ){

    if(n2==0){
        console.log("Não pode ser dividido por 0 ")
    }

    let div = n1 / n2
    console.log(" O resultado é " + div)

    
}

if( cont == 4 ){

    let mul = n1 * n2
    console.log(" O resultado é " + mul)
}