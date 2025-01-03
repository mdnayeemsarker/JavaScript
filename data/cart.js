export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
    cart = [
        {
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '1'
        }
    ];
}

function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
    let productFound;
    cart.forEach((cartItem) => {
        if (cartItem.productId === productId) {            
            productFound = cartItem;
        }
    });
    
    if (productFound) {
        productFound.quantity++;
    } else {        
        cart.push({productId: productId, quantity: 1, deliveryOptionId: '1'});
    }    
    saveCartToStorage();
}

export function updateCurtQuantify() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });
    document.querySelector('.cart-quantity').innerHTML = cartQuantity;
}

export function removeProduct(productId) {
    cart = cart.filter((cartItem) => {
        return cartItem.productId !== productId;
    });
    saveCartToStorage();
}

export function updateDelivaryOption(productId, deliveryOptionId) {
    let productFound;
    cart.forEach((cartItem) => {
        if (cartItem.productId === productId) {
            productFound = cartItem;
        }
    });
    productFound.deliveryOptionId = deliveryOptionId;
    saveCartToStorage();
}