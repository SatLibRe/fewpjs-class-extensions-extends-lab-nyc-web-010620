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
    if((this.sides[0] + this.sides[1]) > this.sides[2] && (this.sides[1] + this.sides[2]) > this.sides[0] && (this.sides[2] + this.sides[0]) > this.sides[1]) {
      return true;
    } else {
      return false;
    }
  }
}