//Alias:-Type Aliases allow defining types with a custom name (an Alias).
//variable
type vartype = string | number | boolean;  // define alias
let data: vartype = 10;
data = "Sai";
data = true;
console.log(data);

//Object
type objtype = { FirstName: string, LastName: string, Age: number };
let obj: objtype = { FirstName: "Prajakta", LastName: "Jagtap", Age: 25 };
console.log(obj);

//array
type arrtype = string | boolean | number;
let arr: arrtype[] = [];
arr.push(20);
arr.push("Komal");
arr.push(false);
console.log(arr);

