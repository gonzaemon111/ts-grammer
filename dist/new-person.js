var NewPerson = /** @class */ (function () {
    function NewPerson() {
    }
    Object.defineProperty(NewPerson.prototype, "age", {
        // _ageのように、クラスのprivateプロパティ(メンバ)は、わかりやすいように先頭に「_」をつける。
        get: function () {
            return this._age;
        },
        //setter アクセサー
        set: function (value) {
            if (value < 0) {
                throw new RangeError('ageプロパティは正数で指定してください！');
            }
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    return NewPerson;
}());
var np = new NewPerson();
np.age = 10;
console.log(np.age);
