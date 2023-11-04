{
  // Learn constraint with keyOf operator -------------------------

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually -----------
  type Owner2 = keyof Vehicle;

  const person: Owner2 = "bike";

  // ---------------------------------------

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user1 = {
    name: "manik",
    age: 25,
    address: "dhaka",
  };

  // now you can not do create problem here
  //   const result1 = getPropertyValue(user1, "model");

  const result1 = getPropertyValue(user1, "name");

  //
}
