function retornaQuadrado(numero)
{

    let asterisco = '*';

    let espacoVazio = '';

    let pivo = numero - 1;

    for(let i = 0; i < numero; i += 1){

        for(let j = 0; j < numero; j += 1){

            if(j < pivo){

                espacoVazio += ' ';

            } else{

                espacoVazio += asterisco; 

            }



        }

        console.log(espacoVazio);
        espacoVazio = '';
        pivo -= 1;

    }




}

retornaQuadrado(5);