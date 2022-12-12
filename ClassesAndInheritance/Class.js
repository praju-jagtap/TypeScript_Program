//Ex:1
/*class Person {
    name: string;
}
const person = new Person();
person.name = "Sairaj";
console.log(person);*/
//Ex:2- Using access modifier
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Pratibha");
console.log(person.getName());
