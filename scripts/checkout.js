import { renderOrderSummery } from './checkout/orderSummary.js';
import { renderPaymentSummery } from './checkout/paymentSummary.js';
import { loadProductsFetch } from '../data/products.js';
import { loadCarts } from '../data/cart.js';

// async await
async function loadPage() {
    try {
        // throw 'error1'; //manually create error

        await loadProductsFetch();        
        const value = await new Promise((resolve, reject) => {
            // throw 'error2'; //manually create error
            loadCarts(() => {
                // reject('error3');
                resolve('value3');
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