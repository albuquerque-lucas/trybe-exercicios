
// EXERCÍCIO 1
function imprimeFatorial(valor)
{

    let produto = 1;

    for(let i = 1; i <= valor; i++){

        produto *= i;

    }

    return produto;
}

// EXERCÍCIO 2
function trocaLetras(palavra)
{
    let newWord = '';

    for(let i = palavra.length - 1; i >= 0; i--){
        newWord += palavra[i];
    }

    return newWord;
    
}

// EXERCÍCIO 3
let languages = ['java', 'javascript', 'python', 'html', 'css'];


function menorPalavra(array)
{
    let menor = array[0];

    for (let i = 1; i < array.length; i+=1){
        
        if(array[i] < menor){
            menor = array[i];
        }

    }

    console.log(menor);

}

// EXERCÍCIO 4

function numeroPrimo(numero)
{

    let resultado;

    if(numero % 2 == 0){
        resultado = false;
    } else{
        resultado = true;
    }

    return resultado;

}