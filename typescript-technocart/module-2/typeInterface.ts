{
  // type interface ----------------
  // we can use interface in no primitive data we can not use it primitive data
  /// use type alias ------
  type User1 = {
    name: string;
    age: number;
  };
  type RollNumber1 = number;
  // use type interface
  interface User2 {
    name: string;
    age: number;
  }
  // we can not do that
  //   interface RollNumber2 = number;

  const user1: User1 = {
    name: "manik sarker",
    age: 20,
  };

  const user2: User2 = {
    name: "sarker",
    age: 41,
  };

  /// use intersection with type alias -------------

  type Person1 = {
    name:string,
    age:number
  }
  type PersonWithRoll = Person1 & {roll:string}

  const personWithRoll : PersonWithRoll = {
    name:"owo",
    age:41,
    roll:"manager"
  }

  // use intersection with type interface ---------------------
  type Person2 = {
    name:string;
    age:number
  }
  interface PersonWithRole2 extends Person2 {
    role:string
  }
  const personWithRole2 : PersonWithRole2 = {
    name:"woe",
    age:45,
    role:"ceo"
  }

  // use interface type with array -----------------------------

  // type alias 
  type Roll1 = number[];
  const roll1 : Roll1 = [1,5,5];

  // type interface 
  interface Roll2 {
    [index:number] : number
  }
  const roll2 : Roll2 = [5,4,5]



  // interface with function -----------------
  

  // with alias 
  type Add1 = (num1:number,num2:number)=>number;
  const add1 : Add1 = (num1,num2)=>num1 + num2;

  // with interface----------------
  interface Add2 {
    (num1:number,num2:number):number
  }
  const add2: Add2 = (num1,num2)=>num1 + num2;

  //
}
