let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
};

for (var car in statistics) {
  if (car.startsWith("r") || (statistics[car]%2 != 0)) {
    console.log(statistics[car]);
  }
}