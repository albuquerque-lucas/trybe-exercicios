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

const minhasSkills = phrase => {

    const skills = ['html', 'css', 'javascript'];


    return `
    ${phrase}
    Minhas três principais habilidades são:
    - ${skills[0]}
    - ${skills[1]}
    - ${skills[2]}
    `

}

console.log(minhasSkills(substituteX('Lucas')));