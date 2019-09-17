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
