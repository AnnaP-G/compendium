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
// *** 6. Властивості навігації по DOM-вузлах
// *** 7. Властивості елемента
//        * textContent
//        * value
// *** 8. Атрибути
//      * getAttribute
//      * setAttribute
//      * removeAttribute
//      * hasAttribute
// *** 9. Data-атрибути
//        * dataset




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




// *** 6. Властивості навігації по DOM-вузлах
// ** parentElement - звернення до батька
// ** firstElementChild - звернення до першої дитини (перший елемент)
//    firstChild - звернення до першої дитини (текстовий вузол)
// ** lastElementChild - звернення до останньої дитини (останній елемент)
//    lastChild - звернення до останньої дитини (текстовий вузол)
// ** children - виведе псевдомасив li
// ** nextElementSibling - правий сусід
//    nextSibling - правий сусід (текстовий вузол)
// ** previousElementSibling - лівий сусід
// ** previousSibling - лівий сусід (текстовий вузол)


// в ul:
// батько - body
// h1 - лівий сусід
// input- правий сусід
// діти - li

// const ulElem = document.querySelector('#categories');
// console.log(ulElem.parentElement); // виведе body

// console.log(ulElem.firstElementChild); // виведе першу li
// console.log(ulElem.firstChild); // виведе #text (текстовий вузол - пробіли, перенесення рядка)


// console.log(ulElem.lastElementChild); // виведе першу li
// console.log(ulElem.lastChild); // виведе #text (текстовий вузол - пробіли, перенесення рядка)

// console.log(ulElem.children[2]); // виведе псевдомасив li (без текстових вузлів)

// console.log(ulElem.nextElementSibling); // виведе input, правого сусіда
// console.log(ulElem.nextSibling); // виведе  #text (правий текстовий вузол)

// console.log(ulElem.previousElementSibling); // виведе h1
// console.log(ulElem.previousSibling); // виведе #text



// *** 7. Властивості елемента
// const imgElem = document.querySelector('.img-wood');
// console.log(imgElem.src); // так звертатись до властивості об'єкта погано
// imgElem.src = '#'; // так зінювати властивість погано
// console.log(imgElem.src);

// ** textContent
// const heroTitleElem = document.querySelector('.hero')
// heroTitleElem.textContent = 'New Header';

// ** value
// const inputElem = document.querySelector('.js-test');
// inputElem.value = 'hello';




// *** 8. Атрибути
/*
 * - get(ім'я-атрибута) // отримати значення атребута
 * - set(ім'я-атрибута) // змінити/додати значення атребута
 * - remove(ім'я-атрибута) // видалення трибута
 * - has(ім'я-атрибута) // перевірити чи наявний атрибут
*/

// ** getAttribute
// const imgEl = document.querySelector('.img-wood')
// console.log(imgEl.getAttribute('src'));
// console.log(imgEl.getAttribute('class'));
// console.log(imgEl.getAttribute('width'));
// console.log(imgEl.getAttribute('hello')); // виведе null

// ** setAttribute
// imgEl.setAttribute('src', '#'); // змінить/ додасть атрибут

// ** removeAttribute
// imgEl.setAttribute('hello', 'hello world');
// imgEl.removeAttribute('hello world');

// ** hasAttribute
// const butEl = document.querySelector('.js-btn1')
// console.log(butEl.hasAttribute('disabled')); // виведе true




// *** 9. Data-атрибути
// ** dataset // об'єкт в якому зберігаються створені атрибути
// ** Якщо це власний атрибут, вигаданий, який не існує в HTML, має починатись з data
const actions = document.querySelectorAll('button');
const firstBtnEl = actions[0];
// console.log(firstBtnEl.getAttribute('data-action')); // перший варіант отримати значення атрибута
// console.log(firstBtnEl.dataset); // другий варіант, виведе об'єкт атрибутів
console.log(firstBtnEl.dataset.action);
console.log(firstBtnEl.dataset.id);
console.log(firstBtnEl.dataset.style);
console.log(firstBtnEl.dataset.type);
