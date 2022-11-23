function calculaLucro(custo, valor)
{

    const taxaImposto = 0.2;
    const imposto = custo * taxaImposto;

    let lucro = valor - (custo + imposto);

    if(custo < 0 || valor < 0){
        return "Nenhum dos valores de entrada podem ser menores que 0.";
    }

    return lucro;

}

console.log(calculaLucro(10, 30));