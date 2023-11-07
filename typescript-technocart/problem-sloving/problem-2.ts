{
  // Your challenge is to create a TypeScript function that turns an array of key-value pairs into a neatly organized object. Weave a function that seamlessly merges the keys and values from the array, transforming them into a structured object.

  // first way -----------------

  // const createObjectFromKeyValues = (keyValuePairs: [string, any][]): { [key: string]: any } =>
  //   keyValuePairs.reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

  // // Example usage:
  // const keyValuePairs: [string, any][] = [
  //   ["name", "John"],
  //   ["age", 30],
  //   ["city", "New York"],
  // ];

  // const structuredObject = createObjectFromKeyValues(keyValuePairs);
  // console.log(structuredObject);

  const keyValue: [string, any][] = [
    ["id", 23],
    ["name", "manik"],
    ["isMarrid", false],
  ];

  function arrayToObject<T extends string, U>(array: [T, U][]): Record<T, U> {
    const convertedObject = array.reduce((finalObj, [key, value]) => {
      finalObj[key] = value;
      return finalObj;
    }, {} as Record<T, U>);

    return convertedObject;
  }

  console.log(arrayToObject(keyValue));

  //
}
