interface StringMap {
  [index: string]: string;
}

let obje: StringMap = {
  'hoge': 'ほげ',
  'foo': 'ふぅ',
  'bar': 'バァ'
}

console.log(obje)
console.log(obje.hoge)