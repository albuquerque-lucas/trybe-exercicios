function calculaSalarioLiquido(salarioBruto)
{
    let salarioBase = salarioBruto - calculaINSS(salarioBruto);

    const salarioLiquido = salarioBase - calculaIR(salarioBase);

    return salarioLiquido;

}

function calculaINSS(salario)
{
    let deducao;

    if(salario <= 1556.94){
        deducao = salario * 0.08;
    } else if(salario > 1556.90 && salario <= 2595.92){
        deducao = salario * 0.09;
    } else if(salario > 2595.92 && salario <= 5189.82){
        deducao = salario * 0.11;
    } else{
        deducao = salario - 570.88;
    }

    return deducao;
}

function calculaIR(salarioBase)
{
    let deducao;

    if(salarioBase <= 1903.98){
        deducao = 0;
    } else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
        deducao = (salarioBase * 0.075) - 142.8;
    }  else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
        deducao = (salarioBase * 0.15) - 354.8;
    } else if(salarioBase >= 3751.06 && salarioBase <= 4464.68){
        deducao = (salarioBase * 0.225) - 636.13;
    } else{
        deducao = (salarioBase * 0.275) - 869.36;
    }

    return deducao.toFixed(2);
}


console.log(calculaSalarioLiquido(3000));