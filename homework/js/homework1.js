// *** task 1

// Станція з продажу ремонтних дроїдів готова до запуску,
// залишилося написати програмне забезпечення для відділу продажів.

// Оголоси функцію makeTransaction, яка очікує два параметри,
// значення яких будуть задаватися під час її виклику:

// quantity— перший параметр, число, що містить кількість замовлених дроїдів
// pricePerDroid — другий параметр, число, що містить вартість одного дроїда
// Доповни код функції так, щоб вона повертала рядок з повідомленням про покупку ремонтних дроїдів:
// "You ordered <quantity> droids worth <totalPrice> credits!", де:

// <quantity> — це кількість замовлених дроїдів
// <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її роботи.

function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    return `"You ordered ${quantity} droids worth ${totalPrice} credits!"`
}
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 50

// =======================================================================

// *** task 2

// Оголоси функцію getShippingMessage, яка очікує три параметри,
// значення яких будуть задаватися під час її виклику:

// country — перший параметр, рядок, що містить країну доставки
// price — другий параметр, число, що містить загальну вартість товару
// deliveryFee — третій параметр, число, що містить вартість доставки товару
// Доповни код функції так, щоб вона повертала рядок з повідомленням
// про доставку товару в країну користувача: "Shipping to <country> will cost <totalPrice> credits", де:

// <country> — це країни доставки
// <totalPrice> — це загальна вартість замовлення, що включає вартість товару і його доставки
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

function getShippingMessage(country, price, deliveryFee) {
    let totalPrice = price + deliveryFee;
    return `"Shipping to ${country} will cost ${totalPrice} credits"`
}
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20));  // "Shipping to Sweden will cost 120 credits"
// =================================================================

// *** task 3

// Оголоси функцію getElementWidth, яка очікує три параметри, значення яких будуть задаватися під час її виклику: 
// • content — перший параметр, ширина контенту
// • padding — другий параметр, значення горизонтального падінгу для кожної зі сторін
// • border — третій параметр, значення товщини бордера для кожної зі сторін
// Значення всіх параметрів будуть рядками формату Npx де N — це довільне число, ціле або дробове.

// Доповни код функції так, щоб вона повертала число —загальну ширину елемента.
// При розрахунку загальної ширини орієнтуйся на те, що значення box - sizing дорівнює border - box.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її роботи.

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200

function getElementWidth(content, padding, border) {
    return parseInt(content) + parseInt(padding) * 2 + parseInt(border) * 2;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200