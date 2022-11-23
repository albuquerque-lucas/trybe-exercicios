const a = 89;
const b = 45;
const c = 45;

function operacao(primeiroNumero, segundoNumero, operador)
{

    switch(operador){
        case '+':
            return primeiroNumero + segundoNumero;
            
        case '-':
            return primeiroNumero - segundoNumero;
            
        case '*':
            return primeiroNumero * segundoNumero;
            
        case '/':
            return primeiroNumero / segundoNumero;
            
        case '%':
            return primeiroNumero % segundoNumero;
            
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

    if(maiorNumero(primeiroNumero, segundoNumero) == maiorNumero(primeiroNumero, terceiroNumero)){

        maior = primeiroNumero;

    } else if(maiorNumero(segundoNumero, terceiroNumero) == maiorNumero(primeiroNumero, terceiroNumero)){
        
        maior = terceiroNumero;

    } else if(maiorNumero(segundoNumero, terceiroNumero) == maiorNumero(primeiroNumero, segundoNumero)){
        
        maior = segundoNumero;

    }

    console.log(maior);

}

function validaTriangulo(angulo1, angulo2, angulo3)
{
    let somaDoisLados = operacao(angulo1, angulo2, '+');

    if(angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0){
        console.log("Um dos parâmetros passados possui valor 0. O ângulo precisa ter um valor positivo.")
    }
    else if(somaDoisLados + angulo3 !== 180){
        console.log("A somatória dos ângulos não corresponde a de um triângulo.");
    }  else{
        console.log("É um triângulo.");
    }
}

validaTriangulo(a, b, c);


// maiorDeTres(a, b, c);

// maiorNumero(a, b);

// operacao(a, b, '+');
// operacao(a, b, '-');
// operacao(a, b, '*');
// operacao(a, b, '/');
// operacao(a, b, '%');