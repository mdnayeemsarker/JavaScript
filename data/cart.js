export let cart = [
    {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1
    },
    {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 2
    }
];

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

export function removeProduct(productId) {
    cart = cart.filter((cartItem) => {
        return cartItem.productId !== productId;
    });
}