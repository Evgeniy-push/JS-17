'use strict';
document.addEventListener('DOMContentLoaded', () => {

    let     adv = document.querySelector('.adv'),
            body = document.querySelector('body'),
            books = document.querySelector('.books'),
            book = document.querySelectorAll('.book'),
            book4A = book[4].querySelector('a'),
            book2Ul = book[0].querySelector('ul'),
            book2Li = book[0].querySelectorAll('li'),
            book5Ul = book[5].querySelector('ul'),
            book5Li = book[5].querySelectorAll('li'),
            book6Ul = book[2].querySelector('ul'),
            book6Li = book[2].querySelectorAll('li'),
            newLi = document.createElement('li');

            console.log('adv: ', adv);
            console.log('body: ', body);
            console.log('books: ', books);
            console.log('book: ', book);
            console.log('book4A: ', book4A);
            console.log('book2Ul: ', book2Ul);
            console.log('book2Li: ', book2Li);
            console.log('book5Ul: ', book5Ul);
            console.log('book5Li: ', book5Li);
            console.log('book6Ul: ', book6Ul);
            console.log('book6Li: ', book6Li);
            console.log('newLi: ', newLi);

            adv.style.display = 'none';
            books.append(book[2]);
            book[0].before(book[1]);
            book[3].before(book[4]);
            body.style.backgroundImage = 'url("./image/you-dont-know-js.jpg")';
            book4A.innerText = 'Книга 3. this и Прототипы Объектов';
            book2Li[4].before(book2Li[6]);
            book2Li[10].before(book2Li[2]);
            book2Li[4].before(book2Li[8]);
            book5Li[2].before(book5Li[9]);
            book5Li[6].before(book5Li[2]);
            book5Li[8].before(book5Li[5]);
            newLi.textContent = 'Глава 8: За пределами ES6';
            book6Li[9].before(newLi);

});