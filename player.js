class Player {
  constructor(name, palyground) {
    name = this.name
    playground = this.playground
  }
  countScore() {
    return this.score
  }
  increaseScore() {
    this.score = this.score + 1 
  }

  play(x, y, direction) {
    const node = {
      owner: this.name,
      x,
      y,
    }
    this.playground(node, direction)
  }
}