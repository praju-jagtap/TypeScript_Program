//Object Type

/*const person:{name:string;age:number;emailid:string}={
    name:"Pra",
    age:24,
    emailid:"prajakta2412@gmail.com"
}
console.log(person.name,person.age,person.emailid);

const user:{name:string;age:number;emailid:string}={
    name:"komal",
    age:22,
    emailid:"komal11@gmail.com"
}
console.log(user.name,user.age,user.emailid);*/

//In both object data is same so we can use one oject

type objType={name:string;age:number;emailid:string}
const person:objType={
    name:"Pra",
    age:24,
    emailid:"prajakta2412@gmail.com"
}
console.log(person.name,person.age,person.emailid);

const user:objType={
    name:"komal",
    age:22,
    emailid:"komal11@gmail.com"
}
console.log(user.name,user.age,user.emailid);