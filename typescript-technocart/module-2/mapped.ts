{
  // learn mapped type -------------

  const arrOfNumbers: number[] = [3, 53, 55, 56];
  // const arrayOfStrings : string[] = ["3","53","55","56"];

  const arrayOfStrings: string[] = arrOfNumbers.map((arr) => arr.toString());
  console.log(arrayOfStrings);

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; // lock up type------------
  // normal way very desipointing ------

  // type AreaString = {
  //     height:string;
  //     width:string
  // }

  type AreaString = {
    [key in keyof AreaNumber]: string;
  };

  // with generic

  type AreaString1<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString1<{ height: string; width: number }> = {
    height: "500",
    width: 45,
  };

  //
}
