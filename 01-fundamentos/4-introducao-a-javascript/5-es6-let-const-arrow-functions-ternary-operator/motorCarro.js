let statusMotor = "desligado";

const ligarDesligar = () => {

    statusMotor === "desligado" ? statusMotor = "ligado" : statusMotor = "desligado";

    return `O motor está ${statusMotor}`;

}


console.log(ligarDesligar());
console.log(ligarDesligar());
console.log(ligarDesligar());