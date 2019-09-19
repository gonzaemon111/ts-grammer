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
var Person3 = /** @class */ (function () {
    function Person3(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    Person3.prototype.show = function () {
        return this.name + "\u306F" + this.sex + "\u3067\u3059\u3002";
    };
    return Person3;
}());
var BusinessPerson = /** @class */ (function (_super) {
    __extends(BusinessPerson, _super);
    // 2. constructorをオーバーライド
    function BusinessPerson(name, sex, clazz) {
        var _this = _super.call(this, name, sex) || this;
        _this.clazz = clazz;
        return _this;
    }
    // 1. showメソッドをオーバーライド
    BusinessPerson.prototype.show = function () {
        return _super.prototype.show.call(this) + (this.clazz + "\u3067\u3059\u3002");
    };
    return BusinessPerson;
}(Person3));
var bp = new BusinessPerson('なつき', '女', '主任');
console.log(bp.show());
