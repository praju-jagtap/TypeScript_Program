//function with parameter return number type
function sub(a: number, b: number): number {
    return a - b;
}
sub(20, 10);

//Void return type- -The type void can be used to indicate a function doesn't return any value.
function printHello(): void {
    console.log('Hello!');
}
printHello();

//Optional Parameters- the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}
console.log(add(2, 5))

//Default Parameters
function pow(value: number, exponent: number = 10) {
    return value ** exponent;
}
console.log(pow(10));

//Named Parameters
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
  }
console.log(divide({dividend: 10, divisor: 2}));

//Rest Parameters - Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function add1(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}

console.log(add1(10, 10, 10, 10, 10));