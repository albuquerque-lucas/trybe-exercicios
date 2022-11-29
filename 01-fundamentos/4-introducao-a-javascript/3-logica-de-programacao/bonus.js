function retornaQuadrado(numero)
{

    let string = '*';
    let finalString = '';


    for(let i = 0; i <= numero; i += 1){
        finalString += string;
    }

    for(let j = 0; j <= numero; j += 1){
        console.log(finalString);
    }


}

retornaQuadrado(5);