{
  //Develop a TypeScript function to retrieve specific details from an array of objects. Your task is to extract 'id' and 'name' properties, unveiling their concealed values.

  // After crafting the function, apply it to an array of diverse objects. Showcase the extracted 'id' and 'name' details, revealing the secrets kept within these mysterious objects.

  

  type User = {
    id: number;
    name: string;
  };

  const users: User[] = [
    {
      id: 1,
      name: "manik",
    },
    {
      id: 2,
      name: "roton",
    },
    {
      id: 3,
      name: "choton",
    },
    {
      id: 4,
      name: "koton",
    },
  ];

  function getSecretValue<T, K extends keyof T>(array: T[], key: K): T[K][] {
    const secretValue = array.map((obj) => obj[key]);
    return secretValue;
  }

  console.log(getSecretValue(users, "name"));

  //
}
