"use strict";
exports.__esModule = true;
exports.Rectangle = exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.move = function (new_x, new_y) {
        this.x = new_x;
        this.y = new_y;
    };
    return Point;
}());
exports.Point = Point;
var Rectangle = /** @class */ (function () {
    function Rectangle(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = new Point(p1.x, p2.y);
        this.p4 = new Point(p2.x, p1.y);
    }
    Rectangle.prototype.move = function (offset) {
        this.p1.move(this.p1.x + offset.x, this.p1.y + offset.y);
        this.p2.move(this.p2.x + offset.x, this.p2.y + offset.y);
        this.p3.move(this.p3.x + offset.x, this.p3.y + offset.y);
        this.p4.move(this.p4.x + offset.x, this.p4.y + offset.y);
    };
    Rectangle.prototype.getArea = function () {
        return Math.abs(this.p1.x - this.p2.x) * Math.abs(this.p1.y - this.p2.y);
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
var punkt1 = new Point(3, 4);
var punkt2 = new Point(-2, 7);
var prostokat = new Rectangle(punkt1, punkt2);
prostokat.move(new Point(1, 1));
console.log(prostokat.getArea());
