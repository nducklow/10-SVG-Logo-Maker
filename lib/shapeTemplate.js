// Shape.js
class Shape {
    constructor() {
      this.shapeColor = "";
    }
    setColor(shapeColor) {
      this.shapeColor = shapeColor;
    }
  }
  
  // Circle.js
  class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
      super(); // Call the superclass constructor
      this.text = text;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
    }
  
    render() {
      return `<circle cx="100" cy="100" r="50" fill="${this.shapeColor}" />`;
    }
  }
  
  // Triangle.js
  class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
      super(); // Call the superclass constructor
      this.text = text;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
    }
  
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
  }
  
  // Square.js
  class Square extends Shape {
    constructor(text, textColor, shapeColor) {
      super(); // Call the superclass constructor
      this.text = text;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
    }
  
    render() {
      return `<rect x="50" y="50" width="100" height="100" fill="${this.shapeColor}" />`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };