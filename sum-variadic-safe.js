function sumVariadicSafe() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, n) { return total + n; }, 0);
}
var ans = sumVariadicSafe(1, 2, 3);
console.log(ans);
