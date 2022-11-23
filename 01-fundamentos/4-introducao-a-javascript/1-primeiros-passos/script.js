const a = 13;
const b = 5;
const c = 10;

function operacao(primeiroNumero, segundoNumero, operador)
{

    switch(operador){
        case '+':
            console.log(primeiroNumero + segundoNumero);
            break;
        case '-':
            console.log(primeiroNumero - segundoNumero);
            break;
        case '*':
            console.log(primeiroNumero * segundoNumero);
            break;
        case '/':
            console.log(primeiroNumero / segundoNumero);
            break;
        case '%':
            console.log(primeiroNumero % segundoNumero);
            break;
    }

}

function maiorNumero(primeiroNumero, segundoNumero)
{
    if(primeiroNumero > segundoNumero){
        console.log(primeiroNumero);
    } else if(primeiroNumero == segundoNumero){
        console.log('Os dois números são iguais!')
    } else{
        console.log(segundoNumero);
    }
}

function maiorDeTres(primeiroNumero, segundoNumero, terceiroNumero)
{

    

}

maiorNumero(a, b);

// operacao(a, b, '+');
// operacao(a, b, '-');
// operacao(a, b, '*');
// operacao(a, b, '/');
// operacao(a, b, '%');