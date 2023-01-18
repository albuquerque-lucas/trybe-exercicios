const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const telephone = order.phoneNumber;
  const address = order.address.street

  const frase = `Olá ${deliveryPerson}, entrega para ${order.name}, Telefone: ${telephone}, ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;

  console.log(frase);

};

customerInfo(order);

const orderModifier = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson = 'Luiz Silva';
  const telephone = order.phoneNumber;
  const pizzas = Object.keys(order.order.pizza);
  const drinks = Object.values(order.order.drinks.coke);
  const total = order.payment.total = 50;
  const frase = `Olá ${deliveryPerson}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks[0]} é de ${total}`;

  console.log(frase);

};

orderModifier(order);