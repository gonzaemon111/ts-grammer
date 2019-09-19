class Person3 {
  protected name: string;
  protected sex: string;

  constructor(name: string, sex: string) {
    this.name = name;
    this.sex = sex;
  }

  show() {
    return `${this.name}は${this.sex}です。`
  }
}



class BusinessPerson extends Person3 {
  protected clazz: string;
  // 2. constructorをオーバーライド
  constructor(name: string, sex: string, clazz: string) {
    super(name, sex);
    this.clazz = clazz;
  }

  // 1. showメソッドをオーバーライド
  show(): string {
    return super.show() + `${this.clazz}です。`;
  }
}

let bp = new BusinessPerson('なつき', '女', '主任');

console.log(bp.show());