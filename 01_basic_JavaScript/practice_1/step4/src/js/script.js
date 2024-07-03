
/* 
Практика №4 "ОБъекты"

1) У нас есть рабочее приложение, состоящее из отдельных функций! У нас стоит задача переписать его так,
чтобы все функции стали методами объекта personalMovieDB.

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно fals - оно преключает его в true, если true - то перключает его в false. Протестировать вместе с showMyDB 

3) В методе writeYourGenres запретить пользователю "нажимать кнопку отмены" или оставлять пустую строку. Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены при помощи метода forEach вывести сообщения в консоль в таком виде:
"ЛЮбимый жанр №(номер по порядку, начиная с 1)- это (название массива)"

*/

"use strict"

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +("Сколько фильмов вы уже посмотрели?", '');
        }

    },
    
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const film = prompt('Один из последних просмотренных фильмов?', '').trim(),
            star = prompt('На сколько его оцените?', '');

            if (film != null && star != null && film != '' && film.length < 50) {
                personalMovieDB.movies[film] = star;
                console.log('Done!');
            } else {
                console.log('error');
                i--;
            }     
        }
    },

    detectedPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log('Просмотренно мало фильмов!');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель!");
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман!');
        } else {
            console.log('Произошла ошибка!');
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`).toLocaleLowerCase();
            console.log(genre);

            if (genre === null || genre === '') {
                console.log('Вы ввели некорректные данные или не ввели данные вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};


personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectedPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB(personalMovieDB.privat);