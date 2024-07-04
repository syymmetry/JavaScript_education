/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

// методы удаления элементов со страницы:

adv.forEach(item => {   // самый предпочтительный
    item.remove();
});

genre.textContent = 'драма'; // поменять жанр
poster.style.backgroundImage = 'url("img/bg.jpg")'; // 3 задача (поменят фон)

movieList.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i+1} ${film}
        <div class="delete"></div>
    </li>
    
    `
});

//console.log(poster.innerHTML);

/*adv.forEach(function(item){
    item.remove();
});*/

/*for (let i = 0; i < adv.length; i++) {
    adv[i].remove();
}*/

/*for (let item of adv) {
    item.remove();
}*/