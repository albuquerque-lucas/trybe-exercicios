//  EXERCÍCIO 1
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// EXERCÍCIO 2
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// EXERCÍCIO 3
const mapString = (objectMap, string) => {
  const splitString = string.split('');
  const mappedArray = [];
  for (let index = 0; index < splitString.length; index += 1) {
    const character = splitString[index];
    const mappedValue = objectMap[character];
    
    if (mappedValue) {
      mappedArray.push(mappedValue);
    } else {
      mappedArray.push(character);
    }
  }
  return mappedArray.join('');
}
const encode = (string) => {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return mapString(map, string);
}
const decode = (string) => {
  const map = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return mapString(map, string);
}

const techList = (list, studentName) => {

  if(list.length === 0){
    return "Vazio!";
  } else{
    list.sort();
    let objectArray = []
    for (let i = 0; i < list.length; i += 1) {
      let techItem = {
          tech: list[i],
          name: studentName
        }
        objectArray.push(techItem);
      }
  
      return objectArray;
  }

}

const hydrate = string => {
  let count = 0;
  const array = string.split('');
  const newArray = [];

  for(let i = 0; i < array.length; i += 1){
    let newItem = parseInt(array[i]);

    if(newItem){
      count += newItem;
    }
    }

  let glass = 'copo';

  if (count > 1) {
    glass = 'copos';
  }

  return `${count} ${glass} de água`;
}

hydrate('1 copo de água');
module.exports = {myRemove, myFizzBuzz, encode, decode, techList, hydrate};