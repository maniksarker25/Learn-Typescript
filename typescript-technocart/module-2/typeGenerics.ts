{
  // Generic type , generic with array , object , generic tuple  :----------------------------

  // const rollNumbers : number[] = [4,4,64,34];
  const rollNumbers: Array<number> = [4, 4, 64, 34];

  // const mentors : string[] = ["Mr x","Mr Y","Mr Z"];
  const mentors: Array<string> = ["Mr x", "Mr Y", "Mr Z"];

  // const boolArray : boolean[] = [true,false,false,true]
  const boolArray: Array<boolean> = [true, false, false, true];

  // use generic type with dynamically ----------------------------------------

  // normal -----------
  type RollArray = Array<number>;
  type MentorArray = Array<string>;
  const rollNumbers2: RollArray = [4, 34, 35];
  const mentorArray2: MentorArray = ["manik", "kdjkdj"];

  // dynamic -----------------
  type GenericArray<T> = Array<T>;

  const persons: GenericArray<string> = ["manik", "djfkdj", "kdjf"];
  const rolls: GenericArray<number> = [34, 5634, 65345];
  const bollArray: GenericArray<boolean> = [true, false, true, false];

  // object --------------

  // don't do that , because that can not got error  ----------------------
  const user: GenericArray<object> = [
    {
      name: "manik",
      age: 45,
    },
    {
      name: "kdjd",
      age: "kdjf",
    },
    {
      role: "admin",
    },
  ];

  // Always use this ----------------------

  const newUser: GenericArray<{
    name: string;
    age: number;
  }> = [
    {
      name: "manik",
      age: 41,
    },
    // {
    //     name:"kdjkd",
    //     age:"kd"
    // },
    {
      name: "etr",
      age: 45,
    },
  ];

  // Generic  tuple -----------------------

  type GenericTuple<X, Y> = [X, Y];
  const manus: GenericTuple<string, string> = ["Mr x", "Ms x"];
  //
  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    4564,
    { name: "manik", email: "a@gmail.com" },
  ];

  //
}
