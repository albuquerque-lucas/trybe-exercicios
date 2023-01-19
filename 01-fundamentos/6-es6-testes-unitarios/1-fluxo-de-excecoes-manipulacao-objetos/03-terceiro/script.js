const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const setKey = (object, key, value) => {

  object[key] = value;

  return object;

}

const listKeys = object => {

  for(key in object){
    console.log(key);
  }

}

const listValues = object => {

  for(key in object){
    console.log(object[key]);
  }

}

const objectLength = object => {

  return Object.keys(object).length;

}

// setKey(lesson1, 'turno', 'noite');
// listKeys(lesson1);
// console.log(objectLength(lesson1));
// listValues(lesson1);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
const totalStudents = object => {
  let sum = 0;
  for(key in object){
    sum += object[key].numeroEstudantes;
  }
  return sum;
}
// console.log(totalStudents(allLessons));

const getValuebByNumber = (list, position) => Object.values(list)[position];

  // let valueArray = [];
  // for(key in list){
  //   valueArray.push(list[key]);
  // }
  // return valueArray[position];

//console.log(getValuebByNumber(lesson1, 0));

const verifyKeyExistence = (key, list) => {
    if(!list.includes(key)){
      throw new Error(`ERRO! O item "${key}" não foi encontrado na tabela.`);
    }
}

const verifyKeyValue = (list, key, value) => {
  let entries = Object.entries(list);
  let isEqual = false;
  let message = "A combinação de chave e valor é verdadeira";

  for (let index in entries) {
    if(entries[index][0] === key && entries[index][1] === value) isEqual = true;
  }
  
  if(isEqual){
    return message;
  } else{
    throw new Error('ERRO! A combinação de chave e valor especificada não foi encontrada.');
  }

}

const verifyPair = (list, key, value) => {

  let keyList = Object.keys(list);

  try{
    verifyKeyExistence(key, keyList);
    return verifyKeyValue(list, key, value);
  }catch(error){
    return error.message;
  }




}

// console.log(verifyPair(lesson3, 'numeroEstudantes', 10));

const verifyStudentsViews = (list, sClass) => {
  let count = 0;
  for (let i in list) {
    if(list[i].materia === sClass){
      count += list[i].numeroEstudantes;
    }
  }

  return count;
}

console.log(verifyStudentsViews(allLessons, 'Matemática'));