let Counter2 = function() {
  // 2つのthisは同じもの
  this.count = 0;
  setInterval(() => {
    this.count++ ;
    console.log(this.count);
  }, 1000);
};