function retornaQuadrado(numero)
{

    let finalString = '';

    let pivo = numero - 1;

    for(let i = 0; i < numero; i += 1){

        for(let j = 0; j < numero; j += 1){

            if(j < pivo){

                finalString += ' ';

            } else{

                finalString += '*'; 

            }



        }

        console.log(finalString);
        finalString = '';
        pivo -= 1;

    }




}

retornaQuadrado(5);