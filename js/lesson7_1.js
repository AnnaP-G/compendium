// *** 1. BOM
// *** 2. DOM
// *** 3. Document
// *** 4. Типи елементів в DOM дереві
// *** 5. Пошук елементів в DOM дереві

// *** 1. BOM - Browser Object Model - window

// ** Методи браузера:
// window.alert();
// window.prompt();
// window.location();




// *** 2. DOM - Document Object Model -
// * це об'єктне представлення нашої HTML структури

// * html parser вбудований посередник в браузері,
// який передає інфу з js в браузер і навпаки




// *** 3. Document - це об'єкт у вигляді дерева. Його створює парсер

// ** Структура дерева, яка будується html парсером:
// const document = {
//     html: {
//         head: {
//             meta: {},
//             meta1: {},
//         },
//         body: {
//             p: {
//                 a: {
//                     text: 'Go Back'
//                 }
//             },
//             input: {
//                 value: 'Hello',
//             },
//         },
//     },
// }
// document.html.body.p.a.text = 'Hello World'; // зміна значення, як в ою'єкта
// console.log(document.html.body.p.a.text);

// console.log(document.html.body.input.value); // звернення до значення Hello




// *** 4. Типи елементів в DOM дереві:

// ** Вузли-елементи (element node) - утворюються тегами,
// зазвичай одні елементи вкладені в інші.
// Структура дерева утворена виключно за рахунок них.

// ** Текстові вузли (text node) - утворюються текстом всередині елементів.
// Текстовий вузол містить тільки рядок тексту й не може мати дочірніх елементів,
// тобто він завжди на найнижчому рівні ієрархії.
// Пробіли й перенесення рядків — це також текстові вузли

// ** Коментар - це частина коду, яка не впливає на відображення веб - сторінки,
// але призначена для розміщення інформації для розробників або командної роботи.



// *** 5. Пошук елементів в DOM дереві
// ** З пошуку поичнаємо писати код
// ** Шукаємо в document
// ** Якщо шукаємо неіснуючий елемент, то запишеться null

// *** querySelector - пошук за селектором (за класом, id з css),

// поверне перший знайдений
// працює, як метод fined в масиві
// const elem = document.querySelector('.js-test')
// console.log(elem);

// *  const elem = document.querySelector('#categories')
// console.log(elem);
// const liElem = elem.querySelector('li'); // пошук за елементом, вже не через document
// console.log(liElem);

// *** querySelectorAll - поверне псевдомасив
const elem = document.querySelector('#categories')
const liElemes = elem.querySelectorAll('.item')
console.log(liElemes);