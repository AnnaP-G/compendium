// *         1. slice метод
// *         2. startWidtg / endsWidth метод
// *         3. indexOf / lastIndexOf метод
// *         4. trim метод
// *         5. replace / replaceAll метод
// *    **** Методи можна писати ланцюгом, але треба ливтись, що повертає попередній метод
// *         6. for цикл
// *         7. while цикл
// *         8. do while цикл
// *         9. break
// *         10. continue




// *** 1. Метод slice
// * дозволяє порізати рядок, вказавши початоковий індекс і кінцевий не включно
// * повертає новий рядок, тому його треба зберігати в якусь змінну
// * якщо не вказати кінцевий індекс, то виріже до кінця
// * можна вказати від'ємні значення, то відрізати буде з кінця
// const userName = 'Jacob Merser';
// const result = userName.slice(2, 5); // виріже з 2 по 5 (не включно) індекси
// console.log(result);



// *** 2. Метод startWidth / endsWidth
// * Повертає true || false
// * Можна вказувати з якого індексу починати шукати
// .startsWith('099', 3) // +38099 буде шукати з третього символу

// Хочемо перевірити чи починається номер користувача з + 380
// Просимо його ввести номер
// Запускаємо перевірку if
// Довгі умови в if краще не писати, а створити для цього знімнну
// А вже в if внести результат перевірки
    
// const phoneNumber = prompt('Enter your phone number');
// const isCorrectNumber = phoneNumber.startsWith('+380')
// const isCorrectNumberEnd = phoneNumber.endsWith('!')
// if (isCorrectNumber && isCorrectNumberEnd) {
//     console.log('ok');
// } else {
//     console.log('Sorry, error!');
// }




// *** 3. Метод indexOf / lastIndexOf
// * Зупиняється на першому знайденому
// * Якщо не знаходить, повертає -1
// const str1 = 'Hello World';
// const str2 = ' '; // шукаємо пробіл в str1
// const index = str1.indexOf(str2);
// console.log(index); // виведе індекс елемента, який шукаємо

// ============================

// const str1 = 'Hello World';
// const str2 = ' '; // шукаємо пробіл в str1

// const index = str1.indexOf(str2, 6); // тут 6 - це індекс з якого почати шукати
// const newWord = str1.slice(index + 1); // відріже слово починаючи з індексу після пробіла
// console.log(newWord);

// * lastIndexOf - знаходить необхідний індекс з кінця




// *** 4. метод trim
// * Видаляє на початку, або в кінці зайві пробіли і перенесення рядків
// const userName = '     Max    ';
// const result = userName.trim();
// console.log(result);

// * щоб не писати зайві змінні, можна зробити так:
// const userName = '     Max    '.trim();
// console.log(userName);

// * або так:
// const userName = prompt('Enter your name').trim();
// console.log(userName);




// *** 5. Метод replace / replaceAll
// const str = ' awd  awd  awd  a . a . ';
// const newStr = str.replace('awd', 'Hello'); // в дужка - що замінити і на що замінити
// console.log(newStr);

// const str = ' awd   awd   awd a . a . ';
// const newStr = str.replaceAll('awd ', 'Cood'); // тут міняю awd разом з пробілом на Good
// console.log(newStr);

// ** ============== Задачв =====================
//  * Напиши скрипт який перевіряє чи закінчується значення
//  * змінної link символом /. Якщо ні, додай до кінця
//  * значення link цей символ.
//  * Використовуй конструкцію if...else.
//  */

// let link = 'https://my-site.com/about';
// const isCorrectLink = link.endsWith('/');
// if (!isCorrectLink) {
//     link += '/';
// }
// console.log(link);

// ** ============= Задачв ====================
//  * Форматування посилання (includes та логічне «І»)
//  * Напиши скрипт який перевіряє чи закінчується значення змінної link символом
//  * Якщо ні, додай до кінця значення link цей символ, але тільки в тому випадку,
//  * якщо в link є підрядок "my-site".
//  * Використовуй конструкцію if...else або тернарний оператор.


// let url = 'https://my-site.com/about';
// const isCorrectEnd = url.endsWith('/');
// const hasMySite = url.includes('my-site')
// if (!isCorrectEnd && hasMySite) {
//     url += '/';
// }
// console.log(url);

// ** ============= Задачв ====================
// * Пошук у рядку методом includes()
// const blacklistedWord1 = 'spam';
// const blacklistedWord2 = 'sale';
// const string1 =
//   "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
// const string2 = "Biggest SALE this week, don't miss out!";
// const string3 = '#fatlivesmatter advertising campaign';

// string1.toLowerCase().includes(blacklistedWord1) ||
// string1.toLowerCase().includes(blacklistedWord2);




// *** 6. Метод for
// * Прописуємо ініціалцізацію:
//* let i = 0 // стартуємо з 0;
//* i < 20 // задаємо умову, скільки разів робити якусь дію,
// повертає true || false, поки умова true - дія буде виконуватись
//* i++ //
//* { } // це і є інструкція, яка буде виконуватись.
// якщо написати console.log, то це виконається 19 разів (бо i<20)
// for (let i = 0; i < 20; i++) {
// console.log(i);
// }


// * Вивести кожну літеру в консоль окремо
// const str = 'HELLO WORLD';
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }


// * for (let i = 0; i < 20; i += 2) // i += 2 виведе через один
// console.log(i);

// for (let i = 10; i > 0; i -= 1) { // виведе в зворотньому порядку
//     console.log(i);
// }

// ** =============== Задача ==================
// * Просимо юзера ввести 5 чисел:
// let total = 0; // змінна куд буде записуватись результа
// for (let i = 0; i < 5; i++) {
//     const num = Number(prompt('Enter number')); // відразу приводимо до числа те, що введе юзер
//     total += num;
// }

// console.log(total);




// *** 7. Цикл while
// * в () - умова, до якого часу виконувати операцію,
// * кількість ітерацій нам невідома

// while () {}

// function myGame() {
//     const random = Math.round(Math.random() * 1000) // генеруємо рандомне число, заокруглене, від 0 до 1000
//     let num; // змінна числа, яке буде вводити юзер

//     while (num != random) {
//         num = +prompt('x = ');
//         if (num > random) {
//             console.log('<');
//         } else {
//             console.log('>');
//         }
//     }
// }
// myGame();

// ============== Задача ===================

// const dreams = 1500; // зп, яку хочеш
// let salary = 1000; // що пропонують

// while (salary < dreams) {
//   console.log('More', salary);
//   salary += 170;
// }
// console.log(salary);

// =============================================


// *** 8. Цикл do while
// ** коли відразу просиш більше, ще до того, як запропонують

// const dreams = 1500; // зп, яку хочеш
// let salary = 1700; // що пропонують

// do {
//     console.log('More', salary);
//     salary += 170;
// } while (salary < dreams)

// ==============================================


// *** 9. break
// ** перериває цикл while & do while

// for (let i = 1; i < 1000; i++) {
//     console.log(i);
//     if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
//         break
//     }
// }




// *** 10. continue
// ** пропускає поточну ітерацію
// в цьому коді пропустить 30-ту ітерацію і перейде з 29 на 31
// for (let i = 1; i <= 50; i++) {
//     if (i % 5 === 0 && i % 6 === 0) continue;
//     console.log(i);
// }