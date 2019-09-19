var InheritancePerson = /** @class */ (function () {
    // constructor
    function InheritancePerson(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    InheritancePerson.prototype.show = function () {
        return this.name + "\u306F" + this.sex + "\u3067\u3059\u3002";
    };
    return InheritancePerson;
}());
