{
  // Learn constraint ---------------------------

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  // now you can not do that - heheeh
  //   const newStudent = addCourseToStudent({emmni:"amni"})

  const student1 = addCourseToStudent<{
    name: string;
    email: string;
    id: number;
  }>({
    id: 425,
    name: "manik",
    email: "manik@gmail.com",
  });
  const student2 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    hashWatch: string;
  }>({
    id: 125,
    name: "manik",
    email: "manik@gmail.com",
    hashWatch: "apple",
  });

  //
}
