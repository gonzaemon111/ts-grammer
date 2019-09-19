function showTime2(time: Date = new Date()): string {
  return '現在時刻 : ' + (new Date()).toLocaleString();
}

let date_obj2 = new Date();
console.log(showTime2(date_obj2));
console.log(showTime2());