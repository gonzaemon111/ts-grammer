var Person2 = /** @class */ (function () {
    function Person2(name, sex) {
        this.name = name;
        this.sex = sex;
        this.name = name;
        this.sex = sex;
    }
    Person2.prototype.show = function () {
        return this.name + "\u306F" + this.sex + "\u3067\u3059\u3002";
    };
    return Person2;
}());
var p2 = new Person2('俺', '男');
console.log(p2.show());
// console.log(p2.sex);　はエラーになる。
