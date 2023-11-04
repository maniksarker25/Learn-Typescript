{
  //function with generic -------------------------------------

  //
  const createArray = (param: string): string[] => {
    return [param];
  };
  const result1 = createArray("manik");

  // with generic ----------------------------

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const genericStringArray = createArrayWithGeneric<string>("manik");
  const genericObjectArray = createArrayWithGeneric<{
    name: string;
    roll: number;
  }>({ name: "manik", roll: 25 });

  // ---------------------
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const genericStringWithNumberArray = createArrayWithTuple<string, number>(
    "manik",
    45
  );
  const genericWithStringAndObject = createArrayWithTuple<
    string,
    { name: string; roll: number }
  >("manik", { name: "manik", roll: 25 });

  // more example -------------------------

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const result = addCourseToStudent<{ name: string; email: string }>({
    name: "manik",
    email: "manik@gmail.com",
  });

  //
}
