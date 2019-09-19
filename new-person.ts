class NewPerson {
  private _age: number;
  // _ageのように、クラスのprivateプロパティ(メンバ)は、わかりやすいように先頭に「_」をつける。

  get age(): number {
    return this._age;
  }

  //setter アクセサー
  set age(value: number) {
    if (value < 0) {
      throw new RangeError('ageプロパティは正数で指定してください！')
    }
    this._age = value;
  }
}

let np = new NewPerson();
np.age = 10;
console.log(np.age); // errorにならない。
