//Enum
//string type
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["manager"] = 1] = "manager";
    Role[Role["hr"] = 2] = "hr";
})(Role || (Role = {}));
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
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 1] = "North";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["South"] = 3] = "South";
    CardinalDirections[CardinalDirections["West"] = 4] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
// logs 1 since we initialized the first value to something other than '0'
console.log(CardinalDirections.North);
// logs 4 as it continued on from the initial '1' value
console.log(CardinalDirections.West);
