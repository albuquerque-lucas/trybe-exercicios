const {printMessage, info, wrongInfo} = require('./printMessage');

describe('Testa a função printMessage', () => {
  test('Testa se possui a variável passada por parâmetro possui a propriedade personagem', () => {
    const printedMessage = printMessage(info);
    expect(info).toHaveProperty('personagem');
  })
  test('Verifica se a mensagem de sucesso possui a string Boas Vindas', () => {
    expect(printMessage(info)).toMatch('Boas vindas');
  })
  test('Verifica o fluxo de exceção da função', () => {
    expect(()=> printMessage(wrongInfo)).toThrow();
    expect(() => printMessage(wrongInfo)).toThrow(new Error('objeto inválido'));
  })
})