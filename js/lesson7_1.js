// *     1. BOM
// *     2. DOM
// *     3. Document
// *     4. Типи елементів в DOM дереві
// *     5. Пошук елементів в DOM дереві
//          * querySelector
//          * querySelectorAll
//          * getElementById
//          * getElememtsByNyme
//          * getElementsByClassName
//          * getElementsByTagName
// *     6. Властивості навігації по DOM-вузлах
// *     7. Властивості елемента
//          * textContent
//          * value
// *     8. Атрибути
//          * getAttribute
//          * setAttribute
//          * removeAttribute
//          * hasAttribute
// *     9. Data-атрибути
//          * dataset
// *     10. classList
//          * add
//          * remove
//          * toggle
//          * replace
//          * contains
// *     11. Style інлайн стилі
// *     12. Створення розмітки
//          * createElement
//          * append
//          * prepend




// *     1. BOM - Browser Object Model - window

// ** Методи браузера:
// window.alert();
// window.prompt();
// window.location();




// *     2. DOM - Document Object Model -
// * це об'єктне представлення нашої HTML структури

// * html parser вбудований посередник в браузері,
// який передає інфу з js в браузер і навпаки




// *     3. Document - це об'єкт у вигляді дерева. Його створює парсер

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




// *     4. Типи елементів в DOM дереві:

// ** Вузли-елементи (element node) - утворюються тегами,
// зазвичай одні елементи вкладені в інші.
// Структура дерева утворена виключно за рахунок них.

// ** Текстові вузли (text node) - утворюються текстом всередині елементів.
// Текстовий вузол містить тільки рядок тексту й не може мати дочірніх елементів,
// тобто він завжди на найнижчому рівні ієрархії.
// Пробіли й перенесення рядків — це також текстові вузли

// ** Коментар - це частина коду, яка не впливає на відображення веб - сторінки,
// але призначена для розміщення інформації для розробників або командної роботи.





// *     5. Пошук елементів в DOM дереві
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




// *     6. Властивості навігації по DOM-вузлах
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



// *     7. Властивості елемента
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




// *     8. Атрибути
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




// *     9. Data-атрибути
// ** dataset // об'єкт в якому зберігаються створені атрибути
// ** Якщо це власний атрибут, вигаданий, який не існує в HTML, має починатись з data
// const actions = document.querySelectorAll('button');
// const firstBtnEl = actions[0];
// console.log(firstBtnEl.getAttribute('data-action')); // перший варіант отримати значення атрибута
// console.log(firstBtnEl.dataset); // другий варіант, виведе об'єкт атрибутів
// console.log(firstBtnEl.dataset.action);
// console.log(firstBtnEl.dataset.id);
// console.log(firstBtnEl.dataset.style);
// console.log(firstBtnEl.dataset.type);




// *     10. classList
//          * add - додає клас
//          * remove - видаляє клас
//          * toggle - перемикач
//          * replace - замінює один клас на інший
//          * contains -  перевірить клас на наявність

// * add
// const liElem = document.querySelector('.item');
// liElem.classList.add('link-curent', 'text-decor'); // лішка стала фіолетовою і підкресленою, бо в css прописаний такі стилі до класу link-curent і text-decoration
// console.log(liElem);

// * remove
// liElem.classList.remove('text-decor'); // видалила клас, лішка перестала бути підкресленою

// * toggle
// setInterval(() => {
//     liElem.classList.toggle('text-decor'); // кожну секунду буде підкреслення вмикатись і вимикатись
// }, 1000);

// * replace
// liElem.classList.add('test');
// liElem.classList.replace('test', 'test1') // замінить на test1

// * contains
// console.log(liElem.classList.contains('test3')); // виведе false




// *     11. Style інлайн стилі
// const heroTitleElem = document.querySelector('.hero');
// heroTitleElem.style.fontSize = '80px';
// heroTitleElem.style.color = 'green';





// *     12. Створення розмітки
// * createElement
// * append - додає елемент в кінець (наприклад в div додасть після 5 заголовків)
// * prepend - додає елемент на початок
// const myElem = document.createElement('h1'); // створить <h1></h1>
// myElem.textContent = 'Hello Wood'; // додасть текст заголовку
// console.log(myElem);
// ==================================

// * створили 10 h1 зі стилями і додали їх в масив
// const arr = [];
// for (let i = 0; i < 10; i++) {
//     const myElem = document.createElement('h1');
//     myElem.textContent = 'Hello Wood';
//     myElem.classList.add('bold');
//     myElem.style.color = 'tomato';
//     arr.push(myElem);
// }
// * console.log(arr); //
// ==================================

// * створили h1 зі стилями і додали його в розмітку
// const myElem = document.createElement('h1');
// myElem.textContent = 'Hello Wood';
// myElem.classList.add('bold');
// myElem.style.color = 'blue';
// myElem.style.textDecorationLine = 'underline';
// const boxElem = document.querySelector('.js-box-hero');
// console.log(boxElem);
// boxElem.append(myElem);
// ==================================

// * створили циклом 5 h1 зі стилими і додали їх в розмітку
// const arr = [];
// for (let i = 0; i < 5; i++) {
//     const myElem = document.createElement('h1');
//     myElem.textContent = 'Hello Wood';
//     myElem.classList.add('bold');
//     myElem.style.color = 'blue';
//     myElem.style.textDecorationLine = 'underline';
//     arr.push(myElem);
// }
// console.log(arr);

// const boxElem = document.querySelector('.js-box-hero');
// boxElem.append(...arr); // метод spred висипав всі елементи масиву в розмітку, можна було передавати їх всі через кому

// * створили картинку  зі стилями і додали її в розмітку
// const boxElem = document.querySelector('.js-box-hero');
// const imageEl = document.createElement('img');
// imageEl.setAttribute(
//     'src',
//     './img/460f7ca4255426bff51e887ff99fa654.jpeg',
// )
// imageEl.style.width = '300px';
// imageEl.style.height = '200px';
// boxElem.append(imageEl);
// ==================================

// * перетворюємо масив картинок на масив елементів
// 1. методом map перетворили масив на масив елементів
// 2. в змінну elem записли виконання функції, тобто img
// 3. додали атрибути setAttribute
// 4. return повернули елементи elem
// 5. вивели в консоль result
// 6. додали в розмітку всі елементи
// const images = [
//     'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg',
//     'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg',
//     'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg',
//     'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg',
//     'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg',
//     'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg',
//     'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg',
//     'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg',
// ]
// const result = images.map((url) => {
//     const elem = document.createElement('img');
//     elem.setAttribute('src', url);
//     return elem;
// });
// console.log(result);
// boxElem.append(...result);
// ======================================

// * Створення колекції елементів
const options = [
    { label: 'червоний', color: '#F44336' },
    { label: 'зелений', color: '#4CAF50' },
    { label: 'синій', color: '#2196F3' },
    { label: 'сірий', color: '#607D8B' },
    { label: 'рожевий', color: '#E91E63' },
    { label: 'індіго', color: '#3F51B5' },
]   


function colorTemplate(obj) {
    const label = obj.label;
    const color = obj.color;

    return `<div class="color-card">
            <div class="box" style="background-color: ${color}"></div>
            <p>${label}</p>
        </div>`;
}
const result = colorTemplate({ label: 'hello', color: 'blue' });
console.log(result);
