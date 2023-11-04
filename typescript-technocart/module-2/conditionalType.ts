{
  // conditional type ----------------

  type a1 = number;
  type b1 = undefined;

  type x = a1 extends null ? true : false;
  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };
  // car asa kina, bike asa kina, ship asa kina check -------------
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasCar = CheckVehicle<"car">;

  //
}
