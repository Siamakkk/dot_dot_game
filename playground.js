export class Playground {
  constructor(
    m, k
  ){
    this.m = m
    this.k = k  
  }
  nodes = []
  node_template = {
    x: 0,
    y: 0,
    right_owner: '',
    down_owner: '',
  }

  directionsEnum = {
    right: 'RIGHT',
    down: 'DOWN'
  }



  draw(node, direction) {
    //TODO : validate node
    if(node.x > m || node.y > k) {
      throw new Error('the node position is wrong')
    }
    let playgroundNode = this.nodes.find(n => {
      return n.x === node.x && n.y === node.y
    })
    if(playgroundNode) {
      const isLegalMove = direction === this.directionsEnum.right 
      ? !!playgroundNode.right_owner : !!playgroundNode.down_owner
      if(!isLegalMove) {
        throw new Error('this move is not legal')
      }
      if(direction === this.directionsEnum.right) {
        playgroundNode.right_owner = node.owner
      }
      else {
        playgroundNode.down_owner = node.owner
      }
    }
    else {
      const newNode = { ... this.node_template }
      if(direction === this.directionsEnum.right) {
        newNode.right_owner = node.owner
      }
      else {
        newNode.down_owner = node.owner
      }
    }

    const isScore = checkIfScore()
    if(isScore) {

    }
  }

  checkIfScore() {

  }


}

