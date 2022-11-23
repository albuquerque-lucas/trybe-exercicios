let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// EXERCÍCIO 1
function imprimeNumeros(array)
{
    for(i = 0; i < numbers.length; i++){
        console.log(numbers[i]);
    }
}

// EXERCÍCIO 2
function somaValores(array)
{
    let soma = 0;

    for(i = 0; i < array.length; i++){
        soma += array[i];
    }

    return soma;
}

//EXERCÍCIO 3
function calculaMedia(array)
{
    return somaValores(array)/array.length;
}

//EXERCÍCIO 4
function verificaSeMaior(valor, comparador)
{
    if(valor <= comparador){
        return `Valor menor ou igual a ${comparador}`;
    } else{
        return `Valor maior que ${comparador}`;
    }
}

let valor = calculaMedia(numbers);

console.log(verificaSeMaior(valor, 20));


