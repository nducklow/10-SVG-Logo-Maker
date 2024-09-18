class svgTemplate {
  constructor() {
    this.textEl = "";
    this.shapeEl = "";
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`;
  }

  setText(message, color) {
    if (message.length > 3) {
      throw new Error("Text is more than 3 characters.");
    }
    this.textEl = `<text x="100" y="100" font-size="30" text-anchor="middle" fill="${color}">${message}</text>`;
  }

  setShape(shape, color) {
    this.shapeEl = shape.render(color);
  }
}

module.exports = svgTemplate;