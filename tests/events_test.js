Feature('events');
Before(({I}) => { // or Background
  I.amOnPage('/events');
});

Scenario('больше событий богу событий', ({I, eventsPage}) => {
  eventsPage.moreEvents();
  I.seeInCurrentUrl('events?p=1');
})

Scenario('найти триатлон', ({I, eventsPage}) => {
  eventsPage.findEvents(eventsPage.triathlon);
  I.seeInCurrentUrl('events?discipline=triathlon');
})

Scenario('найти бег', ({I, eventsPage}) => {
  eventsPage.findEvents(eventsPage.running);
  I.seeInCurrentUrl('events?discipline=run');
})

Scenario('очистить поиск', ({I, eventsPage}) => {
  eventsPage.findEvents(eventsPage.running);
  I.click(eventsPage.clearButton);
  I.dontSeeInCurrentUrl('events?discipline=run');
  I.seeInTitle('Events - RussiaRunning');
})

Scenario('переход в результаты событий', ({I, eventsPage}) => {
  I.click(eventsPage.resultsLink);
  I.seeInCurrentUrl('Results');
  I.seeInTitle('Результаты - RussiaRunning');
})