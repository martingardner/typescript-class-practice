const carMakers = ["ford", "toyata", "chevy"]; //infers to :string
const dates = [new Date(), new Date()]; //infers to dates

const carsByMake = [["f150"], ["corolla"], ["camaro]"]]; //infers to double arrays -- string[][]

// Help with inference when extracting values
const car = carMakers[0]; //infers string
const myCar = carMakers.pop(); //infers string

//Prevent incompatible values
//carMakers.push(100);

//Help with 'map'
carMakers.map(
  (car: string): string => {
    return car;
  }
);

// Flexible types
const impDates: (Date | string)[] = [new Date(), "2030-10-10"];
impDates.push("2030-10-10");
impDates.push(new Date());
