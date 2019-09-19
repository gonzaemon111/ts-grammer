var Figure = /** @class */ (function () {
    function Figure() {
    }
    // 静的メソッドcircle(円の面積)
    Figure.circle = function (radius) {
        return radius * radius * this.Pi;
    };
    Figure.Pi = 3.14159;
    return Figure;
}());
console.log(Figure.Pi);
console.log(Figure.circle(5));
