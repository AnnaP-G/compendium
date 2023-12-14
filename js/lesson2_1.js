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



// ** ============== Задачі ====================

//  Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
//  рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
//  то виводь рядок "14 г.", без хвилин.


const minutes = 
if (minutes === 0) {
    console.log('14 г');
} else

