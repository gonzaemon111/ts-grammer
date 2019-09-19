interface Figure1 {
  getArea1(): number;
}

// 2. Figureインターフェースを実装したTriangleクラスを準備

class Triangle2 implements Figure1 {
  constructor(private width: number, protected height: number) {

  }

  getArea1(): number {
    return this.width * this.height / 2;
  }
}

let t1 = new Triangle2(10, 5);
console.log(t1.getArea1());