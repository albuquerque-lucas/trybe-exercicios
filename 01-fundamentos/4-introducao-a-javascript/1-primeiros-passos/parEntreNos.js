

const a = 5;
const b = 2;
const c = 1250;



function validaSeTemPar(a, b, c){

    let resultado;

    if(a % 2 == 0 || b % 2 == 0 || c % 2 == 0){
        resultado = true;
    } else{
        resultado = false;
    }

    return resultado;
}

console.log(validaSeTemPar(a, b, c));