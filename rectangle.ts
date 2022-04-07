export class Point {
    public x: number
    public y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    move(new_x: number, new_y: number) {
        this.x = new_x
        this.y = new_y
    }
}

export class Rectangle {
    public p1: Point
    public p2: Point
    public p3: Point
    public p4: Point

    constructor(p1: Point, p2: Point){
        this.p1 = p1
        this.p2 = p2
        this.p3 = new Point(p1.x, p2.y)
        this.p4 = new Point(p2.x, p1.y)
    }

    move(offset: Point) {
        this.p1.move(this.p1.x + offset.x, this.p1.y + offset.y)
        this.p2.move(this.p2.x + offset.x, this.p2.y + offset.y)
        this.p3.move(this.p3.x + offset.x, this.p3.y + offset.y)
        this.p4.move(this.p4.x + offset.x, this.p4.y + offset.y)
    }

    getArea() {
        return Math.abs(this.p1.x - this.p2.x) * Math.abs(this.p1.y - this.p2.y)
    }
}

var punkt1 = new Point(3, 4)
var punkt2 = new Point(-2, 7)

var prostokat = new Rectangle(punkt1, punkt2)
prostokat.move(new Point(1, 1))
console.log(prostokat.getArea())