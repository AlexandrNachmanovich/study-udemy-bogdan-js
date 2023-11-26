/** ЗАДАЧА 8 - Присваивание функции переменной
 *
 * 1. Объявите переменную и присвойте ей функциональное выражение
 *
 * 2. У функции должен быть один параметр "name"
 *
 * 3. Верните из функции строку "Привет, <name>"
 *
 * 4. Вызовите функцию дважды с разными аргументами
 *
 * 5. Результат вызовов функции выведите в консоль
 */

// Variant 1
let fn = function (name) {
  console.log(`Hello, ${name}`)
};

fn('Kostya');
fn('Timur');

// Variant 2
let fun = function (name) {
  return 'Hello, ' + name;
}
console.log(fun('Sasha'));
console.log(fun('Huyasha'));
