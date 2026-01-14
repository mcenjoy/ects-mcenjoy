class ECTS {
  constructor(score) {
    this.score = score;
  }

  ectsFromScore() {
    if (this.score < 0 || this.score > 100) {
      return 'Invalid score';
    } else if (this.score >= 90) {
      return 'A';
    } else if (this.score >= 82) {
      return 'B';
    } else if (this.score >= 74) {
      return 'C';
    } else if (this.score >= 65) {
      return 'D';
    } else if (this.score >= 60) {
      return 'E';
    } else {
      return 'F';
    }
  }
}

module.exports = ECTS;
