class Person {
  name: string;
  sex: string;

  constructor(name: string, sex: string) {
    this.name = name;
    this.sex = sex;
  }

  show() {
    return `${this.name}は${this.sex}です。`
  }
}

let p = new Person('俺', '男');
console.log(p.show());
