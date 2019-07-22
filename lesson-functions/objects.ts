const profile = {
  namez: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age, namez }: { age: number; namez: string } = profile;
const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
