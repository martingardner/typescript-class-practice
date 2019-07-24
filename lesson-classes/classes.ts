//public - default doesn't have to marked as such can be called anywhere
//private - can only be called from within the class, usually need to use getter or setters to access it externally
//protected - can be called from child classes inherited from parent

class Vehicle {
  constructor(public color: string) {}

  drive(): void {
    console.log("driving");
    console.log(this.color);
  }

  protected honk(): void {
    console.log("honk");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log("this drives");
  }
  private drives(): void {
    console.log("car drives");
  }

  startDrive(): void {
    this.drives();
    this.honk();
  }
}

const vehicle = new Vehicle("orange");
const car = new Car(4, "red");
vehicle.drive();
//vehicle.honk(); // can't be called directly while honk is protected.
car.startDrive();
