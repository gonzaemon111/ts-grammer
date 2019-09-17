function show(result: string) {
    return `結果は${result}です。`;
}

// 1. 数値型を渡すとerror
// console.log(show(100))

// 2. string型に変換
console.log(show(<any>100));

// 3. as構文でも書き換え可能。
console.log(show('100' as any));
