const sum = require('./sum')


describe('Testa a função sum', () => {
  it('Testa se possui o restorno esperado', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  })
  it('Testa se a função sum lança a exceção prevista', () => {
    expect(() => sum(5, '5')).toThrow();
    expect(() => sum(5, '5')).toThrow(new Error('parameters must be numbers'));
  })
})