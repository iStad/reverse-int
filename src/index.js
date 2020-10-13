module.exports = function reverse (n) {
    let strNumber = Math.abs(n) + '';
    let result = '';
    for (i = 0; i < strNumber.length; i++) {
      result = strNumber.substr(i, 1) + result;
    };
    return result*1;
}
