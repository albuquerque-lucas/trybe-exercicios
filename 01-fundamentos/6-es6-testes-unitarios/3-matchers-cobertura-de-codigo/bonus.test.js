const {searchEmployee} = require('./bonus');


describe('Testa a função searchEmployee', () => {
  test('Testa se a função searchEmployee está declarada', () => {
    expect(() => searchEmployee('1256-4', 'firstName')).toBeDefined();
  });
  test('Testa se a função possui o retoro esperado', () => {
    expect(searchEmployee('8579-6', 'firstName')).toEqual('Ana');
    //expect(() => searchEmployee('8579-6', 'x')).toThrow();
    //expect(() => searchEmployee('8579-5', 'x')).toThrow(new Error ('Informação indisponível'));
  });
})