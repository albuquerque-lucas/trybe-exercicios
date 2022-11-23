const a = 80;
const b = 60;
const c = 20;

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
        return primeiroNumero;
    } else if(primeiroNumero == segundoNumero){
        return 0;
    } else{
        return segundoNumero;
    }
}

function maiorDeTres(primeiroNumero, segundoNumero, terceiroNumero)
{
    let maior;

    if(maiorNumero(primeiroNumero, segundoNumero) == maiorNumero(primeiroNumero, terceiroNumero))
    {
        maior = primeiroNumero;
    } else if(maiorNumero(segundoNumero, terceiroNumero) == maiorNumero(primeiroNumero, terceiroNumero)){
        maior = terceiroNumero;
    } else if(maiorNumero(segundoNumero, terceiroNumero) == maiorNumero(primeiroNumero, segundoNumero)){
        maior = segundoNumero;
    }

    console.log(maior);

}


maiorDeTres(a, b, c);

// maiorNumero(a, b);

// operacao(a, b, '+');
// operacao(a, b, '-');
// operacao(a, b, '*');
// operacao(a, b, '/');
// operacao(a, b, '%');