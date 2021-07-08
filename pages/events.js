const { I } = inject();

module.exports = {

  moreEventsButton: 'div  div  .section__item >.rr-button  .rr-button__text',
  typeFilter: '.events-filters__container .filter:nth-child(1) .multiselect-container',
  triathlon: '.d-none.d-md-block > div:nth-child(1) > div.filter__content > div > div > div.multiselect__content-wrapper > ul > li:nth-child(32) > span',
  running: '.d-none.d-md-block > div:nth-child(1) > div.filter__content > div > div > div.multiselect__content-wrapper > ul > li:nth-child(15) > span',
  showButton: ' .grid  .grid__col > .rr-button_primary > .rr-button__text',
  clearButton: '.d-none.d-md-block .events-filters__footer > div > div:nth-child(1) > button',
  resultsLink: '.section__subheader [data-index = \'3\']',

  moreEvents() {
    I.click(this.moreEventsButton);
  },

  findEvents(type){
    I.click(this.typeFilter);
    I.click(type);
    I.click(this.showButton);
  }
}
