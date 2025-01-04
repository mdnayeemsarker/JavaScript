import { renderOrderSummery } from './checkout/orderSummary.js';
import { renderPaymentSummery } from './checkout/paymentSummary.js';
// import '../data/backend.js'
import { loadProducts } from '../data/products.js';

loadProducts(() => {
    renderOrderSummery();
    renderPaymentSummery();
})