function process(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else {
    return value.toFixed(1);
  }
}

console.log(process('hoge')); // HOGE
console.log(process(1));  // 1.0