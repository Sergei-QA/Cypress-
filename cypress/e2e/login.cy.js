describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); //зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
         cy.get('#loginButton').click(); //нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверил что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); //проверил что текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя


     })

     it('не верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
        cy.get('#pass').type('iLoveqastudio13'); //Ввели НЕправильный пароль
        cy.get('#loginButton').click(); //нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверил что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //проверил что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя
     })

     it('Верный пароль и не верный логин', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#mail').type('german@dolnikova.ru'); //ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').click(); //нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверил что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //проверил что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя
     })

     it('Верный пароль и Ввести логин без @', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); //ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').click(); //нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверил что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //проверил что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя
     })
     it('Верный пароль и проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввели верный логин со строчными буквами
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').click(); //нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверил что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //проверил что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя
     })
     it('проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').click(); //нашли поле забыли пароль и нажали
        cy.get('#mailForgot').type('german@dolnikov.ru'); // нашли поле имейл и ввели правильный имейл
        cy.get('#forgotForm > .header').contains('Восстановите пароль');
        cy.get('#forgotForm > .header').should('be.visible'); //проверил что текст виден пользователю
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); // проверил что крестик виден пользователю
        cy.get('#restoreEmailButton').should('be.visible'); //проверил что есть копка отправить код
        cy.get('#restoreEmailButton').click(); //нажал на кнопку отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail') //проверил что присутствует текст
        cy.get('#messageHeader').should('be.visible');//проверил что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверил что крестик виден пользователю
     })


 })
 