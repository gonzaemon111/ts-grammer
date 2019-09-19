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

```typescript
let triangle = function(base: number, height: number): number {
  return base * height / 2;
}

console.log(triable(10, 5))
```

### アロー関数

```typescript
let triangle = (base: number, height: number): number => {
  return base * height / 2;
}
```

```typescript
let Counter = function() {
  // 現在のthisを退避
  let _this = this;
  _this.count = 0;
  // 1000ミリ秒間隔でcount プロパティをインクリメント
  setInterval(function() {
    _this.count++;
  }, 1000);
};
```

Counterコンストラクターの直下では、thisはインスタンス自身をさします。しかし、setIntervalメソッドの配下ではthisは変化してしまい、インスタンスを参照しません(ブラウザ環境であれば、windowオブジェクトを指します)。そこでコンストラクタで`this`を`_this`に待避し、setIntervalメソッドでも`_this`経由でcountプロパティを参照しているのです。

しかし、アロー関数では、thisはアロー関数自身が宣言された場所によって決まります。以下の例であれば、コンストラクタが示すthis(インスタンスそのもの)をさしますので、上の例にあったような`_this`への退避が不要になります。

## 引数にデフォルト値を設定する。

先ほどの例でも見たように、引数を省略した場合、大概は何らかのデフォルト値を設定するのが一般的です。

例
```typescript
function showTime(time: Date = new Date()): string {
  // 引数にそのまま「=」を使って明示する。
}
```

しかし、注意する点がいくつかある。

1. **任意引数** の後ろに **必須引数** は配置できない。

```typescript
function add(x: number = 1, y: number): string { ... }
```

これ自体では、エラーにならないものの、`add(1)`とした場合に、`y`も必須引数とみなされ、エラーになってしまう。

2. デフォルト値には、**式**も指定できる。

例: 
```typescript
function add(x: number = 1, y: number = x): string { ... }
```

3. 引数に`undefined`を指定した場合

デフォルト値が適用されるのは、引数を省略した場合だけではありません。

`undefined`を明示的に指定した場合にも、引数は省略されたとみなされます。

ちなみに、`null`を指定した場合には、デフォルト値は適用されません。`null`は`undefined`とは異なり、`null`は「値がない」であり、`undefined`は「未定義値」と言う意味である。

## 可変長引数

例を見た方がわかりやすいので、そうしましょう。

例: 
```typescript
function sum(...values: number[]): number {
  let result: number = 0;
  
  for (let value of values) {
    result += value;
  }

  return result;
}

console.log(sum(1, 5, -8, 10.45));
```

`...`を使うことで、可変長の引数であることが示されます。

## 関数のオーバーロード

オーバーロードとは、同じ名前でありながら、引数リスト、戻り値の型が異なる関数を定義することを言います。Javaなどの他の言語では、「オーバーライド」などと表現されます。

以下の例を見てみましょう。

```typescript
function show(value: number): void;
function show(value: boolean): void;

function show(value: any): void {
  if (typeof value === 'number'){
    console.log(value.toFixed(0));
  } else {
    console.log(value ? '真' : '偽');
  }
}

show(10.358);
show(false);
// show('hoge'); error
```

最初の２行は、**シグニチャ**といい、戻り値の型の後にセミコロン(;)だけを書きます。

----
* Column

`typeof`演算子は、プリミティブ型の判定にしか使用できないが、
`instanceof`演算子は、クラス型の判定ができる。
----


## オブジェクト指向編 <クラス>

例:
```typescript
class Person {
  name: string;
  sex: string;

  constructor(name: string, sex: string) {
    this.name = name;
    this.sex = sex;
  }

  show() {
    return `${this.name}は${this.sex}です。`
  }
}

let p = new Person('俺', '男');
console.log(p.show());

```

### アクセス修飾子

|`public`|`protected`|`private`|
|:---:|:---:|:---:|
|クラスの外からも自由にアクセス可能(デフォルト))|同じクラス、またはその派生クラスのメンバーからのみ、アクセス可能。|同じクラスからのみアクセス可能。|

例えば、以下は先ほどのPersonクラスを修正して、`name / sex`プロパティへのクラス外からのアクセスを制限した例です。


```typescript
class Person {
  private name: string;
  private sex: string;

  constructor(name: string, sex: string) {
    this.name = name;
    this.sex = sex;
  }

  public show() {
    return `${this.name}は${this.sex}です。`
  }
}

let p = new Person('俺', '男');
console.log(p.show());
```


## 静的(static)メンバ

