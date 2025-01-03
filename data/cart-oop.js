function Cart(localStorageKey) {
    const cart = {
        cartItems: undefined,
        loadCartFromStorage() {
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
            if (!this.cartItems) {
                this.cartItems = [
                    {
                        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                        quantity: 1,
                        deliveryOptionId: '1'
                    }
                ];
            }
        },
        saveCartToStorage() {
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        },
        addToCart(productId) {
            let productFound;
            this.cartItems.forEach((cartItem) => {
                if (cartItem.id === productId) {
                    productFound = cartItem;
                }
            }); 
            if (productFound) {
                productFound.quantity++;
            } else {
                this.cartItems.push({productId: productId, quantity: 1, deliveryOptionId: '1'});
            }    
            this.saveCartToStorage();
        },
        removeProduct(productId) {
            this.cartItems = this.cartItems.filter((cartItem) => {
                return cartItem.productId !== productId;
            });
            this.saveCartToStorage();
        },
        updateCurtQuantify() {
            let cartQuantity = 0;
            this.cartItems.forEach((cartItem) => {
                cartQuantity += cartItem.quantity;
            });
            document.querySelector('.cart-quantity').innerHTML = cartQuantity;
        },
        updateDelivaryOption(productId, deliveryOptionId) {
            let productFound;
            this.cartItems.forEach((cartItem) => {
                if (cartItem.productId === productId) {
                    productFound = cartItem;
                }
            });
            productFound.deliveryOptionId = deliveryOptionId;
            this.saveCartToStorage();
        }
    
    };
    return cart;
}

const cart = Cart('cart');
const businessCart = Cart('cart-business');

cart.loadCartFromStorage();
businessCart.loadCartFromStorage();

console.log(cart);
console.log(businessCart);
