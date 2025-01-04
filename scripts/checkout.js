import { renderOrderSummery } from './checkout/orderSummary.js';
import { renderPaymentSummery } from './checkout/paymentSummary.js';
import { loadProductsFetch } from '../data/products.js';
import { loadCarts } from '../data/cart.js';

// async await
async function loadPage() {
    try {
        await loadProductsFetch();        
        const value = await new Promise((resolve) => {
            loadCarts(() => {
                resolve('value');
            });
        });
    } catch (error) {
        console.log('Unexpected error, please try again later');
        
    }

    renderOrderSummery();
    renderPaymentSummery();
}

loadPage();
/*
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
*/

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