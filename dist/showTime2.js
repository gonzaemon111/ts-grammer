function showTime2(time) {
    if (time === void 0) { time = new Date(); }
    return '現在時刻 : ' + (new Date()).toLocaleString();
}
var date_obj2 = new Date();
console.log(showTime2(date_obj2));
console.log(showTime2());
