

// Create a new Game

class Game {
  constructor() {
    this.state = true;
    this.points = 0;
    this.winPoints = 8;
    this.lives = 3;
  }
  checkLives() {
    if (this.lives === 0) {
      this.state = false;
    }
  }
    checkPoints() {
      if (this.points === this.winPoints) {
        this.state = false;
      }
    }
  checkState() {
    if (this.state === false && this.points >= this.winPoints) {
      alert('You Win!')
      return false;
    }
    if (this.state === false && this.points < this.winPoints) {
      alert('You Loose!')
      return false;
    }
    return true;
  }
}
