import {formatCurrency} from '../scripts/utiles/money.js';

const testResult = document.querySelector('.test-result');

let testResults = '';

for (let i = 0; i < 50; i++) {
    const randomNumber = Math.floor(Math.random() * 10000);
    const formattedCurrency = formatCurrency(randomNumber);
    const expectedCurrency = (randomNumber / 100).toFixed(2);

    if (formattedCurrency === expectedCurrency) {
        testResults += `Test ${i + 1} passed for ${randomNumber}: ${formattedCurrency}<br>`;
    } else {
        testResults += `Test ${i + 1} failed for ${randomNumber}: ${formattedCurrency} (expected: ${expectedCurrency})<br>`;
    }
}

const formattedCurrencyZero = formatCurrency(0);
const expectedCurrencyZero = (0).toFixed(2);

if (formattedCurrencyZero === expectedCurrencyZero) {
    testResults += `Test with 0 passed: ${formattedCurrencyZero}<br>`;
} else {
    testResults += `Test with 0 failed: ${formattedCurrencyZero} (expected: ${expectedCurrencyZero})<br>`;
}

testResult.innerHTML = testResults;