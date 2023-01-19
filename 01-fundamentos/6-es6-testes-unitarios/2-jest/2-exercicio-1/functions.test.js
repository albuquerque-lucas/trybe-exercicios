const {myRemove, myFizzBuzz} = require('./functions.js');

describe('Testa a função myRemove()', () => {
  test('Verifica se retorna um array removendo o item correto', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})

describe('Testa a função myFizzBuzz', () => {
  test('Verifica se retorna os números esperados das condições da função', () => {
    expect(myFizzBuzz('15')).toEqual(false);
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    expect(myFizzBuzz(9)).toEqual('fizz');
    expect(myFizzBuzz(20)).toEqual('buzz');
    expect(myFizzBuzz(4)).toEqual(4);
  });
})