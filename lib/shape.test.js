const {Triangle, Circle, Square} = require("./shapeTemplate")

describe('Triangle', () => {
    it('should render svg for a blue triangle element', () => {
      const shape = new Triangle();
      shape.setColor("blue");
      const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
      expect(shape.render()).toEqual(expectedSvg);
    });
  });

  describe('Circle', () => {
    it('should render svg for a orange circle element', () => {
      const shape = new Circle();
      shape.setColor("orange");
      const expectedSvg = `<circle cx="100" cy="100" r="50" fill="orange" />`;
      expect(shape.render()).toEqual(expectedSvg);
    });
  });
  
  describe('Square', () => {
    it('should render svg for a red square element', () => {
      const shape = new Square();
      shape.setColor("red");
      const expectedSvg = `<rect x="50" y="50" width="100" height="100" fill="red" />`;
      expect(shape.render()).toEqual(expectedSvg);
    });
  });