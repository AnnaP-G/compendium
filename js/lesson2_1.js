//     * If
//     * if в функції
//     * if ... else
//     * if ... else ... if
//     * Тернарний оператор
//     * switch




// *** Розгалуження

// *** 1. If - якщо очікуємо виконання однієї умови true || false

// Якщо(if), в круглих дужках передаємо умову(якесь питання),
// ця умова завжди має повертати true || false

// const x = 10;
// if (x > 20) {
//     console.log('ok');
// }
// console.log('end');

// - в цьому коді ми питаємо, чи х > 20, якщо true,
// - то виконається тіло блоку if і повернеться ok, якщо false,
// - то if не виконається і повернеться end.




// ** ============= Задача ============
// Перевірити пароль користувача

// наші дії:
// - створюємо змінну userPassword - це пароль, який збережений в нас на сайті
// - просимо юзера ввести пароль і зберігаємо його в змінну userValue
// - задаємо умову if (userPassword === userValue), якщо збережений пароль відповідає введеному паролю, то
// - виконай тіло if (запиши введений пароль в змінну userValue, зроби порівняння) і виведи Hello User console.log('Hello User')

// const userPassword = '12345678';
// const userValue = prompt('Enter password');
// if (userPassword === userValue) {
//     console.log('Hello User');
// }




// *** 2. if в функції
// * перевіряємо пароль користувача за допомогою if в функції

// наші дії:
// - функція checkUserPassword приймає змінну, яку ми придумали - userPassword, куди запишеться те, що введе юзер
// - створюємо змінну password зі збереженим паролем
// - задаємо умову  if (userPassword === password), якщо введений пароль відповідає збереженому паролю, то
// - виконай тіло if (запиши введений пароль в змінну userPassword, зроби порівняння) і виведи ok console.log('ok').
// - викликаємо функцію checkUserPassword('Admin') і передаємо їй значення наприклад Admin (це те, що ввів юзер, Admin записався у змінну userPassword), відповідно тіло if не виконається, бо паролі не співпадають.

// function checkUserPassword(userPassword) {
//     const password = '12345678'
//     if (userPassword === password) {
//         console.log('ok');
//     }
// }

// checkUserPassword('Admin')



// ** =========== Задача =============
// * Щоб функція повертала повідомлення це Admin чи не Admin

// function getMessageForAdmin(login) {
//     if (login === "Admin") {
//         return 'Hello Admin';
//     }
//     return 'Hello User';
// }
// const message = getMessageForAdmin('user1');
// console.log(message);

// - створюєм функцію getMessageForAdmin, яка приймає змінну login(те, що введе користувач)
// - задаємо умову щоб login === "Admin"
// - якщо це так, то поверни Hello Admin
// - а якщо ні, то поверни Hello User
// - викликаємо функцію, створивши для неї змінну, і передаємо їй якийсь логін
// - виводимо результат через консоль
// - тут можна обійтись без else, бо return так чи інакше спрацює

// ================================================================



// *** 3. if ... else
// - для виконання однієї з двох умов (або одна, або інша)
// - якщо ми не перериваємо вункцію return, то потрібен else, в тіло якого ми перенесемо значення друго return, бо
// - якщо в попередньому коді два return замінити на console.log, то іункція виведе обидва результати

// const isAdmin = true;

// if (isAdmin) {
//     console.log('Hello Admin');
// } else {
//     console.log('Hello User');
// }

// - тут функцію не перериваємо return, тому якщо if не виконається, то виконай тіло else

// =====================================================================



// *** 4. if .... else .... if
// - для перевірки багатьох умов

// const salary = 2500;
// if (salary > 3000) {

// } else if (hascoockies) {

// } else if () {

// }


// ** =========== Задача ==============

// const points = 5000;

// < 500 LVL1
// < 1000 LVL2
// < 2500 LVL3
// < 5000 LVL4

// if (points <= 500) {
//     console.log('LVL1');
// } else if (points <= 1000) {
//     console.log('LVL2');
// } else if (points <= 2500) {
//     console.log('LVL3');
// } else if (points < 5000) {
//     console.log('LVL4');
// } else {
//     console.log('MAX LVL');
// }

// - перевіряється кілька умов
// - останнє else для того, якщо не виконається жодна умова, то виведеться тіло блоку else

// - це все можна огорнути в функцію і при її виклику передавати аргументи в points

// function getLVL(points) {
//     if (points <= 500) {
//     console.log('LVL1');
// } else if (points <= 1000) {
//     console.log('LVL2');
// } else if (points <= 2500) {
//     console.log('LVL3');
// } else if (points < 5000) {
//     console.log('LVL4');
// } else {
//     console.log('MAX LVL');
// }
// }
// getLVL(100);


