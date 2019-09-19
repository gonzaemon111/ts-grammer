// 2. Figureインターフェースを実装したTriangleクラスを準備
var Triangle2 = /** @class */ (function () {
    function Triangle2(width, height) {
        this.width = width;
        this.height = height;
    }
    Triangle2.prototype.getArea1 = function () {
        return this.width * this.height / 2;
    };
    return Triangle2;
}());
var t1 = new Triangle2(10, 5);
console.log(t1.getArea1());
