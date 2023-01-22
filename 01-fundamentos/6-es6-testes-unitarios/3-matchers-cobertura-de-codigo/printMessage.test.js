const {printMessage, info} = require('./printMessage');

describe('Testa a se o objeto passado para a função printMessage possui a propriedade personagem', () => {
  test('Testa se possui a propriedade personagem', () => {
    const printedMessage = printMessage(info);
    expect(info).toHaveProperty('personagem');
  })
  test('Verifica se a mensagem possui a string Boas Vindas', () => {
    expect(printMessage(info)).toMatch('Boas vindas');
  })
})