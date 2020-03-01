class Polygon {
  constructor(array){
    this.array = array
  }
  get countSides(){
    return this.array.length
  }
  get perimeter(){
    return this.array.reduce((a, b) => a + b, 0)
  }
}

class Triangle extends Polygon {
  
  get isValid(){
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    if (this.count !== 3) {
      return;
    }
    return ( ( side1 === side2 ) && ( side1 === side3 ) && ( side2 === side3 ) )
  }
  
}