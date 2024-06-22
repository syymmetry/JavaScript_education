













//-----------------------------------------------------
/*
 includes()

*/

// База данных комментариев
let comments = [
    "This is a great product!",
    "I hate this!",
    "Amazing service, but the price is too high.",
    "Worst experience ever.",
    "I love this! Highly recommend it."
];

// База данных запрещенных слов
let bannedWords = ["hate", "worst", "high"];

// Функция для фильтрации комментариев
function filterComments(comments, bannedWords) {
    return comments.map(comment => {
        // Разбиваем комментарий на слова для более точного поиска запрещенных слов
        let words = comment.split(" ");
        let filteredWords = words.map(word => {
            // Проверяем каждое слово на наличие в списке запрещенных слов
            if (bannedWords.includes(word.toLowerCase())) {
                return "###";
            }
            return word;
        });
        // Собираем комментарий обратно из слов
        return filteredWords.join(" ");
    });
}

// Вводим новый комментарий от пользователя
let userComment = prompt("Введите ваш комментарий:");

// Добавляем новый комментарий в базу данных комментариев
comments.push(userComment);

// Фильтруем комментарии
let filteredComments = filterComments(comments, bannedWords);

// Выводим отфильтрованные комментарии
console.log("Отфильтрованные комментарии:");
filteredComments.forEach((comment, index) => {
    console.log(`${index + 1}. ${comment}`);
});
