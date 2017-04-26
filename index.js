class Point {
   constructor(x, y) {
       this.x = x;
       this.y = y;
   }
   toString() {
       return `(${this.x}, ${this.y})`;
   }
}

class Side {
  constructor(length) {
    this.length = length
  }
}

class Shape {
  constructor() {}
  addToPlane(x, y){
    return this.position = new Point(x, y)
  }
  move(x, y) {
    return this.position = new Point(x, y)
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()
    this.radius = radius
  }
  diameter() {
    return this.radius * 2
  }
  area() {
    return Math.PI * this.radius^2
  }
  circumference() {
    return 2 * Math.PI * this.radius
  }
}

class Polygon extends Shape {
  constructor(sides_array) {
    super()
    this.sides = sides_array
  }
  perimeter(){
    return this.sides.reduce(function(total, side){
      return total + side.length}, 0)
    }
  numberOfSides(){
    return this.sides.length
  }
}

class Quadrilateral extends Polygon {
  constructor(side1, side2, side3, side4) {
    var side1 = new Side(side1)
    var side2 = new Side(side2)
    var side3 = new Side(side3)
    var side4 = new Side(side4)
    super([side1, side2, side3, side4])
  }
}

class Rectangle extends Quadrilateral {
  constructor(width, height) {
    super(width, height, width, height)
    this.width = width
    this.height = height
  }
  area() {
    return this.width * this.height
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length)
    this.length = length
  }
  listProperties() {
    var square = this
    for (var prop in square) {
      if(square.hasOwnProperty(prop)) {
          console.log("square" + prop + " = " + square[prop]);
      }
    }
  }
}
class Triangle extends Polygon {
  constructor(length1, length2, length3) {
    var side1 = new Side(length1)
    var side2 = new Side(length2)
    var side3 = new Side(length3)
    super([ side1, side2, side3] )
  }
}
