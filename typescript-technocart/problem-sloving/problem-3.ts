{
  // Develop a TypeScript function that effortlessly adds together any number of numerical values passed to it. This function should neatly calculate their sum, showcasing its ability to handle different quantities of numbers.
  // Demonstrate the function by calculating the sum of various sets of numbers, highlighting its flexibility in processing variable inputs.



  const AddUnlimitedNumbers = (...rest:number[]):number=>{
    const total = rest.reduce((total,current)=>total = total + current,0);
    return total;
  }

  console.log(AddUnlimitedNumbers(2,4,5,3,4))


  //
}
