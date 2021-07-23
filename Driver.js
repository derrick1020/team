const Employee = require("./Employee");

class Driver extends Employee {
  constructor(name, id, email, car) {
    super(name, id, email);
    this.car = car;
  }
  getRole() {
    return "Driver";
  }
  getCar() {
    return this.car;
  }
}

const e = new Driver("Foo", 1, "testme@test.com", "chevy");

e.getCar();

module.exports = Driver;
