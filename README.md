# TypeScript 入門

### 変数/データ型

#### 変数 var/let命令

TSでは、変数を利用する前にvar, またはlet命令で宣言しなければなりません(JSでは未宣言の変数に値を代入する事も可能)。

```typescript
let name: type = initial値
```

typescriptの型には以下があります。

- number: 数値型
- string: 文字列
- boolean: 真偽値
- symbol: シンボル型
- any: 任意の型
- オブジェクト型: 後述

このうち、`number, string, boolean, symbol`は基本的な型として、Primitive型と総称されます。

また、オブジェクト型には、

- 配列型
- タプル型
- クラス型
- インターフェース型
- 関数型

```typescript
let data = 100;
data = 150;
data = 'hoge'; // error
```

let/var型では変数宣言時に型を省略することができる。

TypeScriptには、初期値を代入した変数は、TyepScript側で**型推論**という型を推論する役割があります。そのため、違うtypeの値を再度変数に代入することは不可能です。

ただし、このような場合を許容したい時もあります。

```typescript
let data2: any = 100;
data2 = 150;
data2 = 'hoge'; // not error 
```

事前に、any型の変数であることを明示しておくと、違う値を代入してもerrorにならない。

しかし、このようにany型をなんでもかんでも使うのは、TypeScriptの良さである静的な部分を削ぐことになるので、使用する際はかなり限定的にしたほうがいい！

### リテラル表現

リテラルとは、対応する型の変数に格納できる値そのもの、またはその表現方法。

#### 数値リテラル

|種類|概要|例|
|:---:|:---:|:---:|
|10進数|一般的な10進数表現|108,30|
|2進数|接頭辞を「0b」にする|0b110101|
|8進数|接頭辞を「0o」にする|0o666|
|16進数|接頭辞を「0x」にする|0xFF|
|指数|<仮数部>E<符号部><指数部>|3.5E5|

#### 文字列リテラル

1. シングルクォート(')
2. ダブルクォート(")
3. バッククォート(\`)

1, 2については、さほどが違いがないのに対し、3は**テンプレート文字列**とも言われ、以下の性質を持っています。

- 文字列に変数を埋め込める。
- 複数行にまたがる文字列を表現可能。

## 定数

`const`を使う。

定数は、「再代入できない」であって、「変更できない」

## 配列

```typescript
let name: type[] = initial

let name: Array<type> = initial

let data: number[] = new Array(5); // サイズ５の空配列
```

## 連想配列(ハッシュ)

```typescript
let obj: { [index: string]: string; } = {
    'hoge': 'ほげ',
    'foo': 'ふぅ',
    'bar': 'バァ'
}

console.log(obj.hoge)  // プロパティ構文
console.log(obj['hoge'])  // ブラケット構文
```

しかし、

```typescript

let obj: { [index: string]: string; } = {
    'hoge': 'ほげ',
    'foo': 'ふぅ',
    'bar': 'バァ'
}

obj.piyo = 'piyo';  // error
```