静的メンバとは、クラスのオブジェクトに属するメンバではなく、クラスそのものに属するメンバです。

## 名前空間

クラスの数が増えてくると、「クラス名がライブラリ同士、あるいは、ライブラリと利用しているアプリとで競合する」と言う状況が出てきます。

そのような時に、意味的に関連するクラスを束ねる仕組みが、**名前空間**です(Javaを知っている人は、パッケージと同じものと考えれば理解しやすいかもしれません)。

例えば、名前空間を利用することで、「MainApp名前空間に属するHogeクラス」と「SubApp名前空間に属するHogeクラス」と言うように、同名のクラスを名前空間で9月できるようになります。

名前空間を定義するには、以下のようにnamespaceブロックを利用するだけです。

```typescript
// 1. MainApp 名前空間を定義

namespace MainApp {
  export class Hoge { ... }
  export function foo() { ... }
}
// 2.名前空間配下の クラス / 関数 を呼びだし

let h = new MainApp.Hoge();
MainApp.foo();
```

この例では、`MainApp`名前空間の配下で、hogeクラスとfoo関数を定義しています。名前空間の配下でも、クラス / 関数などの構文はこれまでとほぼ同じですが、一点だけ、exportキーワードを付与している点に注意してください。

TSでは、デフォルトで名前空間配下の要素へのアクセスを許可しません。`export`キーワードで、外からのアクセスが可能であることを明示的に宣言してください。

また、名前空間配下の要素を呼び出す際には、「名前空間.クラス名()」のように完全な名前(完全修飾名)で表す点にも要注意です。例えば、`let h = new Hoge();`のようなコードは`Error`です。(MainApp.HogeとHogeとは別物だからです)。


階層的な名前空間

　　より大きなアプリでは、名前空間に階層を設けることも可能です。名前の区切りはドット(.)で表します。

```typescript
namespace Wings.MainApp {
  export class Hoge {}
  export function foo() {}
}

let h = new Wings.MainApp.Hoge();
Wings.MainApp.foo();
```

これで`Wings.MainApp`名前空間の配下でHogeクラス/foo関数を定義しなさい、と言う意味になります。呼び出しに際して完全修飾名で表さなければならないのは、先ほどと同じです。

　　別解として、`namespace`ブロックを入れ子にしても構いません。この場合、内側のnamespaceブロックについても、`export`キーワードで修飾する必要があります。

```typescript
namespace Wings {
  export namespace MainApp {
    export class Hoge {}
    export function foo() {}
  }
}
```

## 継承

継承(Inheritance)とは、元にクラスの機能(メンバー)を引き継ぎながら、新しい機能を追加したり、元の機能の一部だけを修正したりすることです。オブジェクト指向構文において、クラスを再利用するもっとも基本的な手段でもあります。

もっとも、従来のJSでクラスを継承するには、プロトタイプ継承と呼ばれる、いささか回りくどい仕組みを利用しなければなりませんでした。

```typescript
class Person {
  // 2. protectedメンバーを準備
  protected name: string;
  protected sex: string;
}
```

## 抽象クラス

抽象メソッドや抽象クラスを定義するには、その前に`abstract`をかく。

```typescript
class Figure {
  constructor(protected width: number, protected height: number) {  }

  getArea(): number {
    return 0;
  }
}

class Triangle extends Figure {
  getArea(): number {
    return this.width * this.height / 2;
  }
}

let t = new Triangle(10, 5);
console.log(t.getArea());
```

この例では、`Figure#getArea`メソッドはほとんど意味がありません。コンパイル時にエラーにならないよう、とりあえず0を返しているだけのダミーのメソッドです。あくまで、具体的な面積の計算はTriangleクラスで提供されているのです。

意味がないならば、`Figure#getArea`メソッドからはコードはのぞいてしまおうと言うのが、抽象メソッドの目的です。Figureクラスでは、`width , height`プロパティとこれを食化するためのコンストラクター、あとは、派生クラスで`getArea`メソッドを定義してね、と言う指示だけを用意するわけですね。


## インターフェース

TSの継承には、一つ制限があります。それは、一度に一つのクラスしか継承できない点があります。複数のクラスを同時に継承することはできません(この性質を**単一継承**と言います)。

そこで登場するのが、**インターフェース**です。インターフェースは、ざっくりと行ってしまうならば、「全てのメソッドが抽象メソッドである特別なクラス」です。また、一般的なクラスと違って、複数のインターフェースを同時に継承することができます(正確には、インターフェースを継承することは「**実装する**」と言います)。






