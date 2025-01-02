import { cart, removeProduct, updateDelivaryOption } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from './utiles/money.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { deliveryOptions } from '../data/deliveryOptions.js';

let cartSummaryHTML = '';

cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    let productFound;

    products.forEach((productItem) => {
        if (productItem.id === productId) {
            productFound = productItem;
        }
    });

    const deliveryOptionId = cartItem.deliveryOptionId;

    let deliveryOption;

    deliveryOptions.forEach((option) => {
        if (option.id === deliveryOptionId) {
            deliveryOption = option;
        }
    });

    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
    const dateString = deliveryDate.format('dddd, MMMM D');

    cartSummaryHTML +=
    `<div class="cart-item-container js-cart-item-container-${productFound.id}">
        <div class="delivery-date">
            Delivery date: ${dateString}
        </div>

        <div class="cart-item-details-grid">
            <img class="product-image"
            src="${productFound.image}">

            <div class="cart-item-details">
            <div class="product-name">
                ${productFound.name}
            </div>
            <div class="product-price">
                ${formatCurrency(productFound.priceCents)}
            </div>
            <div class="product-quantity">
                <span>
                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                </span>
                <span class="update-quantity-link link-primary">
                Update
                </span>
                <span class="delete-quantity-link js-dilit-link link-primary" data-product-id="${productFound.id}">
                Delete
                </span>
            </div>
            </div>

            <div class="delivery-options">
                <div class="delivery-options-title">
                    Choose a delivery option:
                </div>
                ${deliveryOptionsHtml(productFound, cartItem)}
            </div>
        </div>
    </div>`;
});

function deliveryOptionsHtml(productFound, cartItem) {
    let deliveryOptionHtml = '';
    deliveryOptions.forEach((deliveryOption) => {
        const today = dayjs();
        const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
        const dateString = deliveryDate.format('dddd, MMMM D');
        const priceString = deliveryOption.priceCents === 0 ? 'FREE' : `${formatCurrency(deliveryOption.priceCents)}`;

        const isChecked = cartItem.deliveryOptionId === deliveryOption.id;

        deliveryOptionHtml += `
            <div class="delivery-option js-delivery-option" data-product-id="${productFound.id}" data-delivery-option-id="${deliveryOption.id}">
                <input type="radio"
                ${isChecked ? 'checked' : ''}
                class="delivery-option-input"
                name="delivery-option-${productFound.id}">
                <div>
                <div class="delivery-option-date">
                    ${dateString}
                </div>
                <div class="delivery-option-price">
                    ${priceString} - Shipping
                </div>
                </div>
            </div>
        `;
    });

    return deliveryOptionHtml;
}

document.querySelector('.order-summary').innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-dilit-link').forEach((link) => {
    link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        removeProduct(productId);
        document.querySelector(`.js-cart-item-container-${productId}`).remove();
    });
});

document.querySelectorAll('.js-delivery-option').forEach((option) => {
    option.addEventListener('click', () => {
        const { productId, deliveryOptionId } = option.dataset; //short hand property
        updateDelivaryOption(productId, deliveryOptionId);
    });
});