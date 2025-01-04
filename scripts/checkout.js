import { renderOrderSummery } from './checkout/orderSummary.js';
import { renderPaymentSummery } from './checkout/paymentSummary.js';
// import '../data/backend.js'
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCarts } from '../data/cart.js';

// async await

Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCarts(() => {
            resolve();
        });
    })

]).then((value) => {
    console.log(value);
    
    renderOrderSummery();
    renderPaymentSummery();
});

/*
new Promise((resolve) =>{
    loadProducts(() => {
        resolve('value1');
    });

}).then((value) => {
    console.log(value);
    
    return new Promise((resolve) => {
        loadCarts(() => {
            resolve();
        });
    });
    
}).then(() => {
    renderOrderSummery();
    renderPaymentSummery();
});
*/
/*
loadProducts(() => {
    loadCarts(() => {
        renderOrderSummery();
        renderPaymentSummery();
    })
})
*/