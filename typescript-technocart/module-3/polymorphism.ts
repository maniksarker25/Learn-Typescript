{
  // Learn polymorphism -------------------------

  // aki method akak jaigai akak rokom value return korta ba alada beheave kora
  class Person {
    getSleep() {
      console.log("I am sleeping 8 hours per day");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("I am sleeping 7 hours per day");
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log("I am sleeping 6 hours per day");
    }
  }

  // aki method akak jaigai akak rokom value return kortasa atai hossa polymorphism
  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHours(person1);
  getSleepingHours(person2);
  getSleepingHours(person3);

  

  ///---------------------------------------------------

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  // pi for circle
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  // height , width for rectangle
  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape = new Shape();
  const circle = new Circle(15);
  const rectangle = new Rectangle(10, 20);

  getShapeArea(shape);
  getShapeArea(circle);
  getShapeArea(rectangle);
  //
}
