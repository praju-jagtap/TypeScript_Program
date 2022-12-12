//Casting:-There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.
//Casting is the process of overriding a type.

//Casting with as:-will directly change the type of the given variable.
let x: unknown = 'hello';
console.log((x as string).length);

//Casting with <>:- Using <> works the same as casting with as.
let y: unknown = 'hello';
console.log((<string>y).length);

//Force casting:-To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
let z = 'hello';
//console.log(((z as unknown) as number).length); through error
console.log(((z as unknown) as string).length);