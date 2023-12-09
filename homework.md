 1 уровень сложности: Домашнее задание состоит из двух уровней. 
Основные требования: 
1) Использовать async await для асинхронных запросов
2) Использовать try catch для обработки ошибок

Первый уровень:
Реализовать новостную ленту как на макете
Отправляем запрос на сервер с постами в отдельной функции, которая принимает колбек
запрос: fetch('https://dummyjson.com/posts')


В колбек функции принимает ответ с постами (можно оставить 10 постов) 
проходимся по постам 
for (const post of onlyTenPosts) {}
и у каждого извлекаем id 
вызываем функцию которая фетчит данные пользователя
для этого создаем функцию, которая фетчит данные о пользователе по его id
fetch('https://dummyjson.com/users/1')


в итоге получаем данные от поста: body, reactions
от пользователя: image, username 


вызываем функцию, которая отрисовывает посты вместе с данными о пользователе: showPost with user
использовать для дизайна жтот макет:
https://www.figma.com/file/td31ZH3pTrYi410oCVUgVL/Twitter-UI-Clone-Design-(Community)?node-id=24%3A2027&mode=dev


и этот API:
https://dummyjson.com/docs/users
Figma
Twitter UI Clone Design (Community)
Created with Figma
Изображение
USERS - Dummy REST API of JSON data for
    development
REST Endpoints filled with USERS JSON data to use in developing the frontend without worrying about writing a backend.
Второй уровень:
Создаем форму(можно динамически, можно статически и добавить из запроса нужные данные)
берем одного пользователя(владелец аккаунта)
https://dummyjson.com/docs/users


на форму вешаем событие с отправкой сообщения на сервер(переписать на async await, тело запроса изменить):
в теле запроса id  user’a и body поста 
fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'I am in love with someone.',
    userId: 5,
    /* other post data */
  })
})
.then(res => res.json())
.then(console.log);


макет для домашней работы:
https://www.figma.com/file/td31ZH3pTrYi410oCVUgVL/Twitter-UI-Clone-Design-(Community)?node-id=24%3A2027&mode=dev



Реализовать часть твиттера с разделом посты (скрин приложен)


Делаем запрос на получение всех постов


Получаем из ответа массив постов


Забираем из каждого отдельного поста userId


Получаем по userId имя пользователя, выводим его в качестве User name у твита
В результате у нас выводится информация поста и его пользователя 


В форме добавить комментарий делаем POST запрос на отправление данных формы, ответ получаем и по результату ответа отрисоываем новый пост в ленте


Выводим userName, firstName, image


У поста есть реакции выводим их рядом с сердечками

