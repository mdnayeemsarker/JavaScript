class Cart{
    cartItems;
    #localStorageKey;

    constructor(localStorageKey) {
        this.#localStorageKey = localStorageKey;
        this.#loadCartFromStorage();
    }

    #loadCartFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
        if (!this.cartItems) {
            this.cartItems = [
                {
                    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                    quantity: 1,
                    deliveryOptionId: '1'
                }
            ];
        }
    }
    saveCartToStorage() {
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }
    addToCart(productId) {
        let productFound;
        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId === productId) {
                productFound = cartItem;
            }
        }); 
        if (productFound) {
            productFound.quantity++;
        } else {
            this.cartItems.push({productId: productId, quantity: 1, deliveryOptionId: '1'});
        }    
        this.saveCartToStorage();
    }
    removeProduct(productId) {
        this.cartItems = this.cartItems.filter((cartItem) => {
            return cartItem.productId !== productId;
        });
        this.saveCartToStorage();
    }
    updateCurtQuantify() {
        let cartQuantity = 0;
        this.cartItems.forEach((cartItem) => {
            cartQuantity += cartItem.quantity;
        });
        document.querySelector('.cart-quantity').innerHTML = cartQuantity;
    }
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
}

const cart = new Cart('cart');
const businessCart = new Cart('cart-business');

console.log(cart);
console.log(businessCart);
