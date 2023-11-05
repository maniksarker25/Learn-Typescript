{
  // Learn utility type --------------------

  // pick utility ---------------

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  // pick mana naua
  type Name = Pick<Person, "name">;
  type NameWithAge = Pick<Person, "name" | "age">;

  // omit utility ------------------------------
  // omit mana bad daua
  type ContactInfo = Omit<Person, "name" | "age">;

  // required utility --------------------------------

  type RequiredPerson = Required<Person>;

  // partial / sob gula ka optional banano

  type PersonPartial = Partial<Person>;

  // read only -------------------------------

  type PersonReadOnly = Readonly<Person>;

  // here you can change object value with out readonly --------

  const person1: Person = {
    name: "manik",
    age: 200,
    email: "djkjdf#@gmai",
    contactNo: "01144",
  };

  person1.name = "chnage name";

  // now use read only -------------------
  const person2: PersonReadOnly = {
    name: "manik",
    age: 200,
    email: "djkjdf#@gmai",
    contactNo: "01144",
  };
  // you can not change the value ---------------------
  // person2.name = "kdj"

  // record ------------------

  type MyObj = {
    a: string;
    b: string;
  };

  // here we can not add more data
  const obj1: MyObj = {
    a: "kd",
    b: "kdj",
    // c:"dkj"
  };

  // but when we use record then we can add more data -----------------

  type MyObj2 = Record<string, string>;

  const obj2: MyObj2 = {
    a: "ksjs",
    b: "kdjf",
    c: "kfjkdj",
    d: "kdjdkj",
  };

  //
  const emptyObject: Record<string, unknown> = {};

  emptyObject.name = "manik";
  emptyObject.age = 44;
  emptyObject.isAdmin = true;

  //
}
