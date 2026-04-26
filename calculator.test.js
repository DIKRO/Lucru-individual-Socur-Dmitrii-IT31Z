const calculateTotal = require('./calculator');

test('Правильно вычитает скидку из цены', () => {
    // Ожидаем, что 1000 - 200 = 800
    expect(calculateTotal(1000, 200)).toBe(800);
});