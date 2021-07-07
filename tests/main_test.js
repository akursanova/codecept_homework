Feature('main');

Scenario('переход на страницу событий', ({I, mainPage}) => {
  I.amOnPage('/');
  I.click(mainPage.eventsLink);
  I.see('Предстоящие');
  I.seeInTitle('События - RussiaRunning');
})

