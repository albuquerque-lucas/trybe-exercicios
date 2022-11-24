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


//EXERCÍCIO 5
function maiorValor(array)
{
    let hightest = array[0];

    for(i = 1; i < array.length; i ++){

        if(array[i] > hightest){
            hightest = array[i];
        }

    }

    return hightest;
}

//EXERCÍCIO 6
function menorValor(array)
{
    let lowest = array[0];

    for(i = array.length - 1; i > 0; i--){

        if(array[i] < lowest){
            lowest = array[i];
        }

    }

    return lowest;
}

//EXERCÍCIO 7
function imprimeArray(maximo)
{

    let array = [];

    for(i = 1; i <= maximo; i++){

        array.push(i);

    }

    return array;
}

//EXERCÍCIO 8
function divideItemsArray(array)
{

    let newArray = [];

    for(i = 0; i < array.length; i++){

        dividedItem = array[i]/2;

        newArray.push(dividedItem);


    }

    return newArray;
}

let array = imprimeArray(25);

console.log(divideItemsArray(array));

//

