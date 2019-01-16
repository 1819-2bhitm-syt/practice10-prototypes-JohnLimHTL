let Square = require("./square.js");
let Rectangle = require("./rectangle.js");

// Deklaration der Arrays
let figures = [new Square(2), new Square(5), new Square(10), new Rectangle(5, 3), new Rectangle(10, 4)];

// Ausgabe der Flächen
for (let figure of figures) {
    console.log(figure);
    // Ausgabe der Fläche mithilfe von getArea()
    console.log("Fläche: " + figure.getArea());
    console.log("Umfang: " + figure.getCircumference());
    console.log();
}



