import faker from "faker";

class User {
  //typescript variable definitions
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  // end typescript variable definitions
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
}
