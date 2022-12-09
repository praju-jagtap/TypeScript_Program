//Union

//Ex.1
function combine(a, b) {
    if (typeof a === 'number' && typeof b == 'number') {
        return a + b;
    }
    else
        return a.toString() + b.toString();
}
console.log(combine(10, 20));
console.log(combine('Prajakta', 'Jagtap'));
//Ex.2
function printStatusCode(code) {
    console.log("My status code is ".concat(code, "."));
}
printStatusCode(404);
printStatusCode('404');
