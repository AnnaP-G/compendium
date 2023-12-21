// *** 1. Масиви
// *** 2. join метод
// *** 3. split метод
// *** 4. slice метод
// *** 5. concat метод
// *** 6. indexOf / lastIndexOf методи
// *** 7. push / pop методи
// *** 8. shift / unshift методи
// *** 9. splice метод
// *** 10. Ітерація по масиву (перебирання)





// ** Створення масиву:
// const myBox = [10, 20, 30]; // в масиві 3 числа
// console.log(myBox);



// ** Елементи в масиві мають індекси, початок з 0
// ** Звернення до елемента:
// const myBox = [10, 20, 30];
// myBox[0];
// console.log(myBox[0]); // виведе 10



// ** Звернення до неіснуючого елемента виведе undefined



// ** Заміна елемента в масиві:
// const arr = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// arr[2] = 'test';
// console.log(arr);

// ** Якщо замінювати елемент в масиві, якого ще немає, то його створить
// * наприклад, довжина масиву 5, а ми звертаємось до 10, то довжина масиву стане 11
// const arr = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// arr[10] = 'Good';
// console.log(arr);



// ** Довжина масиву - .lenght
// const arr = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// arr[10] = 'Good';
// console.log(arr)
// const myLenght = arr.length;
// console.log(myLenght);



// ** Індекс останнього елемента
// const arr = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// const lastIndex = arr[arr.length - 1];
// console.log(lastIndex);



// *** 2. join метод - об'єднує елементи в суцільний рядок
// ** в дужках вказується роздільник
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// const result = courses.join('-')
// console.log(result);



// *** 3. split метод
// * Ділить рядок на масив (переводить рядок в масив)
// * в дужках вказати, по чому різати
// * повертає новий масив
// * якщо дописати length то поверне кількість слів
// const str = 'Hello world, it`s test line with some words';
// const result = str.split(' ').length;
// console.log(result);



// *** 4. slice метод
// * вирізає частину масиву
// * в дужках початковий та кінцевий індекс (не включно)
// * завжди повертає новий масив, навіть порожній
// * якщо пишемо відємні індекси, це рахуємо з кінця
// const arr = [3, 4, 5, 6, 8, 2, 8, 4, 9,];
// const result = arr.slice(5, 7);
// console.log(result);



// *** 5. concat метод
// об'єднує в один масив
// повертає новий масив
// const arr1 = [1, 3, 5, 6, 7];
// const arr2 = [1, 9, 7];
// const arr3 = [8, 9, 0, 5];
// const result = arr1.concat(arr2, arr3)
// console.log(result);

// зазвичай краще створювати відразу порожній масив
// const arr1 = [1, 3, 5, 6, 7];
// const arr2 = [1, 9, 7];
// const arr3 = [8, 9, 0, 5];
// const result = [].concat(arr1, arr2, arr3)
// console.log(result);



// *** 6. indexOf / lastIndexOf методи
// * шукає індекс елемента (строга рівність)
// * виведе перший, який знайшов, навіть якщо є два однакових елемента
// * якщо шукати неіснуючий елемент, видасть -1
// *** lastIndexOf - шукає з кінця
// const arr = [1, 3, 6, 8, 78, 99,];
// const result = arr.indexOf(99);
// console.log(result);



// *** 7. push / pop методи
// * push - кладе в кінець елемент
// * повертає нову довжину масиву
// * в дужках вказується, що покласти, можна писати через кому
// const arr = [];
// arr.push(10, 21, 39);
// arr.push(20);
// arr.push(30);
// console.log(arr);

// * pop - дістає з кінця елемент
// * в дужках нічого не вказувати
// * повертає видалені елементи
// * дістати декілька за раз не можна
// const arr1 = [4,6,8,0,9,3,99];
// const elem = arr1.pop();
// console.log(elem); // виведе 99
// console.log(arr1.pop()); // виведе 3
// console.log(arr1.pop()); // виведе 9
// console.log(arr1.pop()); // виведе 0



// *** 8. shift / unshift методи
// unshift - додає на початок елемент
// const arr = ['test', 'test2', 'test2']
// const result = arr.unshift('Good');
// console.log(arr);
// console.log(result); // поверне кількість елементів

// * shift - видаляє з початку елемент
// * повертає цей елемент
// const arr = ['test', 'test2', 'test2']
// const result = arr.shift();
// console.log(arr);
// console.log(result);



// *** 9. splice метод
// * дозволяє замінити, видалити та додати елементи всередину масиву
// * повертає видалені елементи
// * змінює оригінальний масив
// * в дужках - вказуємо індекс з якого почати і к-ть елементів
// * мінусовий індекс відрахує з кінця
// * словоа start і good вставить на місце видалених елементів
// const arr = [2, 5, 7, 8, 9,];
// const result = arr.splice(0, 3, 'start', 'Good');
// console.log(arr);
// console.log(result);



// *** 10. Ітерація по масиву (перебирання)
// * виклом for
// const arr = [1, 4, 67, 7, 5, 4, 3, 2];
// for (let i = 0; i <= 7; i++) {
//     console.log(arr[i]);
// }

// * виклом for of
// const arr = [1, 4, 67, 7, 5, 4, 3, 2];
// for (let elem of arr) {
//     console.log(elem);
// }




// =========== Задача ============

//  * Напиши скрипт для обчислення площі прямокутника зі сторонами,
//  * значення яких зберігаються у змінній values у вигляді рядка.
//  * Значення гарантовано розділені пробілом.
// const values = '8 11';
// const result = values.split(' ');
// const a = Number(result[0]);
// const b = Number(result[1]);
// console.log(a * b);



//  * Напиши скрипт для перебору масиву fruits.
//  * Для кожного елемента масиву виведи в консоль рядок
//  * у форматі номер_елемента: значення_елемента.
//  * Нумерація елементів повинна починатися з 1.
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for (let i = 1; i < fruits.length; i++) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }
