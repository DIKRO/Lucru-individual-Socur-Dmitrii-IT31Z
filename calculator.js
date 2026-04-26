// Функция корректно вычитает скидку из цены товара
function calculateTotal(price, discount) {
    if (discount < 0 || discount > price) return price;
    return price - discount;
}
module.exports = calculateTotal;