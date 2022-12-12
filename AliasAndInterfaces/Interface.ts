//Interface:- Interfaces are similar to type aliases, except they only apply to object types.

//EX1
interface Rectangle {
    height: number,
    width: number
};

const rectangle: Rectangle = {
    height: 20,
    width: 10
};

console.log(rectangle);

//Extending Interfaces:-Extending an interface means you are creating a new interface with the same properties as the original, plus something new.
//EX2
interface Rectangle {
    height: number,
    width: number
}

interface ColoredRectangle extends Rectangle {
    color: string
}

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};

console.log(coloredRectangle);