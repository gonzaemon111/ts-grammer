abstract class Figure {
  constructor(protected width: number, protected height: number) {

  }

  abstract getArea(): number;
}

class AbstFigure extends Figure {
  getArea(): number {
    return this.width * this.height / 2;
  }
}

let t = new AbstFigure(10, 5);

console.log(t.getArea());