{
  //
  // type assertion  -------------

  let anything: any;

  anything = "This is next level";
  anything = 100;

  // when you do it then suggest you like string , num , and other
  // (anything as string).length;
  (anything as number).toFixed(2);

  //
  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The convertedValue is : ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("1000") as string;

  //
  type CostumeError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CostumeError).message);
  }

  
  //
}
