let obj: { [index: string]: string; } = {
  'hoge': 'ほげ',
  'foo': 'ふぅ',
  'bar': 'バァ'
}

console.log(obj.hoge)  // プロパティ構文
console.log(obj['hoge'])  // ブラケット構文