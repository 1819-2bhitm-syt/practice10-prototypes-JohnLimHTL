function Rectangle(length, width) {
    this.width = width;
    this.length = length;
}

Rectangle.prototype.getArea = function () {
    return this.length * this.width;
};

Rectangle.prototype.getCircumference = function () {
    return this.length * 2 + this.width * 2;
};

module.exports = Rectangle;