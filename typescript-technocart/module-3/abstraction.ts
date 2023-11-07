{
  // Learn abstraction --------------------
  // abstraction 2 baba kora jai : 1. interface , 2. abstract class babohar kora

  // with interface -------------------------
  // idea ----------

  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // real implementation -----------------------
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`I am starting the car1 engine`);
    }
    stopEngine(): void {
      console.log(`I am stopping the car1 engine`);
    }
    move(): void {
      console.log(`I am moving the car1 `);
    }
    // extra method o use korta parba
    test() {
      console.log(`I am testing engine for car1`);
    }
  }

  const toyota = new Car1();
  toyota.startEngine();

  // with abstract Class -----------------------------------------

  abstract class Car2 {
   abstract startEngine(): void;
   abstract stopEngine(): void;
   abstract move(): void;
    // extra method o use korta parba
    test() {
      console.log(`I am testing engine for car2`);
    }
  }

  // we can not create instance when use abstract class , we need to make child class --------------------------- -------
  //   const hondaCar = new Car2();
  //   hondaCar.startEngine()

  // here the child class for Car2 ,

  class toyotaCar extends Car2 {
    startEngine(): void {
        console.log(`I am starting the car2 engine`)
    }
    stopEngine(): void {
        console.log(`I am stopping the car2 engine`)
    }
    move(): void {
        console.log(`I am moving the car2`)
    }
  }

  //
}
