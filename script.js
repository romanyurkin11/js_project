const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const movie1 = prompt('Один из последних просмотренных фильмов?'),
    rate1 = prompt('На сколько его оцените?');

const movie2 = prompt('Второй из последних просмотренных фильмов?'),
    rate2 = prompt('На сколько его оцените?');


personalMovieDB.movies[movie1] = rate1;
personalMovieDB.movies[movie2] = rate2;

console.log(personalMovieDB);



const num = 50;
switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз!');
        break;
}