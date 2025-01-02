export function formatCurrency(priceCentes) {
    // return ( '$ ' . priceCentes / 100).toFixed(2) + ' USD';
    return `$${(Math.round(priceCentes) / 100).toFixed(2)} USD`;
}