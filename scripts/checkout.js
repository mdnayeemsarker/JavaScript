import { renderOrderSummery } from './checkout/orderSummary.js';
import { renderPaymentSummery } from './checkout/paymentSummary.js';
// import '../data/backend.js'
import { loadProducts } from '../data/products.js';


new Promise((result) =>{
    console.log('new Promise');
})

loadProducts(() => {
    renderOrderSummery();
    renderPaymentSummery();
})