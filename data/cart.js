export const cart = [];

export function addToCart(productId) {
    let productFound;
    cart.forEach((cartItem) => {
        if (cartItem.id === productId) {
            productFound = cartItem;
        }
    }); 
    if (productFound) {
        productFound.quantity++;
    } else {
        cart.push({name: productId, quantity: 1});
    }
}

export function updateCurtQuantify() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });
    document.querySelector('.cart-quantity').innerHTML = cartQuantity;
}