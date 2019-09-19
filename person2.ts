class Person2 {

  constructor(private name: string, private sex: string) {
    this.name = name;
    this.sex = sex;
  }

  public show() {
    return `${this.name}は${this.sex}です。`
  }
}

let p2 = new Person2('俺', '男');
console.log(p2.show());
// console.log(p2.sex);　はエラーになる。
