function verifyEmptyString(number1, number2) {

    if(number1 === '' || number2 === ''){
        throw new Error ('Um ou mais inputs não foram preenchidos.');
    }

}

function verifyIfItsNumber(value1, value2) {

    if(isNaN(value1) || isNaN(value2)){
        throw new Error ('Um dos valores digitados não é um número.');
    }

}

function sum() {

    const input1 = document.getElementById('value1');
    const input2 = document.getElementById('value2');
    const value1 = input1.value;
    const value2 = input2.value;

    try{
        verifyEmptyString(value1, value2);
        verifyIfItsNumber(value1, value2);
        const result = Number(value1) + Number(value2);
        document.getElementById('result').innerHTML = `Resultado: ${result}`;
    } catch(error){
        document.getElementById('result').innerHTML = error.message;
    } finally{
        value1.value = '';
        value2.value = '';
    }

}
window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
}