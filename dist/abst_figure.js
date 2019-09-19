var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Figure = /** @class */ (function () {
    function Figure(width, height) {
        this.width = width;
        this.height = height;
    }
    return Figure;
}());
var AbstFigure = /** @class */ (function (_super) {
    __extends(AbstFigure, _super);
    function AbstFigure() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbstFigure.prototype.getArea = function () {
        return this.width * this.height / 2;
    };
    return AbstFigure;
}(Figure));
var t = new AbstFigure(10, 5);
console.log(t.getArea());
