let Counter = function() {
  // 現在のthisを退避
  let _this = this;
  _this.count = 0;
  // 1000ミリ秒間隔でcount プロパティをインクリメント
  setInterval(function() {
    _this.count++;
  }, 1000);
};