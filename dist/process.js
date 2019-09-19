function process(value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else {
        return value.toFixed(1);
    }
}
console.log(process('hoge'));
console.log(process(1));