// ====================================================




// *** 5. Тернарний оператор

// *- використовується там, де треба швидко перевірити просту умову

// - це звичайний запис перевірки однієї умови:
// const balance = 1000;
// let message; // придумали змінну для збереження відповіді
// if (balance >= 0) {
//     message = 'Positive';
// } else {
//     message = 'Negative';
// }
// console.log(message);

// =================================


// * - використання тернарного оператора
// const balance = 1000;
// const isPositive = balance >= 0;
// let message = isPositive ? 'Positive' : 'Negative';

// - створює змінну balance, присвоюємо значення
// - створюємо змінну isPositive до якої записали логічний вираз порівняння
// - вираз звучить так: Якщо isPositive = Positive (true), то в message запиши Positive, якщо isPositive = Negative (false), то запиши змінну message Negative

// ==========================================================



// ** ============== Задача ====================

//  *Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
//  рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
//  то виводь рядок "14 г.", без хвилин.

// *це перший варіант коду:
// const hours = 14;
// const minutes = 26;
// let timeString;

// if (minutes === 0) {
//     timeString = `${hours} г.`;
// } else {
//     timeString = `${hours} г. ${minutes}`;
// }
// console.log(timeString);

// ==========================

// * це другий варіант, так, як години в нас використовуються в обох умав,
// * то код можна скоротити, задавши змінній timeString значення за замовчуванням
// * і в умові if поставити заперечення.

// const hours = 14;
// const minutes = 26;
// let timeString = `${hours} г.`;

// if (minutes !== 0) {
//     timeString = `${hours} г. ${minutes} хв.`;
// }

// console.log(timeString);

// ================================

// * та сама задача, але із застосуванням функції

// function getTime(hours, minutes) {
//     let timeString = `${hours} г.`;

//     if (minutes !== 0) {
//         timeString = `${hours} г. ${minutes} хв.`;
//     }
//     return timeString;
// }
// console.log(getTime(14, 26));

// ==========================================================================


// ** ================= Задача =================

// * Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй if...else.

//  * Якщо до дедлайну 0 днів - виведи рядок "Today"
//  * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
//  * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
//  * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"


// const daysUntilDeadline = 5;
// if (daysUntilDeadline === 0) {
//     console.log('Today');
// } else if (daysUntilDeadline === 1) {
//     console.log('Tomorrow');
// } else if (daysUntilDeadline === 2) {
//     console.log('Overmorrow');
// } else {
//     console.log('Date in the future');
// }

// ===============================================



// *** switch - викорисотвується тоді, коли потрібно порівняти одну змінну з різними наченнями

// * Та сама задача, але з використаням switch
// в круглих дужках switch передаємо змінну, яку будемо порівнювати
// в тілі switch передаємо з чим будемо порівнювати
// читається так: якщо дорівнює ), то зроби console.log('Today');
// обовязково ставимо вкінці break, щоб вийти з умови

// const daysUntilDeadline = 5;
// switch(daysUntilDeadline) {
//     case 0: console.log('Today'); break;
//     case 1: console.log('Tomorrow'); break;
//     case 2: console.log('Overmorrow'); break;
//     default: console.log('Date in the future');
// }



// ** ======== Задача =============
/*
 * Напиши скрипт перевірки підписки користувача при доступі до контента
 * - Є три типа підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */

// const sub = 'free'; // - це тип підписки

// if (sub === 'free') {
//     console.log(' - ');
// } else {
//     console.log(' + ');
// }

// * інший варіант вирішення цієї ж задачі, але в цьому варіантці JS робить дві перевірки (2 дії)
// const sub = 'free';
// if (sub === 'pro' || sub === 'vip') {
//     console.log(' + ');
// } else {
//     console.log(' - ');
// }

// * вирішення з використанням функції

// function foo1(sub) {
//     if (sub === 'free') {
//     return '-';
// } else {
//     return '+';
// }
// }
// console.log(foo1('vip'));

// * з використанням тернарного оператора
// function foo1(sub) {
//     return sub === 'free' ? '-' : '+'
// }

// console.log(foo1('free'));

// * Функція calculateTotal(number) приймає ціле число (параметр number). 
// Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно.
// Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6. * /

// let end = 100;
// let total = 0;

// while (end >= 1) {
//     total += end;
//     end -= 1;
// }
// console.log(total);

// створюємо змінну end - з якимось початковим числом
// створюємо змінну total - яка буде рахувтаи
// while - поки змінна end >= 1