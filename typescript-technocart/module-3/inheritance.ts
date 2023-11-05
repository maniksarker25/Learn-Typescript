{
  // Learn inheritance ----------------------

  // parent class ------------------------

  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep for ${numberOfHours} hour`);
    }
  }

  // student class ------------------
  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("Mr Student", 20, "Uganda");
  student1.getSleep(20);

  // teacher class ----------------------

  class Teacher extends Person {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numberOfClass: number) {
      console.log(`${this.name} will take  ${numberOfClass} class`);
    }
  }

  const teacher1 = new Teacher("Mr Jack", 45, "Uganda", "English Teacher");
  teacher1.takeClass(2)
  //
}
