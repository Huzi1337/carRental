export const cars = [
  {
    modelName: "Toyota Camry",
    bodyType: "Sedan",
    power: 203,
    fuelType: "Petrol",
    transmission: "Automatic",
    numberOfSeats: 5,
    carSegment: "Mid-size",
    photo: "/src/assets/cars/gigaCar.png",
    price: 546, // Randomly generated price
  },
  {
    modelName: "Honda Civic",
    bodyType: "Sedan",
    power: 158,
    fuelType: "Petrol",
    transmission: "Automatic",
    numberOfSeats: 5,
    carSegment: "Compact",
    photo: "/src/assets/cars/gigaCar.png",
    price: 312, // Randomly generated price
  },
  {
    modelName: "BMW X5",
    bodyType: "SUV",
    power: 335,
    fuelType: "Petrol",
    transmission: "Automatic",
    numberOfSeats: 5,
    carSegment: "Luxury",
    photo: "/src/assets/cars/gigaCar.png",
    price: 711, // Randomly generated price
  },
  {
    modelName: "Ford Mustang",
    bodyType: "Coupe",
    power: 310,
    fuelType: "Petrol",
    transmission: "Manual",
    numberOfSeats: 4,
    carSegment: "Sports",
    photo: "/src/assets/cars/gigaCar.png",
    price: 543, // Randomly generated price
  },
  {
    modelName: "Tesla Model 3",
    bodyType: "Sedan",
    power: 283,
    fuelType: "Electric",
    transmission: "Automatic",
    numberOfSeats: 5,
    carSegment: "Electric",
    photo: "/src/assets/cars/gigaCar.png",
    price: 189, // Randomly generated price
  },
  {
    modelName: "Audi A4",
    bodyType: "Sedan",
    power: 188,
    fuelType: "Petrol",
    transmission: "Automatic",
    numberOfSeats: 5,
    carSegment: "Luxury",
    photo: "/src/assets/cars/gigaCar.png",
    price: 413, // Randomly generated price
  },
  {
    modelName: "Tesla Model 3",
    bodyType: "Sedan",
    power: 283,
    fuelType: "Electric",
    transmission: "Automatic",
    numberOfSeats: 5,
    carSegment: "Electric",
    photo: "/src/assets/cars/gigaCar.png",
    price: 664, // Randomly generated price
  },
  {
    modelName: "Audi A4",
    bodyType: "Sedan",
    power: 188,
    fuelType: "Petrol",
    transmission: "Automatic",
    numberOfSeats: 5,
    carSegment: "Luxury",
    photo: "/src/assets/cars/gigaCar.png",
    price: 442, // Randomly generated price
  },
];

export interface Car {
  id: number;
  modelName: string;
  bodyType: string;
  power: number;
  fuelType: string;
  transmission: string;
  numberOfSeats: number;
  carSegment: string;
  photo: string;
}
