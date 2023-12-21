// *        1. arguments псевдомасив
// *        2. Array.from - перетворення псевдомасива
// *        3. Стек викликів
// *        4. Рекурсія



// *** 1. arguments псевдомасив
// використовується, коли ми не знаємо скільки буде аргументів
// можна звернутись до індексу arguments[0]
// має довжину arguments.lenght
// function showArgs() {
//     console.log(arguments);
//     for (const el of arguments) {
//         console.log(el);
//     }
// }
// showArgs('Hello', 'World', 'Test', 'Line');


// ** ======= Задача ============
// * Напиши функція add для складання довільної
// * кількості аргументів (чисел)
// function sum() {
//     let total = 0;
//     for (const num of arguments) {
//         total += num;
//     }
//     return total;
// }
// const res1 = sum(10, 20, 5, 7);
// const res2 = sum(1, 2);
// const res3 = sum();
// console.log(res3);
// console.log(res2);
// console.log(res1);

// ** =========== Задача ============
// * Напиши функцію calcAverage() як приймає довільну кількість
// * аргументів і повертає їхнє середнє значення.
// * Усі аргументи будуть лише числами.
// function calcAverage() {
//     let avg = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         avg += arguments[i];
//     }
//     return avg / arguments.length
// }
// const res1 = calcAverage(10, 2, 4, 5, 1, 3, 5);
// console.log(res1);

// ** =========== Задача ============
// * Знайти максимальне число
// function getMax() {
//     let max = -Infinity; // мінус безкінечності
//     for (const num of arguments) {
//         if (num > max) {
//             max = num;
// }
//     }
//     return max;
// }
// const max1 = getMax(45, 67, 87, 90, 345, 45, 79);
// const max2 = getMax(1, 4, 6, 7, 9);
// console.log(max1);
// console.log(max2);




// *** 2.Array.from - перетворення псевдомасива в звичайний масив
// function foo() {
//     console.log(arguments);
//     const arr = Array.from(arguments)
//     console.log(arr);
// }
// foo(1, 2, 3);



// *** 3. Стек викликів
// * Стек - це машина, яка виконує наш код
// * Якщо помилка - то стек не звільняється і наступна команда не може зайти
// * Стек обмежений пам'ятю вашого комп'ютера
// console.log('x'); // х потрапив на стек, після виконання х виходить зі стеку, і коли стек порожній, виконається наступна команда
// console.log('2');
// const str = 'Hello';
// console.log(str);

// ===================================================
// * так виглядає робота стеку
// function foo1() {
//     console.log('start1');
//     foo2();
//     console.log('end1');
// }

// function foo2() {
//     console.log('start2');
//     foo3();
//     console.log('end2');
// }

// function foo3() {
//     console.log('start3');
//     foo4();
//     console.log('end3');
// }

// function foo4() {
//     console.log('start4');
//     console.log('end4');
// }

// foo1();
// виведе у консоль наступне:
// start1
// start2
// start3
// start4
// end4
// end3
// end2
// end1



// *** 4. Рекурсія
// * При створенні рекурсії обов'язково повинна бути умова виходу
// function foo() {
//     console.log('start');
//     foo();
//     console.log('end');
// }
// foo() // якщо тут викликати функцію, то вона буде викликати саму себе, після кожного консоля

// ==============

// let counter = 0;
// function foo() {
//     console.log(++counter);
//     foo();
// }
// foo(); // в мене на компі на 10473 виклику стек переповнився

// =============

// let counter = 0;
// function foo() {
//     console.log(++counter);
//     if (counter < 100) foo(); // вказали умову
// }
// foo(); // в мене на компі на 10473 виклику стек переповнився

// =====================

// * Послідовність Фібоначчі
function fibo(n) { // n - це індекс исла, якого хочу повернути

} 
