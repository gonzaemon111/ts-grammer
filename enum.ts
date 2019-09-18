enum Sex {
  MALE,
  FEMALE,
  UNKNOWN
}

let m: Sex = Sex.MALE;
console.log(m); // 結果: 0
console.log(Sex[m]); // 結果: MALE