//function with parameter return number type
function sub(a, b) {
    return a - b;
}
sub(20, 10);
//Void return type- -The type void can be used to indicate a function doesn't return any value.
function printHello() {
    console.log('Hello!');
}
printHello();
//Optional Parameters- the `?` operator here marks parameter `c` as optional
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(2, 5));
//Default Parameters
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(value, exponent);
}
console.log(pow(10));
//Named Parameters
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));
//Rest Parameters - Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function add1(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p, c) { return p + c; }, 0);
}
console.log(add1(10, 10, 10, 10, 10));
