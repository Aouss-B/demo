import $ from 'jquery';

class RevealOnScroll {
  constructor() {
    this.itemToReveal = $(".feature-item");
    this.hideInitially();
  }

  hideInitially() {
    this.itemToReveal.addClass("reveal-item");
  }
}

export default RevealOnScroll;
