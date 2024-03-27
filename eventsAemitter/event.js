const { log } = require("console");
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("tutorial", (num1, num2) => {
  console.log(num1 + num2);
});
eventEmitter.emit("tutorial", 10, 100);

class Person extends EventEmitter {
  constructor() {
    super();
    // this._name = name;
  }
  get name() {
    return this._name;
  }
}
let karthik = new Person("karthik");
karthik.emit("name", () => {
  console.log("My name is " + karthik.name);
});

class Tution extends EventEmitter {
  constructor() {
    super();
  }
}

const tution = new Tution();

// tution.on("finalBell", () => {
//   console.log("sudents are leaving");
// });

class Student {
  constructor(name) {
    this.name = name;

    tution.on("finalBell", () => {
      // console.log(this.name);
      console.log(`${this.name} is leaving`);
    });

    // console.log(name);
  }

  leaving() {
    console.log(this.name);
    console.log(`${this.name} is leaving`);
  }
}

const students = ["kamal", "karthick", "senthil"].map(
  (student) => new Student(student)
);

// students[0].leaving();

tution.emit("finalBell");

module.exports = { eventEmitter: eventEmitter, person: Person };
