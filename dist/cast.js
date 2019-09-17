function show(result) {
    return "\u7D50\u679C\u306F" + result + "\u3067\u3059\u3002";
}
// 1. 数値型を渡すとerror
// console.log(show(100))
// 2. string型に変換
console.log(show(100));
// 3. as構文でも書き換え可能。
console.log(show('100'));
