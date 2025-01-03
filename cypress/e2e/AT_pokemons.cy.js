describe('Автотест на покупку аватара', function () {

    // Покупка аватара для трененра
     
     it('Покупка аватара для своего тренера', function () {  
          cy.visit('https://pokemonbattle.ru/login'); // Заходим на сайт
          cy.get(':nth-child(1) > .auth__input').type ('USER_LOGIN'); // Вводим логин
          cy.get('#password').type ('USER_PASSWORD'); // Вводим пароль
          cy.get('.auth__button').click(); // Нажимаем "войти"
          cy.get('.header__container > .header__id').click(); // Переходит на страницу своего тренера
          cy.wait(3000);
          cy.get('[href="/shop"]').click(); // Нажимаем кнопку "Смена аватара"
          cy.get('.available > button').first().click()
          // Заполняем данные банковской карты
          cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type ('4111 1111 1111 1111'); // номер
          cy.get(':nth-child(1) > .pay_base-input-v2').type ('04/25'); // срок
          cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type ('125'); // код
          cy.get('.pay__input-box-last-of > .pay_base-input-v2').type ('VASYA MUTNY'); // имя
          cy.get('.pay-btn').click() // нажимаем "оплатить"
          cy.get('#cardnumber').type ('56456'); // код из СМС
          cy.get('.payment__submit-button').click(); // подтверждаем
          cy.get('#messageHeader').contains ('Покупка прошла успешно').should('be.visible'); // Проверяем сообщение и что оно видно пользователю
          cy.get('.payment__adv').should('be.visible')  // проверяем, что есть кнопка "вернуться в магазин" и она видна пользователям
      })
    })
