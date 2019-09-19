// InheritancePersonクラスを継承した
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
var InheritanceBusinessPerson = /** @class */ (function (_super) {
    __extends(InheritanceBusinessPerson, _super);
    function InheritanceBusinessPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 1. 派生クラス独自のメソッドを定義
    InheritanceBusinessPerson.prototype.work = function () {
        return this.name + "\u306F\u30C6\u30AD\u30D1\u30AD\u50CD\u304D\u307E\u3059\u3002";
    };
    return InheritanceBusinessPerson;
}(InheritancePerson));
var ibp = new InheritanceBusinessPerson('なつき', '女');
console.log(ibp.show());
console.log(ibp.work());
