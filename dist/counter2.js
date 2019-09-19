var Counter2 = function () {
    var _this = this;
    // 2つのthisは同じもの
    this.count = 0;
    setInterval(function () {
        _this.count++;
        console.log(_this.count);
    }, 1000);
};
