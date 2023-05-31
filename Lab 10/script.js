// Завдання 1 - Створення класу для ігрового персонажа:
class Character {
  constructor(name, type, level) {
    this.name = name;
    this.type = type;
    this.level = level;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getType() {
    return this.type;
  }

  setType(type) {
    this.type = type;
  }

  getLevel() {
    return this.level;
  }

  setLevel(level) {
    this.level = level;
  }

  move(x, y) {
    console.log(`${this.name} is moving to coordinates (${x}, ${y}).`);
  }
}

// Створення нащадків (приклади)
class Warrior extends Character {
  constructor(name, level) {
    super(name, "Warrior", level);
  }
}

class Mage extends Character {
  constructor(name, level) {
    super(name, "Mage", level);
  }
}

let warrior = new Warrior("Conan", 5);
let mage = new Mage("Gandalf", 8);

console.log(warrior.getName()); // Виведе: Conan
console.log(mage.getType()); // Виведе: Mage

warrior.move(10, 20); // Виведе: Conan is moving to coordinates (10, 20).

// Завдання 2 - Створення функції-конструктора для автомобіля:

function Car(brand, model, year, color) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.color = color;
}

Car.prototype.getBrand = function () {
  return this.brand;
};

Car.prototype.getModel = function () {
  return this.model;
};

Car.prototype.getYear = function () {
  return this.year;
};

Car.prototype.getColor = function () {
  return this.color;
};

Car.prototype.setColor = function (color) {
  this.color = color;
};

Car.prototype.move = function (x, y) {
  console.log(
    `${this.brand} ${this.model} is moving to coordinates (${x}, ${y}).`
  );
};

// Створення нащадків (приклади)
function SUV(brand, model, year, color) {
  Car.call(this, brand, model, year, color);
  this.type = "SUV";
}

SUV.prototype = Object.create(Car.prototype);
SUV.prototype.constructor = SUV;

let myCar = new Car("Toyota", "Camry", 2022, "Silver");
let suvCar = new SUV("Ford", "Explorer", 2021, "Black");

console.log(myCar.getBrand()); // Виведе: Toyota
console.log(suvCar.getYear()); // Виведе: 2021

myCar.move(10, 20); // Виведе: Toyota Camry is moving to coordinates (10, 20).

// Завдання 3 - Робота з методами .bind(), .call() та .apply():
// Використання .bind()
let person = {
  name: "John",
  age: 30,
  introduce: function () {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  },
};

let introduceFunc = person.introduce.bind(person);
introduceFunc(); // Виведе: Hi, my name is John and I'm 30 years old.

// Використання .call()
function greet(name) {
  console.log(`Hello, ${name}! Welcome.`);
}

greet.call(null, "Sarah"); // Виведе: Hello, Sarah! Welcome.

// Використання .apply()
function calculateSum(a, b, c) {
  return a + b + c;
}

let numbers = [1, 2, 3];
let sum = calculateSum.apply(null, numbers);
console.log(sum); // Виведе: 6
