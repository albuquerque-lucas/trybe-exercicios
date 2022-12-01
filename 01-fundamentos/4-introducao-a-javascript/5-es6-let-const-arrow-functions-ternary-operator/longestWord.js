const longestWord = (phrase) => {

    const splitedPhrase = phrase.split(' ');

    let biggestWord = splitedPhrase[0];

    for(let i = 1; i < splitedPhrase.length; i+= 1){

        if(splitedPhrase[i].length > biggestWord.length){
            biggestWord = splitedPhrase[i];
        }
    }

    return biggestWord;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')); // retorna 'aconteceu')