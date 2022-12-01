const substituteX = name => {

    const phrase = 'Tryber x aqui!';

    const splitedPhrase = phrase.split(' ');

    for(let i = 0; i < phrase.length; i+= 1){

        if(splitedPhrase[i] === 'x'){
            splitedPhrase[i] = name;
        }

    }

    const rejoinedPhrase = splitedPhrase.join(' ');

    return rejoinedPhrase;

}

console.log(substituteX('Lucas'))