function showTime(time) {
    if (time === undefined) {
        return '現在時刻 : ' + (new Date()).toLocaleString();
    }
    else {
        return '現在時刻 : ' + time.toLocaleString();
    }
}
// console.log(showTime(Date.now()));
var date_obj = new Date();
console.log(showTime(date_obj));
console.log(showTime());
