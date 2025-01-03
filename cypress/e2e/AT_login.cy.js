describe('Проверка формы логина и пароля', function () {

   // 1. Напиши проверку на позитивный кейс авторизаци
    
    it('Верные логин и пароль', function () {  
         cy.visit('https://login.qa.studio/'); // Заходим на сайт
         cy.get('#mail').type ('german@dolnikov.ru'); // Вводим логин
         cy.get('#pass'). type ('iLoveqastudio1'); // Вводим пароль
         cy.get('#loginButton').click(); // Кликает кнопку "войти"
         cy.get('#messageHeader').contains ('Авторизация прошла успешно').should('be.visible'); // Проверяем сообщение и что оно видно пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверяем, что кнопка с крестиком есть и видна пользователю
     })

// 2.Напиши автотест на проверку логики восстановления пароля

     it('Проверка восстановления пароля', function () {  
        cy.visit('https://login.qa.studio/'); // Заходим на сайт
        cy.get('#forgotEmailButton').click(); // Кликаем по кнопку "Забыли пароль?"
        cy.get('#mailForgot').type ('german@dolnikov.ru'); // Вводим эл. почту
        cy.get('#restoreEmailButton').click();  // Нажимаем кнопку "Отправить код"
        cy.get('#messageHeader').contains ('Успешно отправили пароль на e-mail').should('be.visible'); // Проверяем сообщение и что оно видно пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверяем, что кнопка с крестиком есть и видна пользователю
       
    })

// 3. Напиши проверку на негативный кейс авторизации (неправильный пароль)

    it('Верный логин и неверный пароль', function () {  
        cy.visit('https://login.qa.studio/'); // Заходим на сайт
        cy.get('#mail').type ('german@dolnikov.ru'); // Вводим логин
        cy.get('#pass'). type ('idontLoveqastudio1'); // Вводим пароль
        cy.get('#loginButton').click(); // Кликает кнопку "войти"
        cy.get('#messageHeader').contains ('Такого логина или пароля нет').should('be.visible'); // Проверяем сообщение и что оно видно пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверяем, что кнопка с крестиком есть и видна пользователю
    })

    // 4. Напиши проверку на негативный кейс авторизации (неправильный логин)

    it('Неверный логин и верный пароль', function () {  
        cy.visit('https://login.qa.studio/'); // Заходим на сайт
        cy.get('#mail').type ('vasyamutny@mail.ru'); // Вводим логин
        cy.get('#pass'). type ('iLoveqastudio1'); // Вводим пароль
        cy.get('#loginButton').click(); // Кликает кнопку "войти"
        cy.get('#messageHeader').contains ('Такого логина или пароля нет').should('be.visible'); // Проверяем сообщение и что оно видно пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверяем, что кнопка с крестиком есть и видна пользователю
 })

 // 5. Напиши проверку на негативный кейс валидации
    
 it('Верные логин и пароль', function () {  
    cy.visit('https://login.qa.studio/'); // Заходим на сайт
    cy.get('#mail').type ('germandolnikov.ru'); // Вводим логин
    cy.get('#pass'). type ('iLoveqastudio1'); // Вводим пароль
    cy.get('#loginButton').click(); // Кликает кнопку "войти"
    cy.get('#messageHeader').contains ('Нужно исправить проблему валидации').should('be.visible'); // Проверяем сообщение и что оно видно пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверяем, что кнопка с крестиком есть и видна пользователю
})

// 6. Напиши проверку на приведение к строчным буквам в логине

it('Проверка приведения к стросным буквам в логине', function () {  
    cy.visit('https://login.qa.studio/'); // Заходим на сайт
    cy.get('#mail').type ('GerMan@Dolnikov.ru'); // Вводим логин
    cy.get('#pass'). type ('iLoveqastudio1'); // Вводим пароль
    cy.get('#loginButton').click(); // Кликает кнопку "войти"
    cy.get('#messageHeader').contains ('Авторизация прошла успешно').should('be.visible'); // Проверяем сообщение и что оно видно пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible')  // Проверяем, что кнопка с крестиком есть и видна пользователю

})

})