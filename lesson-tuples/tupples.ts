const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};

//tupple
const pepsi: [string, boolean, number] = ["brown", true, 40];

//tupple with type alias
type Drink = [string, boolean, number];

const coke: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];

// very rare use, this looks like a solution to a problem only certain backenders asked for as it removes the meaning from the values whereas an object you always have parameters
// possible use for csv files
