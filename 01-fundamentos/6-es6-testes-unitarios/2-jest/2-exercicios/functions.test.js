const {myRemove, myFizzBuzz, encode, decode, techList, hydrate} = require('./functions.js');

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

describe('Testa as funções encode e decode', () => {
  test('Verifica se encode e decode são funções', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });
  test('Verifica se as funções possuem os retornos esperados', () => {
    expect(encode('aeiou')).toEqual("12345");
    expect(decode('12345')).toEqual("aeiou");
  });
  test('Verifica se as demais letras e números não são convertidos', () => {
    expect(encode('ana')).toEqual('1n1');
    expect(encode('enu')).toEqual('2n5');
    expect(encode('amelia')).toEqual('1m2l31');
    expect(encode('osmar')).toEqual('4sm1r');
    expect(encode('oswaldo')).toEqual('4sw1ld4');
    expect(decode('1n1')).toEqual('ana');
    expect(decode('2nu')).toEqual('enu');
    expect(decode('1m2l31')).toEqual('amelia');
    expect(decode('4sm1r')).toEqual('osmar');
    expect(decode('4sw1ld4')).toEqual('oswaldo');
  });
  test('verifica se a string retornada tem o mesmo número de caractéres que a string passada como parâmetro', () => {
    expect(encode('ana').length).toEqual(3);
    expect(decode('1n1').length).toEqual(3);
  })
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});