// InheritancePersonクラスを継承した

class InheritanceBusinessPerson extends InheritancePerson {
  // 1. 派生クラス独自のメソッドを定義
  work(): string {
    return `${this.name}はテキパキ働きます。`;
  }
}

let ibp = new InheritanceBusinessPerson('なつき', '女');

console.log(ibp.show());
console.log(ibp.work());