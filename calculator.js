function calculateTotal(price, discount) {
    const tax = price * 0.05;
    // ОШИБКА: Забыли применить вычитание скидки (discount)
    return price + tax; 
}