import { renderOrderSummery } from './checkout/orderSummary.js';
import { renderPaymentSummery } from './checkout/paymentSummary.js';
// import '../data/backend.js'
import { loadProducts } from '../data/products.js';
import { loadCarts } from '../data/cart.js';

/*
new Promise((resolve) =>{
    loadProducts(() => {
        resolve();
    });
}).then(() => {
    renderOrderSummery();
    renderPaymentSummery();
})
*/

loadProducts(() => {
    loadCarts(() => {
        renderOrderSummery();
        renderPaymentSummery();
    })
})