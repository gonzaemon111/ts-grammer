function show(value) {
    if (typeof value === 'number') {
        console.log(value.toFixed(0));
    }
    else {
        console.log(value ? '真' : '偽');
    }
}
show(10.358);
show(false);
// show('hoge'); error
