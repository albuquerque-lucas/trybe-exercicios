
//EXERCÍCIO 1
function imprimeFatorial(valor)
{

    let produto = 1;

    for(let i = 1; i <= valor; i++){

        produto *= i;

    }

    return produto;
}

let array = [1, 4, 23, 65, 352, 7,  10]

//EXERCÍCIO 2
function trocaLetras(palavra)
{
    let newWord = '';

    for(let i = palavra.length - 1; i >= 0; i--){
        newWord += palavra[i];
    }

    return newWord;
    
}

console.log(trocaLetras('tryber'))