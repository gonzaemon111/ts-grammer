// 引数にnilを許容する場合は、?をつける。
function showTime(time?: Date): string {
  if (time === undefined) {
    return '現在時刻 : ' + (new Date()).toLocaleString();
  } else {
    return '現在時刻 : ' + time.toLocaleString();
  }
}

// console.log(showTime(Date.now()));
let date_obj = new Date();
console.log(showTime(date_obj));
console.log(showTime());