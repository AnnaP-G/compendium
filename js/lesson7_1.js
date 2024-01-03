// *** 1. BOM
// *** 2. DOM
// *** 3. Document
// *** 4. Типи елементів в DOM дереві
// *** 5. Пошук елементів в DOM дереві
//        * querySelector
//        * querySelectorAll
//        * getElementById
//        * getElememtsByNyme
//        * getElementsByClassName
//        * getElementsByTagName
// *** 6. 



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
// ** З пошуку починаємо писати код
// ** Шукаємо в document
// ** Якщо шукаємо неіснуючий елемент, то запишеться null

// *** querySelector - пошук за селектором (за класом, id з css),

// поверне перший знайдений
// працює, як метод fined в масиві
// const elem = document.querySelector('.js-test')
// console.log(elem);

// const elem = document.querySelector('#categories')
// console.log(elem);
// const liElem = elem.querySelector('.item:nth-child(2)'); // пошук за класом, другу лішку, вже не через document
// console.log(liElem);

// *** querySelectorAll - поверне псевдомасив
// const elem = document.querySelector('#categories')
// const liElemes = elem.querySelectorAll('.item')
// console.log(liElemes);

// ** як отримати другу li
// *пошук за класом
// const elem = document.querySelector('#categories')
// const liElemes = elem.querySelectorAll('.item:nth-child(2)')
// console.log(liElemes);

// * пошук за тегом в псевдомасиві
// const elem = document.querySelector('#categories')
// const liElemes = elem.querySelectorAll('.item')
// console.log(liElemes[1]);

// * Перетворюємо псевдомасив на масив
// const elem = document.querySelector('#categories')
// const liElemes = elem.querySelectorAll('.item')
// console.log(Array.from(liElemes)); || console.log(...liElemes);

// *** getElementById
// const idElem = document.getElementById('categories'); // решітка в цьому випадку не пишеться
// console.log(idElem);

// *** getElememtsByNyme
// const idElem = document.getElementsByName('viewport');
// console.log(idElem);

// *** getElementsByClassName
// const idElem = document.getElementsByClassName('js-test');
// console.log(idElem);

// *** getElementsByTagName
// const idElem = document.getElementsByTagName('button');
// console.log(idElem);


