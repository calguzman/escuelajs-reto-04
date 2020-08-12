const randomTime = require('./utils/randomTime');
const fetchDataOrders = require('./utils/fetchDataOrders');
const API = 'https://us-central1-escuelajs-api.cloudfunctions.net/orders';

const orders = (time, product, table) => {
  console.log(`### Orden: ${product} para ${table}`);
  return new Promise((resolve, reject) => {
    if(true){
      setTimeout(() => {
        resolve(`=== Pedido servido: ${product}, tiempo de preparación ${time}ms para la ${table}`);
      }, time);
    }
    else{
      reject(new Error("Error Order Processing"));
    }
    
  });
}

const menu = {
  hamburger: 'Combo Hamburguesa',
  hotdog: 'Combo Hot Dogs',
  pizza: 'Combo Pizza',
};

const table = ['Mesa 1', 'Mesa 2', 'Mesa 3', 'Mesa 4', 'Mesa 5'];

// Waiter1
const waiter = () => {
  let randomTimeProcess=randomTime();
  orders(randomTimeProcess, menu.hamburger, table[3])
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};
// Waiter2
const waiter2 = () => {
  let randomTimeProcess=randomTime();
  orders(randomTimeProcess,menu.hotdog,table[0])
    .then((res)=>{
      console.log(res);
      return orders(randomTimeProcess,menu.pizza,table[2]);
    })
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.error(err);
    })  
}
// Waiter3
const waiter3 = async () =>{
  try{
    const order1 = await orders(randomTime(),menu.hotdog,table[2]);
    const order2 = await orders(randomTime(),menu.pizza,table[2]);
    const order3 = await orders(randomTime(),menu.hotdog,table[2]);
    console.log(order1);
    console.log(order2);
    console.log(order3);
  }
  catch(error){
  console.error(error);
  }
}
// Waiter4
const waiter4 = async (API) => {
  try{
    // Cargando Elementos para el menú!
    const element1 = await fetchDataOrders(API);
    const element2 = await fetchDataOrders(API);
    const element3 = await fetchDataOrders(API);
    const element4 = await fetchDataOrders(API);
    // Preparando las ordenes!
    const order1 = await orders(randomTime(),element1.data,table[2]);
    const order2 = await orders(randomTime(),element2.data,table[2]);
    const order3 = await orders(randomTime(),element3.data,table[2]);
    const order4 = await orders(randomTime(),element4.data,table[2]);
    // Sirviendo Pedidos!
    console.log(order1);
    console.log(order2);
    console.log(order3);
    console.log(order4);
  }
  catch(error){
    console.error(error);
  }
}
waiter1();
waiter2();
waiter3();
waiter4(API);