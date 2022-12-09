//Enum

//string type
enum Role {
    admin, manager, hr
}
console.log(Role);
console.log(Role.admin);
console.log(Role.hr);

//Numeric Enums - Default
/*enum CardinalDirections {
    North,
    East,
    South,
    West
};

let currentDirection = CardinalDirections.North;

// North is the first value so it logs '0'
console.log(currentDirection);
*/

//Numeric Enums - Initialized
enum CardinalDirections {
    North = 1,
    East,
    South,
    West
};

// logs 1 since we initialized the first value to something other than '0'
console.log(CardinalDirections.North);

// logs 4 as it continued on from the initial '1' value
console.log(CardinalDirections.West);