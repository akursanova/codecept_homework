const { I } = inject();

module.exports = {

  moreEventsButton: 'div > div > .section__item > .rr-button > .rr-button__text',
  typeFilter: '#app > main > section > div > div > div.grid__col.grid__col_lg-auto > div.events-filters > div.events-filters__container > div.d-none.d-md-block > div:nth-child(1) > div.filter__content',
  triathlon: '#app > main > section > div > div > div.grid__col.grid__col_lg-auto > div.events-filters > div.events-filters__container > div.d-none.d-md-block > div:nth-child(1) > div.filter__content > div > div > div.multiselect__content-wrapper > ul > li:nth-child(32) > span',
  running: '#app > main > section > div > div > div.grid__col.grid__col_lg-auto > div.events-filters > div.events-filters__container > div.d-none.d-md-block > div:nth-child(1) > div.filter__content > div > div > div.multiselect__content-wrapper > ul > li:nth-child(15) > span',
  showButton: '.events-filters__footer > .grid > .grid__col > .rr-button_primary > .rr-button__text',
  clearButton: '#app > main > section > div > div > div.grid__col.grid__col_lg-auto > div.events-filters > div.events-filters__container > div.d-none.d-md-block > div.events-filters__footer > div > div:nth-child(1) > button',
  resultsLink: '#app > main > section > div > div > div.grid__col.grid__col_lg_stretch > div.section__header > div.section__subheader > div > div > div.sort__wrapper.d-none.d-md-flex > div:nth-child(4) > a',

  moreEvents() {
    I.click(this.moreEventsButton);
  },

  findEvents(type){
    I.click(this.typeFilter);
    I.click(type);
    I.click(this.showButton);
  }
}
