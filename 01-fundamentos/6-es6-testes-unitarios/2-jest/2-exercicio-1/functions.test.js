const myRemove = require('./functions.js');

describe('a função myRemove()', ()=>{
  test('verifica se retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('verifica se retorna o array esperado 2', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})