const inquirer = require("inquirer")
const { Triangle, Circle, Square } = require("./shapeTemplate")
const { writeFile } = require("fs/promises")
const svgTemplate = require("./svgTemplate")

class Terminal {
    start() {
        return inquirer.prompt([
            {
                name: "text",
                type: "input",
                message:
                    "Enter text for your shape!. (Text has to be 3 or fewer characters)",
                validate: (text) =>
                    text.length <= 3 ||
                    "Please enter 3 or fewer characters",
            },
            {
                name: "textColor",
                type: "input",
                message: "Enter a color name or a hexadecimal number for the text color.",
            },
            {
                name: "shape",
                type: "list",
                message: "Select a shape for the logo",
                choices: ["circle", "triangle", "square"],
            },
            {
                name: "shapeColor",
                type: "input",
                message: "Enter a color name or a hexadecimal number for the text color.",
            },
        ]).then(answers => {
            const { shape, text, textColor, shapeColor } = answers;
            let shapeInstance;

            switch (shape) {
                case 'circle':
                    shapeInstance = new Circle(text, textColor, shapeColor);
                    break;
                case 'triangle':
                    shapeInstance = new Triangle(text, textColor, shapeColor);
                    break;
                case 'square':
                    shapeInstance = new Square(text, textColor, shapeColor);
                    break;
                default:
                    throw new Error(`Invalid shape selected: ${shape}`);
            }
                const svg = new svgTemplate();
                svg.setText(text, textColor);
                svg.setShape(shapeInstance, shapeColor);;

                const svgContent = svg.render();

                return writeFile("logo.svg", svgContent)

        });
    };
}



module.exports = Terminal