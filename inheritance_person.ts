class InheritancePerson {
  // 2. protectedメンバーを準備
  protected name: string;
  protected sex: string;

  // constructor
  constructor(name: string, sex: string) {
    this.name = name;
    this.sex = sex;
  }

  show(): string {
    return `${this.name}は${this.sex}です。`;
  }
}