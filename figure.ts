class Figure {
  public static Pi: number = 3.14159;

  // 静的メソッドcircle(円の面積)

  public static circle(radius: number): number {
    return radius * radius * this.Pi;
  }
}

console.log(Figure.Pi);
console.log(Figure.circle(5));