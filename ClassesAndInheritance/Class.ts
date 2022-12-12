//Ex:1
/*class Person {
    name: string;
}
const person = new Person();
person.name = "Sairaj";
console.log(person);*/

//Ex:2- Using access modifier
class Person {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}
const person = new Person("Pratibha");
console.log(person.getName());