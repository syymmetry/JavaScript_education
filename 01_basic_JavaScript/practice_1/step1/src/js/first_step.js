"use strict"

let persnalMovieDB = {
    count: 0,
    movies: {},
    actors: [],
    genres: [],
    privat: false,
    start: () => {
        persnalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (persnalMovieDB.count == '' || persnalMovieDB.count == null || isNaN(persnalMovieDB.count)) {
            persnalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }

    }
}