function verifyPalindrome(word)
{
    const arrayWord = word.split('');
    const reversed = arrayWord.reverse();
    const joined = reversed.join('');

    let verification;

    if(word == joined){
        verification = true;
    } else{
        verification = false;
    }

    return verification;
}

function biggestIndex(array)
{

    let biggest = array[0];

    for(let i = 1; i < array.length; i += 1){

        if(array[i] > biggest){

            biggestIndex = i;
        }

    }

    return biggestIndex;

}

function smallestIndex(array)
{
    let smallest = array[0];
    let smallIndex;

    for(let i = 1; i < array.length; i += 1){

        if(array[i] < smallest){
            
            smallIndex = i;
        }

    }

    return smallIndex;
}

//Por quê o código não funciona se eu tirar o biggest = array[i].length ?
function numberOfCharacters(array)
{

    let biggest = array[0].length;
    let biggestWord;

    for(let i = 1; i < array.length; i += 1){

        if(array[i].length > biggest){

            biggest = array[i].length;

            biggestWord = array[i];
        }

    }

    return biggestWord;

}

function mostRepeatedValue(array)
{
    let repeatedNumberCont = 0;
    let numberCont = 0;
    let indexCont = 0;

    for(let i = 0; i < array.length; i += 1){

        let verification = array[i];
        
        for(let j = 0; j < array.length; j++){
            if(verification === array[j]){
                numberCont +=  1;
            }
        }

        if(numberCont > repeatedNumberCont){
            repeatedNumberCont = numberCont;
            indexCont = i;
        }

        numberCont = 0;

    }

    return array[indexCont];
}


function addValues(value)
{

    let sum = 0;

    for(let i = 1; i <= value; i+=1){

        sum += i;

    }

    return sum;
}

function verifyLastLetters(word, ending)
{

    let verification = [];

    for(let i = word.length - 2; i < word.length ; i += 1){

        verification.push(word[i]);
    }

    let joined = verification.join('');

    let result = ending === joined ? true : false;

    return result;

}