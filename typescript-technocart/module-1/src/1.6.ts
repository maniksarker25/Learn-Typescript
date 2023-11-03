// learning function

// normal function

function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(20, 20);

// arrow function

const sum = (num1: number, num2: number): number => num1 + num2;

// object -> function ->------method--------

const poorUser = {
  name: "manik sarker",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is ${this.balance + balance}`;
  },
};


// array map 
const arr : number[] = [2,4,5,6];
const newArray : number[] = arr.map((elem :number): number =>elem * elem)
