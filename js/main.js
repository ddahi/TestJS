// let obj1 = { name: "kami", age: 20, objFunc: { name: "ilika" } };

// let obj2 = obj1;
// obj2 = { ...obj1 };
// obj2.name = "aibat";
// console.log(obj1);

// !================деструктуризация===========
// ? это специальный синтаксис который позволяет нам распоковвать массив или объект в несколько переменных

// ? деструктуризация массива
// порядок обязателен

// const array = [100, 200, 300, 400, 500];
// let a =  array[2] раньше так делали мы
// let [a, b, c, d, e] = array;
// console.log(a, b, c, d, e);

// let array2 = ["johm", "mike", "tahi"];
// let { person1, person2, person3 } = array2;
// console.log(person1);

// ? rest operator==========================

// с помощью этого оператора можно получить остаточные значения

// const food = ["eggs", "milk", "bread", "banan", "kaimak"];
// let [item1, item2, ...other] = food;

// console.log(item1, item2, other);

// let num1 = 1;
// let num2 = 2;
// let temp = num1;
// num1 = num2;
// num2 = temp;
// console.log(num1, "num1");
// console.log(num2, "num2");

// let num1 = 1;
// let num2 = 2;
// [num1, num2] = [num2, num1];
// console.log(num1, "num1");
// console.log(num2, "num2");

// let zero = 2;
// let one = 1;
// let two = 0;
// [zero, , two] = [two, , zero];
// console.log(zero);
// console.log(one);
// console.log(two);

// ? деструктуризация объектов

// порядок НЕ обязателен
// let artist = {
//   name: "drake",
//   lastName: "graham",
//   position: "rapper",
// };
// let { name1, lastName, position } = artist;
// console.log(name1);
// console.log(position);
// console.log(lastName);

// ? перезаписываем ключи в переменные
// let artist = {
//   name: "drake",
//   lastName: "graham",
//   position: "rapper",
// };
// let { name: hisName, lastName: hisLastName, position: hisPosition } = artist;
// console.log(hisName, hisLastName, hisPosition);

// ! дуструктуризация строки==============

// let strMain = "makers bootcamp";
// let [str1, str2] = strMain.split(" ");
// console.log(str1, str2);

// ! spread operator (поверхносное копирование) изменения копии не повлияют на оригинал
// let arr1 = ["hello", "bye", "good"];
// let arr2 = ["привет", ...arr1, "пока"];
// console.log(arr2);

// let arr3 = [...arr1];
// console.log(arr3);
// arr3.push("добавили новое знач");
// console.log(arr3);
// console.log(arr1);

// ? конкатинация

// let array1 = [20, 30];
// let array2 = [40, 50];
// [20,30,40,50]

// let newArray = array1.concat(array2);
// console.log(newArray);

// let newArray = [...array1, ...array2];
// console.log(newArray);

// let object1 = { name: "nuku", position: "programmer" };
// let object2 = { name: "ilika", position: "chempion" };
// let resObj = { ...object1, ...array2 };
// console.log(resObj);

// ! JSON.parse() and JSON.stringijy()
// const car1 = {
//   color: "red",
//   name: "mers",
//   details: { model: "kaban", year: 2001 },
// };
// let car2 = { ...car1 };

// car2.color = "black";
// car2.details.year = 2005;
// console.log(car1);
// console.log(car2);

// ? JSON.stringify()   преобразует переданный элемент в строку с форматом JSON. Затем JSON.parse () преобразует его обратно в объект JavaScript, это позволяет выполнять глубокое клонирование и для вложенных объектов, чего не происходит с оператором Spread.

// const car1 = {
//   color: "red",
//   name: "mers",
//   details: { model: "kaban", year: 2001 },
//   sayHello() {
//     console.log("не работает в глубоком копирование");
//   },
// };

// сложный способ
// let car2 = JSON.stringify(car1);
// car2 = JSON.parse(car2);
// console.log(car2);

// проще
// let car2 = JSON.parse(JSON.stringify(car1));
// car2.details.year = 1998;
// console.log(car1);
// console.log(car2);

//! Вложенная деструктуризация
let person = {
  name: "Jack",
  age: 19,
  favoriteFood: ["Lagman", "Manty"],
  pet: {
    name: "Sharik",
    age: 2,
  },
  study: {
    university: "KSTU",
    subjects: ["Math", "Literature"],
    location: {
      str: "Manas str 66",
      city: "Bishkek",
    },
  },
};

//todo get: lagman and manty, sharik, KSTU, Literature, Bishkek, mail index

let {
  name,
  favoriteFood: [lagman, manty],
  pet: { name: Sharik },
  study: {
    university,
    subjects: [, litra],
    location: { city, index = 2222 },
  },
} = person;

console.log(name, lagman, manty, Sharik, university, litra, city, index);
