class GuessingGame {
  constructor() {
    this.min = null;
    this.max = null;

  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    return this._r((this.max+this.min)/2);

  }

  lower() {
    this.max = this._r((this.max+this.min)/2);
  }

  greater() {
    this.min = this._r((this.max+this.min)/2);
  }
  
  _r(value) {
    return Math.ceil(value);
  }
}

module.exports = GuessingGame;