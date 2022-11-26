let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};

let infoSecond = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas’',
    recorrente: 'Sim',

}


// EXERCÍCIO 1

//console.log(`Bem vinda, ${info.personagem}`)


// EXERCÍCIO 2

//console.log(info['recorrente'])


// EXERCÍCIO 3

// for(key in info){
//     console.log(key)
// }


// EXERCÍCIO 4

// for(key in info){
//     console.log(info[key])
// }


// EXERCÍCIO 5

// console.log(`${info.personagem} e ${infoSecond.personagem}`);
// console.log(`${info.origem} e ${infoSecond.origem}`);
// console.log(`${info.nota} e ${infoSecond.nota}`);

// if(info.recorrente === "Sim" && infoSecond.recorrente === "Sim"){
//     console.log("Ambos recorrentes");
// }


// EXERCÍCIO 6

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
        }, 
        {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
        }
    ],
}

console.log(`Julia tem ${leitor['livrosFavoritos'].length} livros`);