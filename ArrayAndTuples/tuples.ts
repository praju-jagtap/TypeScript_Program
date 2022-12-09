//Tuples:-A tuple is a typed array with a pre-defined length and types for each index.

//Example-1
let newTuple: [number, boolean, string];
newTuple = [5, false, 'Shubham'];
newTuple.pop();
newTuple.push(5);
console.log(newTuple);

//Example-2 
let Tuple: readonly [number, boolean, string] = [5, false, 'Komal'];
//Tuple.pop(); not allow
console.log(Tuple);

//Example-3
let role:[string,number,boolean?]=['Prajkata',24]
role.push(true);
console.log(role);