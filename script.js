// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// let i = 0;

// while (i < 2) {
//     const movie = prompt('Один из последних просмотренных фильмов?'),
//         rate = prompt('На сколько его оцените?');
//     if (movie.trim() != '' && movie != null && rate != null && rate.trim() != '' && movie.length <= 50) {
//         console.log('Success');
//         personalMovieDB.movies[movie] = rate;
//         i++;
//     } else {
//         console.log('Error');
//         i--;
//     }
// }

// for (let i = 0; i < 2; i++) {
//     const movie = prompt('Один из последних просмотренных фильмов?'),
//         rate = prompt('На сколько его оцените?');
//     if (movie.trim() != '' && movie != null && rate != null && rate.trim() != '' && movie.length <= 50) {
//         console.log('Success');
//         personalMovieDB.movies[movie] = rate;
//     } else {
//         console.log('Error');
//         i--;
//     }
// }

// console.log(personalMovieDB);

// if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов!');
// } else if (personalMovieDB.count < 30) {
//     console.log('Вы классический зритель!');
// } else if (personalMovieDB.count >= 30) {
//     console.log('Вы - киноман!');
// } else {
//     console.log('Произошла ошибка');
// }


// const num = 50;
// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('В точку!');
//         break;
//     default:
//         console.log('Не в этот раз!');
//         break;
// }


// // Метки в JS
// label:
//     for (let i = 0; i < 10; i++) {
//         if (i == 5) {
//             break label;
//         }
//         console.log(i);
//     }
//     // Этот код будет печатать числа от 0 до 4, но не будет печатать 5.

// console.log('1');

// const variable = '12.2pdsx';
// console.log(parseInt(variable));
// console.log(parseFloat(variable));


// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     address: {
//         city: "New York",
//         country: "USA",
//         postalCode: "10001"
//     }
// };

// let { country, postalCode } = person.address; //Destructure
// console.log(country);
// console.log(postalCode);


// const obj = {
//     a: 5,
//     b: 1,
//     c: {
//         car: 'Honda',
//         color: 'black'
//     }
// };

// // Function of making copy of simple object 
// function makeCopySimpleObj(item) {
//     const newObj = {};

//     for (let key in item) {
//         newObj[key] = item[key];
//     }

//     return newObj;
// }


// // Function of making copy of heavy object 
// function makeCopyHeavyObj(item) {
//     const newObj = Object.assign({}, item);

//     return newObj;
// }

// let newArr = makeCopyHeavyObj(obj);
// console.log(obj);
// newArr.c.car = 'Odyssey'
// console.log(newArr);

// arr = [1, 2, 65, 43, 99];

// // Method of creating the copy of array
// cloneArrFirst = arr.slice();
// cloneArrFirst[4] = 100;
// cloneArrFirst[1] = 60;
// console.log(arr);
// console.log(cloneArrFirst);

arr = [1, 3, 6, 8, 10];
newArr = [...arr, 2]; // Created the copy of array by spread operator
newArr[2] = 16;
console.log(arr);
console.log(newArr);