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

## 列挙型

```typescript
enum ename {
  name
}

// ename: 列挙型の名前
// name: 定数

```

列挙型に属する定数を **列挙子** と呼びます。列挙子にはデフォルトで0,1,2, ... と数値が割り振られますので、この例であれば、MALE (0 : 男性)、FEMALE (1 : 女性)、という定数をSexと言う列挙型でまとめたことになります。

```
列挙型.列挙子
```

でアクセス可能。

```typescript
enum Sex {
  MALE = 1,
  FEMALE = 2,
  UNKNOWN = 4
}
```

のように、好きなindexを割り振ることも可能。


## タプル (tuple)

複数の異なる型の集合を表現するためのデータ型。

```typescript
let data: [string, number, boolean] = ['hoge', 10.355, false];

console.log(data[0].substring(2));
```

## 型エイリアス

```typescript
// tuple型にFooTypeと言う名前を付与
type FooType = [ string, number, boolean ]

// FooType型の変数dataを定義
let d2: FooType = [ 'abc', 12, true ]

console.log(d2);
```

このようにtypeを扱うことも可能だが、あまり良しとはされていない。

理由は、その代わりにinterfaceがあるからです。

- interfaceとtypeの違いは、interfaceで定義された名前はどこからでも参照できますが、型エイリアスのそれはそうではありません。

- 型エイリアスは単なる別名であり、継承・実装とした用途には利用できない。

型エイリアスを利用する際は、interfaceで解決できないかを一度考えた方がいい。


## 型定義ファイル

型定義ファイルとは、名前の通り、型情報だけを定義ファイルのこと。

型定義ファイルは、アプリ開発者が自ら定義することもできますが、メジャーなライブラリについては、大概、型定義ファイルがすでに用意されています。まずは、これらを利用させてもらうことを検討しましょう。本書でも以降はjQueryを例に既存の型定義ファイルを利用する例を解説するに留めます(型定義ファイルの記述については、公式サイトのドキュメントも合わせて参照してください。)


## 関数

### function命令

```typescript
function name(param: param-type, ...): return-type {
  ... statements ...
}
```

### 関数リテラル


